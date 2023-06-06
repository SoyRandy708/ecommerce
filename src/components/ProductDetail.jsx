import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { ShoppingContext } from "../context"

export function ProductDetail() {
    const {
        isOpenProductDetail,
        closeProductDetail,
        productToShow
    } = useContext(ShoppingContext)

    const close = () => {
        closeProductDetail()
    }

    return (
        <>
            {isOpenProductDetail && (
                <aside className="fixed right-0 z-10 flex flex-col h-[calc(100vh-60px)] w-[360px] bg-violet-200 rounded-lg overflow-hidden">
                    <AiOutlineClose 
                        className="absolute top-4 right-4 w-7 h-7 cursor-pointer"
                        onClick={close}
                    />
                    <img 
                        className="object-cover"
                        src={productToShow.images[0]} 
                        alt={productToShow.title} 
                    />

                    <div className="p-3">
                        <div className="flex justify-between mb-3">
                            <h1 className="text-xl"> {productToShow.title} </h1>
                            <p className="text-xl font-medium"> ${productToShow.price} </p>
                        </div>
                        <p className="text-base"> {productToShow.description} </p>
                    </div>
                </aside>
            )}
        </>
    )
}
