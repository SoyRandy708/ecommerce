import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Card } from "../components/Card"
import { Cards } from "../components/Cards"

export function Favorites() {
    const {
        setSearchByTitle,
        searchByTitle,
        favorites,
    } = useContext(ShoppingContext)

    const changeSearchTitle = (event) => {
        setSearchByTitle(event.target.value)
    }
    const filterFavoriteProducts = favorites.filter(product => {
        const productoName = product.title.toLowerCase()
        const filterName = searchByTitle.toLowerCase()

        if(productoName.includes(filterName)) {
            return product
        }
    })

    return (
        <>
            <input 
                type="text"
                value={searchByTitle}
                placeholder="Busca tu producto..."
                className="w-full max-w-sm p-3 m-5 border-2 border-black outline-none rounded-lg focus:border-blue-800"
                onChange={(event) => changeSearchTitle(event)}
            />

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
        </>
    )
}