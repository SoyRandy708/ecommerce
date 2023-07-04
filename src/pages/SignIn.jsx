import { useContext, useState, useRef } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingContext } from "../context"
import { Layout } from "../components/Layout"

export function SignIn() {
    const  {
        accountState,
        setSignOutState,
        setAccountState,
    } = useContext(ShoppingContext)
    const [view, setView] = useState("user-info")
    const form = useRef(null)

    const accountLocalStorage = localStorage.getItem("account")
    const parsedAccount = JSON.parse(accountLocalStorage)
    const notAccountInLocaleStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const notAccountInState = accountState ? Object.keys(accountState).length === 0 : true
    const hasUserAnAccount = !notAccountInLocaleStorage || !notAccountInState

    const createAnAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
        }

        const stringifiedAccount = JSON.stringify(data)
        localStorage.setItem("account", stringifiedAccount)
        setAccountState(data)

        handleSignIn()
    }

    const handleSignIn = () => {
        const stringifiedSignOut = JSON.stringify(false)
        localStorage.setItem("sign-out", stringifiedSignOut)
        setSignOutState(false)

        return <Navigate replace to={"/"} />
    }

    const renderLogin = () => {
        return (
            <div className="flex flex-col gap-5 w-80">
                <div>
                    <p>
                        <span className="font-light text-sm">Email:</span>
                        <span> {parsedAccount?.email} </span>
                    </p>

                    <p>
                        <span className="font-light text-sm">Password:</span>
                        <span> {parsedAccount?.password} </span>
                    </p>
                </div>

                <div>
                    <Link to="/">
                        <button
                            className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
                            disabled={!hasUserAnAccount}
                            onClick={() => handleSignIn()}
                        >
                            Log in
                        </button>
                    </Link>
                    
                    <div className="text-center">
                        <a href="/" className="font-light text-sm underline underline-offset-4">Forgot my password</a>
                    </div>
                </div>
                
                <button
                    className="w-full py-3 mt-2 border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg"
                    disabled={hasUserAnAccount}
                    onClick={() => setView("create-user-info")}
                >
                    Sign Up
                </button>
            </div>
        )
    }

    const renderCreateUserInfo = () => {
        return (
            <form ref={form} className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Your name:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        defaultValue={parsedAccount?.name}
                        placeholder="Randy"
                        className="py-2 px-4 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-light text-sm">Your email:</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        defaultValue={parsedAccount?.email}
                        placeholder="hi@helloworld.com"
                        className="py-2 px-4 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-light text-sm">Your password:</label>
                    <input 
                        type="text" 
                        id="password"
                        name="password"
                        defaultValue={parsedAccount?.password}
                        placeholder="******"
                        className="py-2 px-4 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
                    />
                </div>
                <Link to="/">
                    <button
                        className="w-full py-3 rounded-lg bg-black text-white"
                        onClick={() => createAnAccount()}
                    >
                        Create
                    </button>
                </Link>
            </form>
        )
    }

    const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogin()

    return (
        <Layout className="bg-red-600" >
            <h1 className="font-medium text-xl text-center">Welcome</h1>

            {renderView()}
        </Layout>
    )
}