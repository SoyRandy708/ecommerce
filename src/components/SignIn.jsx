import { useContext, useState, useRef } from "react"
import { ShoppingContext } from "../context"

export function SignIn() {
    const  {
        account,
        saveAccount,
        hasUserAnAccount,
        signIn,
        saveSignIn,
    } = useContext(ShoppingContext)
    const [view, setView] = useState("user-info")
    const form = useRef(null)

    const editAccount = () => {
        const formData = new FormData(form.current)
        const data = {
            username: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            orders: Array.isArray(account?.orders) ? [...account.orders] : [],
            favorites: Array.isArray(account?.favorites) ? [...account.favorites] : [],
        }

        saveAccount(data)
        setView("user-info")
    }

    const renderButton = () => {
        if(!signIn) {
            return (
                <button
                    className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
                    disabled={!hasUserAnAccount}
                    onClick={() => saveSignIn(true)}
                >
                    Sign In
                </button>
            )
        } else {
            return (
                <div className="w-full flex gap-2">
                    <button
                        className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
                        disabled={!hasUserAnAccount}
                        onClick={() => saveSignIn(false)}
                    >
                        Sign Out
                    </button>

                    <button
                        className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
                        disabled={!hasUserAnAccount}
                        onClick={() => setView("edit-user-info")}
                    >
                        Edit
                    </button>
                </div>                
            )
        }
    }

    const renderLogin = () => {
        return (
            <div className="flex flex-col gap-5 w-80">
                <div>
                    <p className="font-light">
                        Username:
                        <span className="font-medium"> {account?.username} </span>
                    </p>

                    <p className="font-light">
                        Email:
                        <span className="font-medium"> {account?.email} </span>
                    </p>
                </div>

                <div>
                    {renderButton()}
                    
                    <div className="text-center">
                        <a href="/" className="font-light text-sm underline underline-offset-4">Forgot my password</a>
                    </div>
                </div>
                
                <button
                    className="w-full py-3 mt-2 border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg"
                    disabled={hasUserAnAccount}
                    onClick={() => setView("edit-user-info")}
                >
                    Sign Up
                </button>
            </div>
        )
    }

    const renderEditUserInfo = () => {
        return (
            <form ref={form} className="flex flex-col gap-4 w-80">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-light text-sm">Your username:</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        defaultValue={account?.username}
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
                        defaultValue={account?.email}
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
                        defaultValue={account?.password}
                        placeholder="******"
                        className="py-2 px-4 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
                    />
                </div>
                <div className="w-full flex gap-2">
                    <button
                        className="w-full py-3 rounded-lg bg-black text-white"
                        onClick={() => setView("user-info")}
                    >
                        Cancel
                    </button>

                    <button
                        className="w-full py-3 rounded-lg bg-black text-white"
                        onClick={() => editAccount()}
                    >
                        {!hasUserAnAccount ? "Create" : "Edit"}
                    </button>
                </div>
            </form>
        )
    }

    const renderView = () => view === "edit-user-info" ? renderEditUserInfo() : renderLogin()

    return (
            <div className="flex flex-col justify-center gap-4 min-h-[calc(100vh-120px)]">
                <h1 className="title">Welcome</h1>

                {renderView()}
            </div>
    )
}