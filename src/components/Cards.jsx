export function Cards({ children }) {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,250px))] justify-center gap-5 w-full max-w-6xl">
            {children}
        </section>
    )
}