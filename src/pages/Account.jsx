import { useContext } from "react"
import { ShoppingContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { SignIn } from "../components/SignIn"

export function Account() {
    const {
        orders,
        signIn,
    } = useContext(ShoppingContext)

    const renderOrders = () => {
        if (signIn) {
            return (
                <div className="flex flex-col items-center gap-3 w-full mt-20">
                    <h2 className="title">My Orders</h2>
                    {orders.map(order => 
                        <OrderCard 
                            key={order.date}
                            date={order.date}
                            price={order.totalPrice}
                            products={order.products}
                        />   
                    )}
                </div>
            )
        }
    }

    return (
        <>
            <SignIn />

            {renderOrders()}
        </>
    )
}