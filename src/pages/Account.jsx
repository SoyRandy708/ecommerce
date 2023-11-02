import { useContext } from "react"
import { ShoppingContext } from "../context"
import { OrderCard } from "../components/OrderCard"
import { SignIn } from "../components/SignIn"

export function Account() {
	const { account, signIn } = useContext(ShoppingContext)

	const renderOrders = () => {
		return signIn ? (
			<div className="flex flex-col items-center gap-3 w-full mt-20">
				<h2 className="title">My Orders</h2>
				{account?.orders.map(order => (
					<OrderCard
						key={order.date}
						date={order.date}
						price={order.totalPrice}
						products={order.products}
					/>
				))}
			</div>
		) : (
			<p className="message">Inicia sesión para poder ver tus compras.</p>
		)
	}

	return (
		<>
			<SignIn />

			{renderOrders()}
		</>
	)
}
