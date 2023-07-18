import { useContext } from "react"
import { ShoppingContext } from "../context"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"

export function Products() {
    const {
        setSearchByTitle,
        searchByTitle,
        searchByCategory,
        products,
    } = useContext(ShoppingContext)

    const changeSearchTitle = (event) => {
        setSearchByTitle(event.target.value)
    }

    const filterProducts = products.filter(product => {
        const productoName = product.title.toLowerCase()
        const productCategory = product.category.toLowerCase()
        const filterName = searchByTitle.toLowerCase()
        const filterCategory = searchByCategory.toLowerCase()

        if(productoName.includes(filterName) && filterCategory === "all") {
            return product
        } else if(productoName.includes(filterName) && productCategory === filterCategory) {
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