import { BsPlusCircleFill } from "react-icons/bs"

export function Card({ imagen }) {

    return (
        <figure className="relative w-full h-60 bg-blue-100 rounded-xl overflow-hidden">
            <BsPlusCircleFill className="absolute top-2 right-2 w-8 h-8 cursor-pointer"/>

            <p className="absolute top-0 left-0 bg-red-300 rounded-xl p-2">Electronica</p>

            <img src="" alt="" className="h-4/5"/>

            <figcaption className="flex justify-between px-4 py-2">
                <p>Nombre Producto</p>
                <span className="text-black font-bold">PRECIO</span> 
            </figcaption>
        </figure>
    )
}