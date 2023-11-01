import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"
import { InputSearch } from "../components/InputSearch"

export function Products() {
	const { searchByTitle, searchByCategory, products } =
		useContext(ShoppingContext)

	const filterProducts = products.filter(product => {
		const productoName = product.title.toLowerCase()
		const productCategory = product.category.toLowerCase()
		const filterName = searchByTitle.toLowerCase()
		const filterCategory = searchByCategory.toLowerCase()

		if (productoName.includes(filterName) && filterCategory === "all") {
			return true
		} else if (
			productoName.includes(filterName) &&
			productCategory === filterCategory
		) {
			return true
		} else {
			return false
		}
	})

	return (
		<>
			<InputSearch />

			<Cards>
				{filterProducts.map(product => (
					<Card
						key={product.id}
						data={product}
						title={product.title}
						price={product.price}
						category={product.category}
						image={product.images[0]}
						description={product.description}
					/>
				))}
			</Cards>

			<ProductDetail />
		</>
	)
}
