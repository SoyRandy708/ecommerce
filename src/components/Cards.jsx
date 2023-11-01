export function Cards({ children }) {
	return (
		<section className="grid grid-cols-2 justify-center gap-2 w-full max-w-6xl sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
			{children}
		</section>
	)
}
