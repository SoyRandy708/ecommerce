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
