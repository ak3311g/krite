import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faAdd, faArchive, faArrowRightArrowLeft, faChevronDown, faDumpster, faMessage, faPlus, faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function BrandsList({ brands }) {

    const [brandsList, setBrandsList] = useState(false);
    const [selectedBrand, setSelectedBrand] = useState(null);

    const [deskList, setDeskList] = useState(false);
    const [selectedDesk, setSelectedDesk] = useState(null);

    const [tagsList, setTagsList] = useState(false);
    const [selectedTags, setSelectedTags] = useState(null);

    console.log(brands);

    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleBrandSelection = (brand) => {
        if (selectedBrands.includes(brand)) {
            setSelectedBrands(selectedBrands.filter(item => item !== brand));
        } else {
            setSelectedBrands([...selectedBrands, brand]);
        }
    }

    const desks = ["Desk1", "Desk2", "Desk3", "Desk4", "Desk5", "Desk6", "Desk7", "Desk8", "Desk9", "Desk10"];

    return (
        <>
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-center items-center">
                    {/* Upper Filter Block */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-3 ms-3">

                            <div className="relative">
                                <button onClick={() => setBrandsList(!brandsList)} className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-gray-700 font-semibold flex items-center hover:bg-gray-100">
                                    <div className="grid grid-cols-2">
                                        <FontAwesomeIcon icon={faCircle} className="text-black text-[6px]" />
                                        <FontAwesomeIcon icon={faCircle} className="text-black text-[6px]" />
                                        <FontAwesomeIcon icon={faCircle} className="text-black text-[6px]" />
                                        <FontAwesomeIcon icon={faCircle} className="text-black text-[6px]" />
                                    </div>
                                    {selectedBrand ? selectedBrand : <p className="text-sm font-semibold">All Brands</p>}
                                    <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                                </button>
                                {
                                    brandsList ?
                                        <ul className="absolute top-12 left-0 bg-white border-2 border-gray-200 rounded-lg w-40">
                                            <li onClick={() => {
                                                setSelectedBrand(null);
                                                setBrandsList(false);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">All Brands</li>
                                            {
                                                brands.map((brand, index) => {
                                                    return (
                                                        <li key={index} onClick={() => {
                                                            setSelectedBrand(brand.name);
                                                            setBrandsList(false);
                                                        }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{brand.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        : null
                                }
                            </div>

                            <div className="relative">
                                <button onClick={() => setDeskList(!deskList)} className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-gray-700 font-semibold flex items-center hover:bg-gray-100">
                                    {selectedDesk ? selectedDesk : <p className="text-sm font-semibold">Desk</p>}
                                    <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                                </button>
                                {
                                    deskList ?
                                        <ul className="absolute top-12 left-0 bg-white border-2 border-gray-200 rounded-lg w-40">
                                            <li onClick={() => {
                                                setSelectedDesk(null);
                                                setDeskList(false);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Desk</li>
                                            {
                                                desks.map((desk, index) => {
                                                    return (
                                                        <li key={index} onClick={() => {
                                                            setSelectedDesk(desk);
                                                            setDeskList(false);
                                                        }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{desk}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        : null
                                }
                            </div>

                            <div className="relative">
                                <button onClick={() => setTagsList(!tagsList)} className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-gray-700 font-semibold flex items-center hover:bg-gray-100">
                                    {selectedTags ? selectedTags : <p className="text-sm font-semibold">Tags</p>}
                                    <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                                </button>
                                {
                                    tagsList ?
                                        <ul className="absolute top-12 left-0 bg-white border-2 border-gray-200 rounded-lg w-40">
                                            <li onClick={() => {
                                                setSelectedTags(null);
                                                setTagsList(false);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tags</li>
                                            <li onClick={() => {
                                                setSelectedTags("Tag1");
                                                setTagsList(false);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tag1</li>
                                            <li onClick={() => {
                                                setSelectedTags("Tag2");
                                                setTagsList(false);
                                            }} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tag2</li>
                                        </ul>
                                        : null
                                }
                            </div>

                            <div className="relative">
                                <button className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-gray-400 font-semibold flex items-center hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-[10px] rotate-90" />
                                    <p className="text-md font-semibold">Sort</p>
                                </button>
                            </div>
                            <div className="relative">
                                <button className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-gray-400 font-semibold flex items-center hover:bg-gray-100">
                                    <FontAwesomeIcon icon={faSliders} className="text-[10px]" />
                                    <p className="text-md font-semibold">Filter</p>
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 me-3">
                            <button className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-black font-semibold flex items-center hover:bg-gray-100">
                                <FontAwesomeIcon icon={faAdd} className="text-[10px] border border-black p-1 rounded-md" />
                                <p className="text-md font-semibold">Meeting</p>
                            </button>
                            <button className="bg-white border-2 border-gray-200 gap-2 rounded-lg px-4 py-2 text-black font-semibold flex items-center hover:bg-gray-100">
                                <FontAwesomeIcon icon={faSliders} className="text-[10px]" />
                                <p className="text-md font-semibold">Filter</p>
                            </button>
                        </div>
                    </div>

                    {/* Brands List */}
                    <div className="w-full mt-3">
                        <div className="flex border">
                            <ul className="flex justify-between items-center w-full">
                                <li className="flex gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <input type="checkbox" className="text-[6px] border border-gray-400 rounded-md" />
                                    <p className="text-md font-semibold">Brand</p>
                                </li>
                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">Description</li>
                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">Members</li>
                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">Category</li>
                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">Tags</li>
                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">Next meeting</li>
                                <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                </li>
                            </ul>
                        </div>
                        {
                            brands.map((brand, index) => {
                                return (
                                    <>
                                        <div className="flex border">
                                            <ul className="flex justify-between items-center w-full" key={index}>
                                                <li className="px-4 py-2 flex justify-between items-center gap-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                                    <div className="flex items-center gap-2">
                                                        {
                                                            <input type="checkbox" className="text-[6px] border border-gray-400 rounded-md" onChange={() => handleBrandSelection(brand.name)} checked={selectedBrands.includes(brand.name)} />
                                                        }
                                                        <FontAwesomeIcon icon={faCircle} className="text-black text-md" />
                                                        <p className="">{brand.name}</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faMessage} className="text-[10px]" />
                                                        {
                                                            brand.members.length > 1 ? <p className="text-[10px] font-semibold">{brand.members.length}</p> : null
                                                        }
                                                    </div>
                                                </li>
                                                <li className="px-4 border-r w-full hover:bg-gray-100 cursor-pointer whitespace-nowrap overflow-scroll h-7">{brand.description}</li>
                                                <li className="relative px-4 flex border-r w-full hover:bg-gray-100 cursor-pointer h-6">
                                                    {
                                                        brand.members.map((member, index) => {
                                                            return (
                                                                <div key={index} className="ps-5 absolute top-0" style={{ left: index * 10, zIndex: index }}>
                                                                    <FontAwesomeIcon icon={faCircle} className="text-black text-md" />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </li>
                                                <li className="px-4 flex border-r w-full hover:bg-gray-100 cursor-pointer overflow-hidden">
                                                    {
                                                        brand.categories.map((category, index) => {
                                                            return (
                                                                <p key={index} className="text-[10px] bg-green-500 rounded-md px-1 mx-1 font-semibold">{category}</p>
                                                            )
                                                        })
                                                    }
                                                </li>
                                                <li className="px-4 py-2 border-r w-full flex hover:bg-gray-100 cursor-pointer overflow-scroll">
                                                    {
                                                        brand.tags.map((tag, index) => {
                                                            return (
                                                                <p key={index} className="text-[10px] lowercase whitespace-nowrap bg-gray-200 rounded-md px-1 mx-1 font-semibold">#{tag}</p>
                                                            )
                                                        })
                                                    }
                                                </li>
                                                <li className="px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer flex">
                                                    <p key={index} className="text-[10px] bg-green-500 rounded-md px-1 mx-1 font-semibold">{brand.nextmeeting}</p>
                                                </li>
                                                <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                                                    <FontAwesomeIcon icon={faPlus} className="text-[10px] text-white hover:text-gray-100" />
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )
                            }
                            )
                        }

                        <div className="flex border">
                            <ul className="flex justify-between items-center w-full">
                                <li className="flex justify-end px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <p className="text-sm font-semibold">{brands.length} count</p>
                                </li>
                                <li className="flex  items-center  gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    <p className="">Add Calculation</p>
                                </li>
                                <li className="flex  items-center  gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    <p className="">Add Calculation</p>
                                </li>
                                <li className="flex  items-center  gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    <p className="">Add Calculation</p>
                                </li>
                                <li className="flex  items-center  gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    <p className="">Add Calculation</p>
                                </li>
                                <li className="flex  items-center  gap-3 px-4 py-2 border-r w-full hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                    <p className="">Add Calculation</p>
                                </li>
                                <li className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faPlus} className="text-[10px]" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <div className="border px-1 rounded-md flex items-center">
                        <span className="flex text-xs items-center gap-2 px-2 py-1">
                            <p className="bg-black text-white px-1 rounded-sm">{selectedBrands.length}</p>
                            Selected
                        </span>
                        <div className="flex items-center gap-2 px-2 py-1 border m-2 rounded-md">
                            <FontAwesomeIcon icon={faArchive} className="text-[10px]" />
                            <p className="text-xs font-semibold">Archive</p>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 border m-2 rounded-md text-red-600">
                            <FontAwesomeIcon icon={faDumpster} className="text-[10px]" />
                            <p className="text-xs font-semibold">Delete</p>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1 border m-2 rounded-md">
                            <p className="text-xs font-semibold">More</p>
                            <FontAwesomeIcon icon={faChevronDown} className="text-[10px]" />
                        </div>
                        <FontAwesomeIcon icon={faXmark} className="text-md p-1 rounded-md" />
                    </div>
                </div>
            </div>
        </>
    )
}