import { useContext } from "react"
import { ShoppingContext } from "../context"
import {
	AiOutlineShoppingCart,
	AiOutlineHeart,
	AiFillHeart,
} from "react-icons/ai"
import { BUTTONS_TEXT } from "../constant"
import {
	addToCart,
	openPreviewProduct,
	addToFavorite,
	deleteToFavorite,
} from "../lib"

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

	const renderIconCard = () => {
		return !signIn ? (
			<AiOutlineHeart
				className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
				onClick={() => addToFavorite(data, signIn, account, saveAccount)}
			/>
		) : account?.favorites.find(pro => pro.title === title) ? (
			<AiFillHeart
				onClick={() => deleteToFavorite(data, account, saveAccount)}
				className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
			/>
		) : (
			<AiOutlineHeart
				onClick={() => addToFavorite(data, signIn, account, saveAccount)}
				className="absolute top-2 right-2 w-7 h-7 text-red-700 cursor-pointer hover:scale-125 duration-200 ease-in"
			/>
		)
	}

	return (
		<figure className="relative w-full h-full bg-blue-200 shadow-xl rounded-xl overflow-hidden">
			{renderIconCard()}
			<p className="absolute top-0 left-0 bg-sky-400 rounded-xl p-2">
				{" "}
				{category}{" "}
			</p>

			<img
				src={image}
				alt={description}
				className="aspect-video object-cover"
			/>

			<div className="flex flex-col gap-2 p-2">
				<figcaption className="flex flex-col gap-3 justify-between p-1 sm:flex-row">
					<p className="text-ellipsis whitespace-nowrap overflow-hidden">
						{title}
					</p>
					<span className="text-black font-bold"> ${price} </span>
				</figcaption>

				<div className="flex flex-col gap-2 content-center justify-around w-full font-medium [&>button]:py-1 [&>button]:px-2 [&>button]:rounded-lg [&>button]:text-lg [&>button]:cursor-pointer sm:flex-row">
					<button
						className="flex-grow transition-colors whitespace-nowrap duration-300 bg-violet-300 hover:bg-violet-700 hover:text-white"
						onClick={() =>
							openPreviewProduct(data, setProductToShow, setIsOpenProductDetail)
						}
					>
						{BUTTONS_TEXT.SEE_MORE}
					</button>
					<button
						className="flex-grow transition-colors whitespace-nowrap duration-300 bg-purple-300 hover:bg-purple-700 hover:text-white"
						onClick={() => addToCart(data, cartProducts, setCartProducts)}
					>
						{BUTTONS_TEXT.ADD_TO_CART}
						<AiOutlineShoppingCart className="inline-block w-6 h-6 mr-1" />
					</button>
				</div>
			</div>
		</figure>
	)
}
