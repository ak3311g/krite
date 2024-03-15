import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import data from '../../data.json';
import { faPhoenixFramework, faXing } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import FolderButton from './folderbutton';

export default function Sidenav() {

    const teams = data.teams;
    const folders = data.folders;

    return (
        <>
            <div className="m-3 md:w-64 p-1 flex flex-col justify-between rounded shadow-lg">
                {/* Sidenav Top */}
                <div className='flex flex-col gap-5'>
                    {/* Icon and name */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhoenixFramework} className="text-xl m-2 text-blue-500" />
                            <div className="flex flex-col">
                                <p className="text-xs text-gray-500">INC</p>
                                <p className="text-xs font-bold">InnovateHub</p>
                            </div>
                        </div>
                        <div className="flex items-center border-2 rounded-full mx-2">
                            <FontAwesomeIcon icon={faUser} className="text-sm text-gray-500 m-2" />
                        </div>
                    </div>

                    {/* Teams and Folders */}
                    <div className="flex flex-col gap-4">
                        {/* Teams */}
                        <div className='flex flex-col'>

                            {/* Tried to make dynamic but fue to fontawesome i didn't do but i can change the library for icons or pass just link for icon */}

                            <div className="flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faUser} className="text-xs m-2 text-black" />
                                    <p className="text-xs font-semibold">{teams[0].name}</p>
                                </div>
                                {
                                    teams[0].members?.length > 0 ?
                                        <div className="flex justify-center gap-1 items-center text-gray-600 px-2 rounded-md border-2 text-xs">
                                            <FontAwesomeIcon icon={faXing} className="text-[10px]" />
                                            <p className="">&#9913;</p>
                                            <p className="text-xs">
                                                {teams[0].members.length}
                                            </p>
                                        </div> : null
                                }
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faUser} className="text-xs m-2 text-black" />
                                    <p className="text-xs font-semibold">{teams[1].name}</p>
                                </div>
                                {
                                    teams[1].members?.length > 0 ?
                                        <div className="flex justify-center gap-1 items-center text-gray-600 px-2 rounded-md border-2 text-xs">
                                            <FontAwesomeIcon icon={faXing} className="text-[10px]" />
                                            <p className="">&#9913;</p>
                                            <p className="text-xs">
                                                {teams[1].members.length}
                                            </p>
                                        </div> : null
                                }
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex justify-center items-center">
                                    <FontAwesomeIcon icon={faUser} className="text-xs m-2 text-black" />
                                    <p className="text-xs font-semibold">{teams[2].name}</p>
                                </div>
                                {
                                    teams[2].members?.length > 0 ?
                                        <div className="flex justify-center gap-1 items-center text-gray-600 px-2 rounded-md border-2 text-xs">
                                            <FontAwesomeIcon icon={faXing} className="text-[10px]" />
                                            <p className="">&#9913;</p>
                                            <p className="text-xs">
                                                {teams[2].members.length}
                                            </p>
                                        </div> : null
                                }
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex justify-center items-center text-gray-500">
                                    <FontAwesomeIcon icon={faPlus} className="text-[5px] border-2 p-1 rounded-md border-gray-5 mx-[6px] my-2" />
                                    <p className="text-xs font-semibold">Create a team</p>
                                </div>
                            </div>

                        </div>

                        {/* Folders */}

                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between text-[10px] mx-2 text-gray-500 font-semibold items-center uppercase'>
                                Folders
                                <button className="hover:bg-gray-100 px-2 rounded-md hover:text-gray-800">
                                    <FontAwesomeIcon icon={faPlus} className="text-xs" />
                                </button>
                            </div>
                            <div className='flex flex-col h-full overflow-scroll gap-1 m-1'>
                                {
                                    folders.map((folder, index) => {
                                        return (
                                            <FolderButton key={index} folder={folder} />
                                        )
                                    }
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* sidenav bottom */}
                <div className="flex flex-col gap-3">
                    <button className="flex items-center gap-2 text-xs font-bold hover:bg-gray-100 p-2 rounded-md hover:text-gray-800">
                        <FontAwesomeIcon icon={faUserPlus} className="" />
                        <span>Invite Teammates</span>
                    </button>
                    <button className="flex justify-between items-center text-xs font-bold hover:bg-gray-100 p-2 rounded-md hover:text-gray-800">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faQuestionCircle} className="" />
                            <p className="w-full">Help and first steps</p>
                        </div>
                        <p className="text-xs text-gray-500 border-2 rounded-md px-1">0/6</p>
                    </button>
                    <button className="flex justify-between items-center text-[10px] font-bold hover:bg-gray-100 p-2 rounded-md hover:text-gray-800">
                        <div className='flex'>
                            <p className="px-1 rounded-sm bg-white">7</p>
                            <p>days left on trial</p>
                        </div>
                        <a href="https://www.google.com" className="bg-black text-white px-2 py-1 rounded-md">Add biling</a>
                    </button>
                </div>
            </div>
        </>
    );
}