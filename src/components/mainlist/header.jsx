import { faGear, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
    return (
        <>
            <div className="flex justify-between items-center p-4 shadow-md w-full rounded-md my-2">
                <p className="text-2xl font-bold">Products</p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 border border-gray-300 shadow-md px-2 rounded-md">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" className="" placeholder="Search for..." />
                    </div>
                    <button className="border border-gray-400 px-1 rounded-md">
                        <FontAwesomeIcon icon={faComments} className="text-black" />
                    </button>
                    <button className="border border-gray-400 px-1 rounded-md">
                        <FontAwesomeIcon icon={faGear} className="text-black" />
                    </button>
                </div>
            </div>
        </>
    )
}