import { useContext } from "react"
import { ShoppingContext } from "../context"
import { AiOutlineShoppingCart } from "react-icons/ai"

export function Card({ data, name, price, category, image, description }) {
    const title = name.split(" ").slice(0, 2).join(" ")
    const {
        cartProducts, 
        setCartProducts,
        openProductDetail,
        setProductToShow,
    } = useContext(ShoppingContext)

    const addToCart = (product) => {
        setCartProducts([...cartProducts, product])
    }

    const previewProduct = (product) => {
        setProductToShow(product)
        openProductDetail()
    }

    return (
        <figure className="relative w-56 h-56 bg-blue-200 rounded-xl overflow-hidden">
            <p className="absolute top-0 left-0 bg-sky-400 rounded-xl p-2">{category}</p>

            <img 
                src={image} 
                alt={description} 
                className="aspect-video object-cover cursor-pointer"
            />

            <figcaption className="flex justify-between px-4 py-2">
                <p>{title}</p>
                <span className="text-black font-bold">${price}</span> 
            </figcaption>
            <div className="absolute bottom-2 flex justify-around w-full font-medium [&>button]:py-1 [&>button]:px-2 [&>button]:rounded-lg [&>button]:text-lg [&>button]:cursor-pointer">
                <button
                    className="transition-colors duration-300 bg-violet-300 hover:bg-violet-700 hover:text-white"
                    onClick={() => previewProduct(data)}
                >
                    Ver mas
                </button>
                <button
                    className="transition-colors duration-300 bg-purple-300 hover:bg-purple-700 hover:text-white"
                    onClick={() => addToCart(data)}
                >
                    Añadir 
                    <AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1"/> 
                </button>
            </div>
        </figure>
    )
}