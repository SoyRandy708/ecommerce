import { useState, useEffect } from "react"
import { AllProducts } from "../services"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { ProductDetail } from "../components/ProductDetail"

export function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const productList = await AllProducts()
            setProducts(productList)
        }
    
        fetchData()
    }, [])

    return (
        <>
            <h1>HOME</h1>

            <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 w-full">
                {products.map(product => (
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
            </section>
            
            <ProductDetail />
        </>
    )
}