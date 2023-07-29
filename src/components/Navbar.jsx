import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai"
import { MdAccountCircle } from "react-icons/md"

export function Navbar() {
    const {
        account,
        signIn,
        cartProducts,
        setSearchByCategory,
    } = useContext(ShoppingContext)

    const menuLeft = [
        {to: "/Products/All", text: "All"},
        {to: "/Products/Favorites", text: "Favorites"},
        {to: "/Products/Category/Smartphones", text: "Smartphones"},
        {to: "/Products/Category/Laptops", text: "Laptops"},
        {to: "/Products/Category/Fragrances", text: "Fragrances"},
        {to: "/Products/Category/Skincare", text: "Skincare"},
        {to: "/Products/Category/Groceries", text: "Groceries"},
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
        <nav className="w-full h-[50px] flex justify-between items-center fixed top-0 z-10 text-base bg-violet-200"> 
            <nav className="flex justify-between w-full max-w-5xl h-full m-auto py-2 px-8">
                <ul className="flex items-center gap-5">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({isActive}) => isActive ? "font-bold p-2.5 leading-[30px]" : "p-2.5 leading-[30px]"}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="group">
                        <NavLink
                            to={"/Products/All"}
                            onClick={() => selectCategory()}
                            className="p-2.5 leading-[30px] cursor-pointer"
                        >
                            Products    
                        </NavLink>
                            
                        <ul className="flex flex-col gap-2 absolute top-full w-auto invisible overflow-hidden p-3 rounded-b-lg bg-cyan-200 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-100 group-hover:visible">
                            {menuLeft.map(link => (
                                <li key={link.text} >
                                    <NavLink 
                                        to={link.to}
                                        onClick={() => selectCategory()}
                                        className={({isActive}) => isActive ? "inline-block w-full p-2 font-bold" : "inline-block w-full p-2"}
                                    >
                                        {link.text}
                                    </NavLink>
                                </li>
                            ))}             
                        </ul>
                    </li>
                </ul>

                <ul className="flex items-center gap-5">
                    <li>
                        <NavLink
                            to={"/Account"}
                            className="p-2.5 leading-[30px]"
                        >
                            <MdAccountCircle  className="inline-block w-7 h-7 mr-1" />
                            {signIn ? account?.username : ""}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/MyOrder"}
                            className="p-2.5 leading-[30px]"
                        >
                            <AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1"/> 
                            {cartProducts.length}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}