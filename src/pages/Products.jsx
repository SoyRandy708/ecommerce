import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"
import { InputSearch } from "../components/InputSearch"
import { filterProducts } from "../lib"

export function Products() {
	const { searchByTitle, searchByCategory, products } =
		useContext(ShoppingContext)

	const filteredProducts = filterProducts(
		products,
		searchByTitle,
		searchByCategory
	)

	return (
		<>
			<InputSearch />

			<Cards>
				{filteredProducts.map(product => (
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
