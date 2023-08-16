import { useContext, useEffect } from "react";
import { ShoppingContext } from "../context";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa"
import { MENU_LEFT } from "../constant";

export function Navbar() {
    const {
        account,
        signIn,
        cartProducts,
        setSearchByCategory,
    } = useContext(ShoppingContext)

    const activeStyle = "flex items-center inline-block w-full py-1 px-2 leading-[30px] bg-stone-50 rounded-lg"
    const desactivedStyle = "flex items-center inline-block w-full py-1 px-2 leading-[30px]"

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
        <nav className="w-full h-[50px] flex justify-between items-center fixed top-0 z-10 text-base bg-violet-300"> 
            <nav className="flex justify-between w-full max-w-5xl h-full m-auto py-2 px-8">
                <ul className="flex items-center gap-5">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({isActive}) => isActive ? `${activeStyle}` : `${desactivedStyle}`}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="group">
                        <NavLink
                            to={"/Products/All"}
                            onClick={() => selectCategory()}
                            className={`${desactivedStyle} cursor-pointer`}
                        >
                            Products    
                        </NavLink>
                            
                        <ul className="flex flex-col gap-2 absolute top-full w-auto invisible overflow-hidden p-3 rounded-b-lg bg-sky-300 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-100 group-hover:visible">
                            {MENU_LEFT.map(link => (
                                <li key={link.TEXT} >
                                    <NavLink 
                                        to={link.TO}
                                        onClick={() => selectCategory()}
                                        className={({isActive}) => isActive ? `${activeStyle}` : `${desactivedStyle}`}
                                    >
                                        {link.TEXT}
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
                            className={({isActive}) => isActive ? `${activeStyle}` : `${desactivedStyle}`}
                        >
                            <FaUser className="inline-block w-5 h-5 mr-1" />
                            {signIn ? account?.username : ""}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to={"/MyOrder"}
                            className={({isActive}) => isActive ? `${activeStyle}` : `${desactivedStyle}`}
                        >
                            <FaShoppingCart className="inline-block w-5 h-5 mr-1"/> 
                            {cartProducts.length}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </nav>
    )
}