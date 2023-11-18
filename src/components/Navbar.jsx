import { useContext, useEffect } from "react"
import { ShoppingContext } from "../context"
import { NavLink } from "react-router-dom"
import { FaShoppingCart, FaUser, FaChevronUp } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { HiOutlineMenu } from "react-icons/hi"
import { MENU_LEFT } from "../constant"

export function Navbar() {
	const { account, signIn, cartProducts, setSearchByCategory } =
		useContext(ShoppingContext)

	const activeStyle =
		"flex items-center inline-block w-full py-1 px-2 bg-stone-50 rounded-lg"
	const desactivedStyle = "flex items-center inline-block w-full py-1 px-2"

	const selectCategory = () => {
		setTimeout(() => {
			const path = window.location.pathname

			if (path.includes("All")) {
				setSearchByCategory("ALL")
			} else if (path.includes("Favorites")) {
				setSearchByCategory("Favorites")
			} else {
				const categoria = path.slice(19)
				setSearchByCategory(categoria)
			}
		}, 0)
	}

	const activeMenu = () => {
		const iconos = document.querySelectorAll(".icon")
		const menu = document.querySelector(".menu")

		iconos.forEach(icon => {
			icon.classList.toggle("hidden")
		})

		menu.classList.toggle("hidden")
		menu.classList.toggle("flex")
	}

	const activeSubMenu = () => {
		const submenu = document.querySelector(".submenu")
		const iconSubmenu = document.querySelector(".icon_submenu")

		if (window.innerWidth < 640) {
			submenu.classList.toggle("max-h-96")
			iconSubmenu.classList.toggle("rotate-180")
		}
	}

	useEffect(() => {
		selectCategory()
	}, [])

	return (
		<nav className="nav flex flex-col justify-center items-end w-full h-auto p-2 fixed top-0 z-10 text-base bg-violet-300">
			<div className="sm:hidden">
				<HiOutlineMenu className="icon w-8 h-8" onClick={() => activeMenu()} />
				<IoClose className="icon w-8 h-8 hidden" onClick={() => activeMenu()} />
			</div>

			<ul className="menu hidden flex-col w-full gap-5 sm:flex sm:flex-row sm:justify-around">
				<ul className="flex flex-col sm:flex-row gap-5">
					<li>
						<NavLink
							to={"/"}
							onClick={() => selectCategory()}
							className={({ isActive }) =>
								isActive ? `${activeStyle}` : `${desactivedStyle}`
							}
						>
							Home
						</NavLink>
					</li>

					<li className="group">
						<span
							onClick={() => activeSubMenu()}
							className={`${desactivedStyle} flex gap-1 cursor-pointer`}
						>
							Products
							<FaChevronUp className="icon_submenu w-5 h-5 sm:group-hover:rotate-180 transition-transform duration-300" />
						</span>

						<div className="submenu max-h-0 sm:group-hover:max-h-96 overflow-hidden rounded-b-lg bg-violet-300 transition-all duration-300 sm:absolute">
							<ul className="flex flex-col gap-1 p-3">
								{MENU_LEFT.map(link => (
									<li key={link.TEXT}>
										<NavLink
											to={link.TO}
											onClick={() => selectCategory()}
											className={({ isActive }) =>
												isActive ? `${activeStyle}` : `${desactivedStyle}`
											}
										>
											{link.TEXT}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</li>
				</ul>

				<ul className="flex flex-col sm:flex-row gap-5">
					<li>
						<NavLink
							to={"/Account"}
							onClick={() => selectCategory()}
							className={({ isActive }) =>
								isActive ? `${activeStyle}` : `${desactivedStyle}`
							}
						>
							<FaUser className="inline-block w-5 h-5 mr-1" />
							{signIn ? account?.username : ""}
						</NavLink>
					</li>

					<li>
						<NavLink
							to={"/MyOrder"}
							onClick={() => selectCategory()}
							className={({ isActive }) =>
								isActive ? `${activeStyle}` : `${desactivedStyle}`
							}
						>
							<FaShoppingCart className="inline-block w-5 h-5 mr-1" />
							{cartProducts.length}
						</NavLink>
					</li>
				</ul>
			</ul>
		</nav>
	)
}
