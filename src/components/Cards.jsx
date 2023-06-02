export function Cards({ children }) {

    return (
        <div className="grid grid-cols-1 justify-items-center gap-4 w-full max-w-screen-lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {children}
        </div>
    )
}

// grid grid-cols-3 auto-rows-max gap-2
// flex flex-wrap gap-3