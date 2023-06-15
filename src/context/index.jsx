import { createContext, useState } from "react"

const ShoppingContext = createContext()

function ShoppingProvider({ children }) {
    const [products, setProducts] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [favorites, setFavorites] = useState([])
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const [productToShow, setProductToShow] = useState({})
    const [searchByTitle, setSearchByTitle] = useState("")

    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)

    const filterProducts = products.filter(product => {
        const productoName = product.title.toLowerCase()
        const filter = searchByTitle.toLowerCase()

        if(productoName.includes(filter)) {
            return product
        } 
    })

    return (
        <ShoppingContext.Provider value={{
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
            filterProducts,
        }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export { ShoppingContext, ShoppingProvider}