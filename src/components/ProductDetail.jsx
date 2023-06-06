import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { ShoppingContext } from "../context"

export function ProductDetail() {
    const {
        isOpenProductDetail,
        closeProductDetail,
    } = useContext(ShoppingContext)

    const close = () => {
        closeProductDetail()
    }

    return (
        <>
            {isOpenProductDetail && (
                <aside className="fixed right-0 z-10 flex flex-col h-[calc(100vh-60px)] w-[360px] bg-slate-500 rounded-lg p-4">
                    <AiOutlineClose 
                        className="absolute top-4 right-4 w-7 h-7 cursor-pointer"
                        onClick={close}
                    />
                    <h1>NOMBRE DEL PRODUCTO</h1>
                    <img src="" alt="IMAGEN DEL PRODUCTO" />
                    <p>DESCRIPCION</p>
                    <p>PRECIO</p>
                </aside>
            )}
        </>
    )
}
