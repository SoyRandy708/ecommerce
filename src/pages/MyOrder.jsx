import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { ShoppingContext } from "../context"

export function MyOrder() {
    const {
        cartProducts,
        setCartProducts,
        orders,
        setOrders,
        signOutState,
    } = useContext(ShoppingContext)
    const redirection = useNavigate()
    
    let totalPrice = 0
    const groupedProducts = [] 

    cartProducts.map(product => {
        totalPrice += product.price

        const existingProduct = groupedProducts.find(pro => pro.title === product.title)

        if (existingProduct) {
            existingProduct.quantity += 1
        } else {
            groupedProducts.push({ ...product, quantity: 1 })
        }
    })

    const lessProduct = (product) => {
        let newProducts = [...cartProducts]
        let index = newProducts.findIndex(pro => pro.title === product.title)
        newProducts.splice(index, 1)
        setCartProducts(newProducts)
    }

    const plusProduct = (product) => {
        let newProducts = [...cartProducts]
        let index = newProducts.findIndex(pro => pro.title === product.title)
        let newProduct = newProducts.find(pro => pro.title === product.title)
        newProducts.splice(index, 0, newProduct)
        setCartProducts(newProducts)
    }

    const deleteProduct = (product) => {
        const newProducts = cartProducts.filter(pro => pro.title !== product.title)
        setCartProducts(newProducts)
    }

    const cleanCart = () => {
        setCartProducts([])
    }
    
    const addOrder = () => {
        if(signOutState) {
            redirection("/SignIn")
            return
        }

        const newOrder = {
            products: cartProducts,
            totalPrice: totalPrice,
            date: Date(),
        }

        setOrders([newOrder, ...orders])
        cleanCart()
    }

    return (
        <>
            <h1>MyOrder</h1>
            {groupedProducts.length === 0 ? "SIN PRODUCTOS" :
                <div className="relative flex flex-wrap justify-center gap-3">
                    <nav className="w-9/12 max-w-3xl">
                        <ul className="grid grid-cols-[120px_1fr_1fr_1fr_40px] gap-2 place-items-center w-full font-bold">
                            <li></li>
                            <li>PRODUCTO</li>
                            <li>UNIDADES</li>
                            <li>PRECIO</li>
                        </ul>
                    </nav>
                    
                    {groupedProducts.map(product => (
                        <article 
                            key={product.id} 
                            className="grid grid-cols-[120px_1fr_1fr_1fr_40px] place-content-center place-items-center gap-2 w-9/12 h-24 max-w-3xl rounded-xl overflow-hidden bg-indigo-100"
                        >
                            <img 
                                src={product.images[0]} 
                                alt={product.title} 
                                className="w-full h-full object-cover"
                            />

                            <h2 className="flex-grow"> {product.title} </h2>
                            <p className="flex items-center gap-4 flex-grow"> 
                                <AiOutlineMinus 
                                    onClick={() => lessProduct(product)}
                                    className="text-2xl transition-colors duration-300 hover:text-red-600 cursor-pointer"
                                />
                                {product.quantity} 
                                <AiOutlinePlus 
                                    onClick={() => plusProduct(product)}
                                    className="text-2xl transition-colors duration-300 hover:text-green-600 cursor-pointer"
                                />
                            </p>
                            <p className="flex-grow"> ${product.price * product.quantity} </p>
                            <AiFillDelete 
                                onClick={() => deleteProduct(product)}
                                className="flex-grow text-3xl transition-colors duration-300 hover:text-red-600 cursor-pointer"
                            />
                        </article>
                    ))}
                    <p className="w-full max-w-3xl my-5 flex justify-between"> 
                        <span className="font-medium">TOTAL:</span>
                        <span className="font-bold">${totalPrice}</span>
                    </p>

                    <div className="flex justify-evenly w-full max-w-3xl">
                        <button
                            className="py-2 px-4 text-lg bg-black text-white rounded-md hover:bg-violet-700 transition-colors duration-300"
                            onClick={() => cleanCart()}
                        >Limpiar Carrito</button>

                        <button
                            className="py-2 px-4 text-lg bg-black text-white rounded-md hover:bg-violet-700 transition-colors duration-300"
                            onClick={() => addOrder()}
                        >Hacer pedido</button>
                    </div>
                </div>
            }
        </>
    )
}