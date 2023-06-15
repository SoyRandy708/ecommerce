import { useContext, useEffect } from "react"
import { AllProducts } from "../services"
import { ShoppingContext } from "../context"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"

export function Home() {
    const {
        setProducts,
        setSearchByTitle,
        filterProducts,
    } = useContext(ShoppingContext)

    const changeSearchTitle = (event) => {
        setSearchByTitle(event.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const productList = await AllProducts()
            setProducts(productList)
        }
    
        fetchData()
    }, [])

    return (
        <>
            <h1 className="m-4 text-2xl font-bold">HOME</h1>

            <input 
                type="text"
                placeholder="Busca tu producto..."
                className="w-full max-w-sm p-3 mb-5 border-2 border-black outline-none rounded-lg focus:border-blue-800"
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