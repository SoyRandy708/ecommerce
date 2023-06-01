export function Cards({ children }) {

    return (
        <div className="grid grid-cols-3 gap-3 w-full">
            {children}
        </div>
    )
}

// grid grid-cols-3 auto-rows-max gap-2
// flex flex-wrap gap-3