import { RiAccountCircleFill } from "react-icons/ri";

export function Header() {
    return (
        <div className="fixed w-full py-2 bg-white text-gray-600 flex justify-end items-center pr-6 z-10">
            <RiAccountCircleFill className="mr-2" size={25}/>
            <span className="text-base">Welcome John</span>
        </div>
    );
}
