import { createContext, useState, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { AllProducts } from "../services"

const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [favorites, setFavorites] = useState([])
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const [productToShow, setProductToShow] = useState({})
    const [searchByTitle, setSearchByTitle] = useState("")
    const [searchByCategory, setSearchByCategory] = useState("")

    const {
        item: account,
        saveItem: saveAccount,
    } = useLocalStorage("account", {})

    const {
        item: signIn,
        saveItem: saveSignIn,
    } = useLocalStorage("signIn", false)

    const hasUserAnAccount = Object.keys(account).length !== 0

    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)

    useEffect(() => {
        const fetchData = async () => {
            const productList = await AllProducts()
            setProducts(productList)
        }
    
        fetchData()
    }, [])

    const filterProducts = products.filter(product => {
        const productoName = product.title.toLowerCase()
        const productCategory = product.category.toLowerCase()
        const filterName = searchByTitle.toLowerCase()
        const filterCategory = searchByCategory.toLowerCase()

        if(productoName.includes(filterName) && filterCategory === "all") {
            return product
        } else if(productoName.includes(filterName) && productCategory === filterCategory) {
            return product
        }
    })

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
            orders,
            setOrders,
            favorites,
            setFavorites,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            productToShow,
            setProductToShow,
            searchByTitle,
            setSearchByTitle,
            searchByCategory,
            setSearchByCategory,
            filterProducts,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export { ShoppingContext, ShoppingProvider }