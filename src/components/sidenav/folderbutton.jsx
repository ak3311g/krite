import { faFolderClosed } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faChevronUp, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FolderButton({ folder }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex flex-col justify-between items-center hover:bg-gray-100 rounded-md">
                <div className="flex justify-between items-center gap-1 w-full">
                    <div className="flex items-center w-full">
                        <FontAwesomeIcon icon={faFolderClosed} className="text-xs m-2 text-black" />
                        <p className="text-xs font-semibold">{folder.name}</p>
                    </div>
                    {
                        folder.sub.length > 0 ?
                            <button onClick={() => setOpen(!open)} className="hover:bg-gray-100 px-2 rounded-md hover:text-gray-800">
                                {open ? <FontAwesomeIcon icon={faChevronUp} className="text-xs" /> : <FontAwesomeIcon icon={faChevronDown} className="text-xs" />}
                            </button> : null
                    }
                </div>
                {
                    open ?
                        <div className="flex flex-col gap-2 w-full border-l-2 ms-5 ps-3 py-1 my-1">
                            {
                                folder.sub.map((sub, index) => {
                                    return (
                                        <div key={index} className="flex items-center hover:bg-gray-100 rounded-md w-full">
                                            <div className="flex items-center gap-1">
                                                <p className="text-xs font-semibold">{sub.name}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button className="flex items-center gap-1 hover:bg-gray-100 rounded-md w-full">
                                <FontAwesomeIcon icon={faPlus} className="text-[5px] border-2 p-1 rounded-md border-gray-5 my-2" />
                                <p className="text-xs font-semibold text-gray-500">Add new sub</p>
                            </button>
                        </div> : null
                }
            </div>
        </>
    )
}