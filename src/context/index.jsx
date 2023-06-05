import { createContext } from "react"
import { useState } from "react"

const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
    const [cartCounter, setCartCounter] = useState(0)
    console.log(cartCounter)

    return (
        <ShoppingContext.Provider value={{
            cartCounter,
            setCartCounter,

        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export { ShoppingContext, ShoppingProvider}