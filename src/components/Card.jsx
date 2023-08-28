import { useContext } from "react"
import { ShoppingContext } from "../context"
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { toast } from "sonner"
import { TOAST_MESSAGE, BUTTONS_TEXT } from "../constant"

export function Card({ data, title, price, category, image, description }) {
    const {
        cartProducts, 
        setCartProducts,
        signIn,
        account,
        saveAccount,
        setProductToShow,
        setIsOpenProductDetail,
    } = useContext(ShoppingContext)

    const addToCart = (product) => {
        setCartProducts([...cartProducts, product])
        toast.success(TOAST_MESSAGE.ADD_TO_CART)
    }

    const addToFavorite = (product) => {
        if(!signIn) {
            toast.error(TOAST_MESSAGE.UNLOGED_TO_ADD_FAVORITE)
        } else {
            const data = {
                ...account,
                favorites: [product, ...account?.favorites],
            }
            saveAccount(data)
            toast.success(TOAST_MESSAGE.ADD_TO_FAVORITES)
        }
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
        toast.error(TOAST_MESSAGE.DELETE_TO_FAVORITES)
    }

    const previewProduct = (product) => {
        setProductToShow(product)
        setIsOpenProductDetail(true)
    }

    const renderIconCard = () => {
        return !signIn ? (
            <AiOutlineHeart 
                className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
                onClick={() => addToFavorite(data)}
            />
        ) : (
            account?.favorites.find(pro => pro.title === title) ? (
                <AiFillHeart 
                    onClick={() => deleteToFavorite(data)}
                    className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
                />
            ) : (
                <AiOutlineHeart 
                    onClick={() => addToFavorite(data)}
                    className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"   
                />
            )
        )
    }

    return (
        <figure className="relative w-full h-full bg-blue-200 shadow-xl rounded-xl overflow-hidden">
            {renderIconCard()}
            <p className="absolute top-0 left-0 bg-sky-400 rounded-xl p-2"> {category} </p>

            <img 
                src={image} 
                alt={description} 
                className="aspect-video object-cover"
            />

            <div className="flex flex-col gap-2 p-2">
                <figcaption className="flex flex-col gap-3 justify-between p-1 sm:flex-row">
                    <p className="text-ellipsis whitespace-nowrap overflow-hidden"> {title} </p>
                    <span className="text-black font-bold"> ${price} </span> 
                </figcaption>

                <div className="flex flex-col gap-2 content-center justify-around w-full font-medium [&>button]:py-1 [&>button]:px-2 [&>button]:rounded-lg [&>button]:text-lg [&>button]:cursor-pointer sm:flex-row">
                    <button
                        className="flex-grow transition-colors whitespace-nowrap duration-300 bg-violet-300 hover:bg-violet-700 hover:text-white"
                        onClick={() => previewProduct(data)}
                    >
                        {BUTTONS_TEXT.SEE_MORE}
                    </button>
                    <button
                        className="flex-grow transition-colors whitespace-nowrap duration-300 bg-purple-300 hover:bg-purple-700 hover:text-white"
                        onClick={() => addToCart(data)}
                    >
                        {BUTTONS_TEXT.ADD_TO_CART}
                        <AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1"/> 
                    </button>
                </div>
            </div>
        </figure>
    )
}