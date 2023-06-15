import { useContext } from "react";
import { ShoppingContext } from "../context";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai"

export function Navbar() {
    const {
        cartProducts
    } = useContext(ShoppingContext)

    const activeStyle = "underline underline-offset-4"

    const menuLeft = [
        {to: "/", texto: "Todo"},
        {to: "/Ropa", texto: "Ropa"},
        {to: "/Comestibles", texto: "Comestibles"},
        {to: "/Tecnologia", texto: "Tecnologia"},
        {to: "/Favorites", texto: "Favoritos"},
        {to: "/Otros", texto: "Otros"},
    ]

    const menuRight = [
        {to: "/", texto: "Home"},
        {to: "/MyAccount", texto: "MyAccount"},
    ]


    return (
        <nav className="w-full h-[60px] flex justify-between items-center fixed top-0 z-10 py-5 px-8 text-base bg-violet-200"> 
            <ul className="flex items-center gap-5">
                {menuLeft.map(link => (
                    <li key={link.texto} >
                        <NavLink 
                            to={link.to}
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
                        to={"/MyOrder"}
                    >
                        <AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1"/> 
                        {cartProducts.length}
                    </NavLink>
                </li>

                {menuRight.map(link => (
                    <li key={link.texto}>
                        <NavLink 
                            to={link.to}
                            className={({isActive}) => isActive ? activeStyle : ""}
                        >
                            {link.texto}
                        </NavLink>
                    </li>
                ))} 
            </ul>
        </nav>
    )
}