import { useContext } from "react"
import { ShoppingContext } from "../context"
import { OrderCard } from "../components/OrderCard"

export function MyAccount() {
    const {
        orders,
    } = useContext(ShoppingContext)

    return (
        <>
            <h1>MyAccount</h1>


            <div className="flex flex-col items-center gap-3 w-full mt-20">
                <h2 className="text-2xl font-bold">My Orders</h2>
                {orders.length < 1 ? <p className="absolute top-[50%] text-lg">SIN ORDENES</p> 
                : orders.map(order => 
                    <OrderCard 
                        key={order.date}
                        date={order.date}
                        price={order.totalPrice}
                        products={order.products}
                    />   
                )
            }
            </div>
        </>
    )
}