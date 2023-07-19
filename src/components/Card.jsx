import { useContext } from "react"
import { ShoppingContext } from "../context"
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export function Card({ data, title, price, category, image, description }) {
    const {
        cartProducts, 
        setCartProducts,
        account,
        saveAccount,
        setProductToShow,
        setIsOpenProductDetail,
    } = useContext(ShoppingContext)

    const addToCart = (product) => {
        setCartProducts([...cartProducts, product])
    }

    const addToFavorite = (product) => {
        const data = {
            ...account,
            favorites: [product, ...account?.favorites],
        }
        saveAccount(data)
    }

    const deleteToFavorite = (product) => {
        const newFavorites = [...account?.favorites]
        const index = newFavorites.findIndex(pro => pro.title === product.title)
        newFavorites.splice(index, 1)
        
        const data = {
            ...account,
            favorites: [...newFavorites],
        }
        saveAccount(data)
    }

    const previewProduct = (product) => {
        setProductToShow(product)
        setIsOpenProductDetail(true)
    }

    return (
        <figure className="relative w-full h-auto bg-blue-200 shadow-xl rounded-xl overflow-hidden">
            {account?.favorites.find(pro => pro.title === title) ? 
                <AiFillHeart 
                    onClick={() => deleteToFavorite(data)}
                    className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
                />
            : 
                <AiOutlineHeart 
                    onClick={() => addToFavorite(data)}
                    className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"   
                />
            }
            <p className="absolute top-0 left-0 bg-sky-400 rounded-xl p-2"> {category} </p>

            <img 
                src={image} 
                alt={description} 
                className="aspect-video object-cover"
            />

            <div className="flex flex-col gap-2 p-2">
                <figcaption className="flex gap-3 justify-between p-1">
                    <p className="text-ellipsis whitespace-nowrap overflow-hidden"> {title} </p>
                    <span className="text-black font-bold"> ${price} </span> 
                </figcaption>

                <div className="flex justify-around w-full font-medium [&>button]:py-1 [&>button]:px-2 [&>button]:rounded-lg [&>button]:text-lg [&>button]:cursor-pointer">
                    <button
                        className="flex transition-colors duration-300 bg-violet-300 hover:bg-violet-700 hover:text-white"
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
            </div>
        </figure>
    )
}