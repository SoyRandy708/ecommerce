import { AiFillDelete } from "react-icons/ai"
import { useContext } from "react"
import { ShoppingContext } from "../context"

export function MyOrder() {
    const {
        cartProducts,
    } = useContext(ShoppingContext)

    return (
        <>
            <h1>MyOrder</h1>

            <div className="flex flex-wrap justify-center gap-3">
                {cartProducts.map(product => (
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
                        <p className="flex-grow"> CANTIDAD DE PRODUCTOS </p>
                        <p className="flex-grow"> ${product.price} </p>
                        <AiFillDelete className="flex-grow text-3xl transition-colors duration-300 hover:text-red-600 cursor-pointer"/>
                    </article>
                ))}
            </div>
        </>
    )
}