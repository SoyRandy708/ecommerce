import { TOAST_MESSAGE } from "../constant"
import { toast } from "sonner"

export const filterProducts = (products, searchByTitle, searchByCategory) => {
	return products.filter(product => {
		const productName = product.title.toLowerCase()
		const productCategory = product.category.toLowerCase()
		const filterName = searchByTitle.toLowerCase()
		const filterCategory = searchByCategory.toLowerCase()

		if (productName.includes(filterName) && filterCategory === "all") {
			return true
		} else if (
			productName.includes(filterName) &&
			productCategory === filterCategory
		) {
			return true
		} else {
			return false
		}
	})
}

export const filterFavoriteProducts = (account, searchByTitle) => {
	return account?.favorites.filter(product => {
		const productoName = product.title.toLowerCase()
		const filterName = searchByTitle.toLowerCase()

		if (productoName.includes(filterName)) {
			return true
		}

		return false
	})
}

export const addToCart = (product, cartProducts, setCartProducts) => {
	setCartProducts([...cartProducts, product])
	toast.success(TOAST_MESSAGE.ADD_TO_CART)
}

export const addToFavorite = (product, signIn, account, saveAccount) => {
	if (!signIn) {
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

export const deleteToFavorite = (product, account, saveAccount) => {
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

export const openPreviewProduct = (
	product,
	setProductToShow,
	setIsOpenProductDetail
) => {
	setProductToShow(product)
	setIsOpenProductDetail(true)
}

export const closePreviewProduct = setIsOpenProductDetail => {
	setIsOpenProductDetail(false)
}

export const lessProduct = (product, cartProducts, setCartProducts) => {
	const newProducts = [...cartProducts]
	const index = newProducts.findIndex(pro => pro.title === product.title)
	newProducts.splice(index, 1)
	setCartProducts(newProducts)
}

export const plusProduct = (product, cartProducts, setCartProducts) => {
	const newProducts = [...cartProducts]
	const index = newProducts.findIndex(pro => pro.title === product.title)
	const newProduct = newProducts.find(pro => pro.title === product.title)
	newProducts.splice(index, 0, newProduct)
	setCartProducts(newProducts)
}

export const deleteProduct = (product, cartProducts, setCartProducts) => {
	const newProducts = cartProducts.filter(pro => pro.title !== product.title)
	setCartProducts(newProducts)
}

export const cleanCart = setCartProducts => {
	setCartProducts([])
}
