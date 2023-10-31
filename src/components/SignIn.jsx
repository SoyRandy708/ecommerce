import { useContext, useState, useRef } from "react"
import { ShoppingContext } from "../context"
import { toast } from "sonner"
import { TOAST_MESSAGE, BUTTONS_TEXT } from "../constant"

export function SignIn() {
	const { account, saveAccount, hasUserAnAccount, signIn, saveSignIn } =
		useContext(ShoppingContext)
	const [view, setView] = useState("user-info")
	const form = useRef(null)
	const regex = {
		email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		password: /^(?=.*\d).{8,20}$/,
	}

	const checkForm = e => {
		const input = e.target
		const container = e.target.parentNode
		const messageError = container.querySelector(".message-error")

		console.log(messageError)

		if (input.id === "username") {
			if (input.value.length > 4 && input.value.length < 21) {
				input.style.borderColor = "green"
				messageError.classList.remove("block")
				messageError.classList.add("hidden")
			} else {
				input.style.borderColor = "red"
				messageError.classList.add("block")
				messageError.classList.remove("hidden")
			}
		} else if (input.id === "email") {
			if (regex.email.test(input.value)) {
				input.style.borderColor = "green"
				messageError.classList.remove("block")
				messageError.classList.add("hidden")
			} else {
				input.style.borderColor = "red"
				messageError.classList.add("block")
				messageError.classList.remove("hidden")
			}
		} else if (input.id === "password") {
			if (regex.password.test(input.value)) {
				input.style.borderColor = "green"
				messageError.classList.remove("block")
				messageError.classList.add("hidden")
			} else {
				input.style.borderColor = "red"
				messageError.classList.add("block")
				messageError.classList.remove("hidden")
			}
		}
	}

	const editAccount = event => {
		event.preventDefault()

		const formData = Object.fromEntries(new FormData(form.current))

		if (
			formData.username.length > 4 &&
			regex.email.test(formData.email) &&
			formData.password.length > 5
		) {
			const data = {
				username: formData.username,
				email: formData.email,
				password: formData.password,
				orders: Array.isArray(account?.orders) ? [...account.orders] : [],
				favorites: Array.isArray(account?.favorites)
					? [...account.favorites]
					: [],
			}

			setView("user-info")
			saveAccount(data)

			if (!hasUserAnAccount) {
				toast.success(TOAST_MESSAGE.ACCOUNT_CREATED)
				saveSignIn(true)
			} else {
				toast.success(TOAST_MESSAGE.ACCOUNT_MODIFIED)
			}
		} else {
			toast.error(TOAST_MESSAGE.FORM_INCORRECT)
		}
	}

	const renderButton = () => {
		if (!signIn) {
			return (
				<button
					className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
					disabled={!hasUserAnAccount}
					onClick={() => saveSignIn(true)}
				>
					{BUTTONS_TEXT.SIGN_IN}
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
						{BUTTONS_TEXT.SIGN_OUT}
					</button>

					<button
						className="w-full py-3 bg-black disabled:bg-black/40 text-white rounded-lg"
						disabled={!hasUserAnAccount}
						onClick={() => setView("edit-user-info")}
					>
						{BUTTONS_TEXT.EDIT}
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
						<a
							href="/"
							className="font-light text-sm underline underline-offset-4"
						>
							Forgot my password
						</a>
					</div>
				</div>

				<button
					className="w-full py-3 mt-2 border border-black disabled:border-black/40 disabled:text-black/40 rounded-lg"
					disabled={hasUserAnAccount}
					onClick={() => setView("edit-user-info")}
				>
					{BUTTONS_TEXT.SIGN_UP}
				</button>
			</div>
		)
	}

	const renderEditUserInfo = () => {
		return (
			<form ref={form} className="flex flex-col gap-4 w-80">
				<div className="flex flex-col gap-1">
					<label htmlFor="username" className="font-light text-sm">
						Your username:
					</label>
					<input
						type="text"
						id="username"
						name="username"
						defaultValue={account?.username}
						onChange={e => checkForm(e)}
						placeholder="Randy"
						className="py-2 px-4 border-2 border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
					/>
					<ul className="message-error [text-wrap:balance] hidden text-red-600 text-xs list-disc pl-5">
						<li>El username tiene que tener entre 5 y 20 caracteres.</li>
					</ul>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="email" className="font-light text-sm">
						Your email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						defaultValue={account?.email}
						onChange={e => checkForm(e)}
						placeholder="hi@helloworld.com"
						className="py-2 px-4 border-2 border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
					/>
					<ul className="message-error [text-wrap:balance] hidden text-red-600 text-xs list-disc pl-5">
						<li>
							El email debe de tener una estructura tipica de uno
							usuario@dominio.com
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-1">
					<label htmlFor="password" className="font-light text-sm">
						Your password:
					</label>
					<input
						type="text"
						id="password"
						name="password"
						defaultValue={account?.password}
						onChange={e => checkForm(e)}
						placeholder="******"
						className="py-2 px-4 border-2 border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-balck/60 focus:outline-none"
					/>
					<ul className="message-error [text-wrap:balance] hidden text-red-600 text-xs list-disc pl-5">
						<li>
							La contraseña debe tener una longitud entre 8 y 20 caracteres.
						</li>
						<li>La contraseña debe de incluir por lo menos 1 digíto</li>
					</ul>
				</div>

				<div className="w-full flex gap-2">
					<button
						className="w-full py-3 rounded-lg bg-black text-white"
						onClick={() => setView("user-info")}
					>
						{BUTTONS_TEXT.CANCEL}
					</button>

					<button
						className="w-full py-3 rounded-lg bg-black text-white"
						onClick={event => editAccount(event)}
					>
						{!hasUserAnAccount ? "Create" : "Edit"}
					</button>
				</div>
			</form>
		)
	}

	const renderView = () =>
		view === "edit-user-info" ? renderEditUserInfo() : renderLogin()

	return (
		<div className="flex flex-col justify-center gap-4 min-h-[calc(100vh-120px)]">
			<h1 className="title">Welcome</h1>

			{renderView()}
		</div>
	)
}
