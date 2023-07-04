import { useContext } from "react";
import { ShoppingContext } from "../context";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"

export function Navbar() {
    const {
        signOutState,
        setSignOutState,
        cartProducts,
        setSearchByCategory,
    } = useContext(ShoppingContext)

    const activeStyle = "underline underline-offset-4"
    const signOutLocaleStorage = localStorage.getItem("sign-out")
    const parsedSignOut = JSON.parse(signOutLocaleStorage)
    const isUserSignOut = signOutState || parsedSignOut

    const renderView = () => {
        if(isUserSignOut) {
            return (
                <li>
                    <NavLink
                        to={"/SignIn"}
                        onClick={() => handleSignOut()}
                    >
                        Sign In
                    </NavLink>
                </li>
            )
        } else {
            return (
                <>
                    <li>
                        <NavLink
                            to={"/SignIn"}
                            onClick={() => handleSignOut()}
                        >
                            Sign Out
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/MyAccount"}
                        >
                            My Account
                        </NavLink>
                    </li>
                </>
            )
        }
    }

    const menuLeft = [
        {to: "/Products/All", texto: "All"},
        {to: "/Products/Favorites", texto: "Favorites"},
        {to: "/Products/Category/Smartphones", texto: "Smartphones"},
        {to: "/Products/Category/Laptops", texto: "Laptops"},
        {to: "/Products/Category/Fragrances", texto: "Fragrances"},
        {to: "/Products/Category/Skincare", texto: "Skincare"},
        {to: "/Products/Category/Groceries", texto: "Groceries"},
        {to: "/Products/Category/Products-decoration", texto: "Products-decoration"},
    ]

    const handleSignOut = () => {
        const stringifiedSignOut = JSON.stringify(true)
        localStorage.setItem("sign-out", stringifiedSignOut)

        setSignOutState(true)
    }

    const selectCategory = (event) => {
        setSearchByCategory(event.target.textContent)
    }

    return (
        <nav className="w-full h-[60px] flex justify-between items-center fixed top-0 z-10 py-5 px-8 text-base bg-violet-200"> 
            <ul className="flex items-center gap-5">
                {menuLeft.map(link => (
                    <li key={link.texto} >
                        <NavLink 
                            to={link.to}
                            onClick={(event) => selectCategory(event)}
                            className={({isActive}) => isActive ? activeStyle : ""}
                        >
                            {link.texto}
                        </NavLink>
                    </li>
                ))}             
            </ul>

            <ul className="flex items-center gap-5">
                {renderView()}

                <li>
                    <NavLink
                        to={"/MyOrder"}
                    >
                        <AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1"/> 
                        {cartProducts.length}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}