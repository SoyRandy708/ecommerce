import { createContext, useState, useEffect } from "react"
import { AllProducts } from "../services"

const ShoppingContext = createContext()

function initialLocalStorage () {
    const accountInLocalStorage = localStorage.getItem("account")
    const signOutInLocalStorage = localStorage.getItem("sign-out")
    let parsedAccount, parsedSignOut

    if(!accountInLocalStorage) {
        localStorage.setItem("account", JSON.stringify({}))
        parsedAccount = {}   
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem("sign-out", JSON.stringify(false))
        parsedSignOut = false   
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

function ShoppingProvider({ children }) {
    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(false)
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [favorites, setFavorites] = useState([])
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const [productToShow, setProductToShow] = useState({})
    const [searchByTitle, setSearchByTitle] = useState("")
    const [searchByCategory, setSearchByCategory] = useState("")

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
            setAccount,
            signOut,
            setSignOut,
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

export { ShoppingContext, ShoppingProvider, initialLocalStorage }