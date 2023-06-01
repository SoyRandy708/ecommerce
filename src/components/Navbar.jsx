import { NavLink } from "react-router-dom";

export function Navbar() {
    const activeStyle = "underline underline-offset-4"
    const menuLeft = [
        {to: "/", texto: "Todo"},
        {to: "/Ropa", texto: "Ropa"},
        {to: "/Comestibles", texto: "Comestibles"},
        {to: "/Tecnologia", texto: "Tecnologia"},
        {to: "/Otros", texto: "Otros"},
    ]

    const menuRight = [
        {to: "/", texto: "Home"},
        {to: "/MyOrder", texto: "MyOrder"},
        {to: "/MyAccount", texto: "MyAccount"},
    ]

    return (
        <nav className="w-full flex justify-between items-center fixed top-0 z-10 py-5 px-8 text-base"> 
            <ul className="flex items-center gap-5">
                {menuLeft.map(link => (
                    <li
                        key={link.texto}
                    >
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
            {menuRight.map(link => (
                    <li
                        key={link.texto}
                    >
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