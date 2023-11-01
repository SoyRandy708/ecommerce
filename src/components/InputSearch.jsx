import { useContext } from "react"
import { ShoppingContext } from "../context"

export function InputSearch() {
	const { searchByTitle, setSearchByTitle } = useContext(ShoppingContext)

	return (
		<input
			type="text"
			value={searchByTitle}
			placeholder="Busca tu producto..."
			className="w-full max-w-sm p-3 m-5 border-2 border-black outline-none rounded-lg focus:border-blue-800"
			onChange={event => setSearchByTitle(event.target.value)}
		/>
	)
}
