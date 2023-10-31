export function OrderCard({ price, products, date }) {
	return (
		<div className="flex flex-col gap-3 w-full max-w-3xl p-5 rounded-xl font-medium bg-blue-100 text-lg cursor-pointer">
			<p> FECHA DE LA COMPRA: {date} </p>

			<div className="flex justify-between">
				<h3 className="font-bold"> PRECIO TOTAL: ${price} </h3>
				<p className="font-bold"> CANTIDAD DE PRODUCTOS: {products.length} </p>
			</div>
		</div>
	)
}
