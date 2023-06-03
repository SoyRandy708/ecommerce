import { BsPlusCircleFill } from "react-icons/bs"

export function Card({ name, price, category, image, description }) {
    const title = name.split(" ").slice(0, 2).join(" ")

    return (
        <figure className="relative w-56 h-56 bg-blue-200 rounded-xl overflow-hidden">
            <BsPlusCircleFill className="absolute top-2 right-2 w-8 h-8 cursor-pointer"/>

            <p className="absolute top-0 left-0 bg-sky-400 rounded-xl p-2">{category}</p>

            <img src={image} alt={description} className="h-4/5 w-full  object-fill"/>

            <figcaption className="flex justify-between px-4 py-2">
                <p>{title}</p>
                <span className="text-black font-bold">${price}</span> 
            </figcaption>
        </figure>
    )
}