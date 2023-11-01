export function Cards({ children }) {
	return (
		<section className="grid  justify-center gap-4 w-full max-w-6xl grid-cols-[repeat(auto-fill,minmax(225px,1fr))] lg:gap-6">
			{children}
		</section>
	)
}
