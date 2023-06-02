import { useState, useEffect } from "react"
import { Cards } from "../components/Cards"
import { Card } from "../components/Card"
import { API } from "../services/api"

export function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products)
            })
    }, [])

    return (
        <>
            <h1>HOME</h1>

            <Cards>
                {products.map(product => (
                    <Card 
                        key={product.id}
                        name={product.title}
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