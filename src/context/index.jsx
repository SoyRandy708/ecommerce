import { createContext, useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { AllProducts } from "../services"

const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const [productToShow, setProductToShow] = useState({})
    const [searchByTitle, setSearchByTitle] = useState("")
    const [searchByCategory, setSearchByCategory] = useState("")

    const {
        item: account,
        saveItem: saveAccount,
    } = useLocalStorage("account", {
        username: "",
        email: "",
        password: "",
        orders: [],
        favorites: [],
    })

    const {
        item: signIn,
        saveItem: saveSignIn,
    } = useLocalStorage("signIn", false)

    const hasUserAnAccount = Object.keys(account).length !== 0

    useEffect(() => {
        const fetchData = async () => {
            const productList = await AllProducts()
            setProducts(productList)
        }
    
        fetchData()
    }, [])

    return (
        <ShoppingContext.Provider value={{
            account, 
            saveAccount,
            hasUserAnAccount,
            signIn,
            saveSignIn,
            products,
            setProducts,
            cartProducts,
            setCartProducts,
            isOpenProductDetail,
            setIsOpenProductDetail,
            productToShow,
            setProductToShow,
            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export { ShoppingContext, ShoppingProvider }