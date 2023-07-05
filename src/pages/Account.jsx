import { useContext } from "react"
import { ShoppingContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { SignIn } from "./SignIn"

export function Account() {
    const {
        orders,
    } = useContext(ShoppingContext)

    return (
        <>
            <section>
                <h1>Account</h1>    
                
            </section>

            <SignIn />


            <div className="flex flex-col items-center gap-3 w-full mt-20">
                <h2 className="text-2xl font-bold">My Orders</h2>
                {orders.map(order => 
                    <OrderCard 
                        key={order.date}
                        date={order.date}
                        price={order.totalPrice}
                        products={order.products}
                    />   
                )}
            </div>
        </>
    )
}