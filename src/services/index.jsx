const API = "https://dummyjson.com/products"

const AllProducts = async () => {
	try {
		const response = await fetch(API)
		const data = await response.json()
		return data.products
	} catch (error) {
		console.error(error)
	}
}

export { AllProducts }
