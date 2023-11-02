import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Card } from "../components/Card"
import { Cards } from "../components/Cards"
import { InputSearch } from "../components/InputSearch"
import { filterFavoriteProducts } from "../lib"

export function Favorites() {
	const { searchByTitle, account, signIn } = useContext(ShoppingContext)

	const filteredFavoriteProducts = filterFavoriteProducts(
		account,
		searchByTitle
	)

	const isUserSignIn = () => {
		return signIn ? (
			<>
				{filteredFavoriteProducts.length === 0 ? (
					<p className="message">Todavía no tienes productos favoritos.</p>
				) : (
					<Cards>
						{filteredFavoriteProducts.map(product => (
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
				)}
			</>
		) : (
			<p className="message">
				Inicia sesión para poder guardar tus productos favoritos.
			</p>
		)
	}

	return (
		<>
			<InputSearch />

			{isUserSignIn()}
		</>
	)
}
