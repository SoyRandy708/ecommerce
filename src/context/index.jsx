import { createContext } from "react"
import { useState } from "react"

const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
    const [cartCounter, setCartCounter] = useState(0)
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)

    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)

    return (
        <ShoppingContext.Provider value={{
            cartCounter,
            setCartCounter,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export { ShoppingContext, ShoppingProvider}