import { BsPlusCircleFill } from "react-icons/bs"

export function Card({ name, price, category, image, description }) {

    return (
        <figure className="relative w-56 h-56 bg-blue-100 rounded-xl overflow-hidden">
            <BsPlusCircleFill className="absolute top-2 right-2 w-8 h-8 cursor-pointer"/>

            <p className="absolute top-0 left-0 bg-red-300 rounded-xl p-2">{category}</p>

            <img src={image} alt={description} className="h-4/5 w-full object-cover"/>

            <figcaption className="flex justify-between px-4 py-2">
                <p>{name}</p>
                <span className="text-black font-bold">{price}</span> 
            </figcaption>
        </figure>
    )
}