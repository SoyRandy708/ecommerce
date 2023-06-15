import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Card } from "../components/Card"
import { Cards } from "../components/Cards"

export function Favorites() {
    const {
        favorites,
    } = useContext(ShoppingContext)

    return (
        <>
            <h1 className="m-4 text-2xl font-bold">Productos Favoritos</h1>

            <Cards>
                {favorites.map(product => (
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