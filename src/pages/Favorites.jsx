import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Card } from "../components/Card"
import { Cards } from "../components/Cards"
import { InputSearch } from "../components/InputSearch"

export function Favorites() {
	const { searchByTitle, account, signIn } = useContext(ShoppingContext)

	const filterFavoriteProducts = account?.favorites.filter(product => {
		const productoName = product.title.toLowerCase()
		const filterName = searchByTitle.toLowerCase()

		if (productoName.includes(filterName)) {
			return true
		}

		return false
	})

	const isUserSignIn = () => {
		return signIn ? (
			<>
				{filterFavoriteProducts.length === 0 ? (
					<p className="message flex flex-grow items-center">
						Todavía no tienes productos favoritos.
					</p>
				) : (
					<Cards>
						{filterFavoriteProducts.map(product => (
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
			<p className="message flex flex-grow items-center">
				Tienes que iniciar sesión para poder guardar tus productos favoritos.
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
