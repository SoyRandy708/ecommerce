import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"

export function Navbar() {
    const {
        account,
        cartProducts,
        setSearchByCategory,
    } = useContext(ShoppingContext)

    const activeStyle = "underline underline-offset-4"

    const menuLeft = [
        {to: "/Products/All", texto: "All"},
        {to: "/Products/Favorites", texto: "Favorites"},
        {to: "/Products/Category/Smartphones", texto: "Smartphones"},
        {to: "/Products/Category/Laptops", texto: "Laptops"},
        {to: "/Products/Category/Fragrances", texto: "Fragrances"},
        {to: "/Products/Category/Skincare", texto: "Skincare"},
        {to: "/Products/Category/Groceries", texto: "Groceries"},
    ]

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

    useEffect(() => {
        selectCategory()
    }, [])

    return (
        <nav className="w-full h-[60px] flex justify-between items-center fixed top-0 z-10 py-5 px-8 text-base bg-violet-200"> 
            <ul className="flex items-center gap-5">
                {menuLeft.map(link => (
                    <li key={link.texto} >
                        <NavLink 
                            to={link.to}
                            onClick={() => selectCategory()}
                            className={({isActive}) => isActive ? activeStyle : ""}
                        >
                            {link.texto}
                        </NavLink>
                    </li>
                ))}             
            </ul>

            <ul className="flex items-center gap-5">
                <li>
                    <NavLink
                        to={"/Account"}
                    >
                        <MdAccountCircle  className="inline-block w-7 h-7 mr-1" />
                        {account?.username}
                    </NavLink>
                </li>

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