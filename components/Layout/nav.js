import Image from "next/image";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png"
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";


function Nav() {

    const [navbar, setNavbar] = useState(false);

    return (
        <>




            <nav className="bg-black">
                <div>

                    <div>
                        <div className="flex justify-between">
                            <div className="flex">
                                <div className="md:hidden absolute inset-y-0 left-0 flex items-center  bg-black block sm:hidden w-screen">
                                    <button
                                        className="relative -top-[19.5rem] inline-flex items-center justify-center p-2 rounded-md text-white bg-black w-[100%] h-[100%]"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        <span className="sr-only">Open main menu</span>
                                        {navbar ? (
                                            <>
                                                <FiX className="block h-6 w-6 relative -right-2" />
                                                <div className="sm:hidden absolute top-[321px] left-0 right-0 bottom-0 flex w-[450px] h-[3864px] ease-in duration-300 mt-14 z-10 bg-black">
                                                    <ul>
                                                        <li className="bg-black ml-10 text-xl hover:text-gray-500 w-[450px] text-center relative right-14">Home</li>
                                                        <li className="bg-black ml-10 text-xl hover:text-gray-500 w-[450px] text-center relative right-14">More</li>
                                                        <li className="bg-black ml-10 text-xl hover:text-gray-500 w-[450px] text-center relative right-14">Products</li>
                                                        <li className="bg-black ml-10 text-xl hover:text-gray-500 w-[450px] text-center relative right-14">Contact</li>
                                                    </ul>
                                                </div>
                                                {/* <ul className="bg-black relative top-16 right-9">

                                                    <li className="m-4">Home</li>
                                                    <li className="m-4">More</li>
                                                    <li className="m-4">Our Products</li>
                                                    <li className="m-4">Contact</li>
                                                </ul> */}
                                            </>
                                        ) : (
                                            <FiMenu className="block h-6 w-6 relative -right-[1.2rem]" />
                                        )}
                                    </button>
                                    <div className="w-px h-12 bg-[#676767] ml-1 mt-0 relative left-4 bottom-[19.5rem]"></div>
                                    <Image src={FG_LOGO_white_4} alt="FG_LOGO" width="32" height="32" className="w-[45px] h-[34.55px] relative -right-6 mt-[1.75px] bottom-[19.25rem]" />
                                    {/* <button className="bg-blue-600 p-1 text-white mx-2 relative bottom-[19rem] -right-[10.5rem] w-[200px]">Log in</button> */}
                                    <button className="bg-blue-600 px-3  text-white mx-2 relative bottom-[19.75rem] left-56 w-[500px]"><p>Log in</p></button>
                                    <div>
                                        <input type="text" placeholder="Search" className="relative bottom-[14.75rem] right-[7.75rem] bg-white outline-none text-[#bbbaba] rounded-md p-1 leading-[2.15] w-[350px]" />
                                        <div className="justify-end bg-[#FF8A00] w-[38px] h-[37px] rounded-md text-center mr-0.5 relative bottom-[17.5rem] left-[11.5rem]">
                                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-white w-6 h-6 mt-1 ml-2 relative top-1" height="1em" width="1em " xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                        </div>
                                    </div>
                                </div>




                                <div className="flex items-center py-4 px-10 inset-2 hidden sm:block">
                                    <Image src={FG_LOGO_white_4} alt="FG_LOGO" width="32" height="32" className="w-[45px] h-[34.55px] ml-[18px] mt-[0px]" />
                                </div>

                                <div className="md:flex items-center space-x-1 hidden sm:block">
                                    <div className="dropdown flex">
                                        <button className="px-3 py-2 text-sm font-medium text-white dropdown-toggle inline" type="button" data-toggle="dropdown">More
                                            <svg className="w-3.5 inline m-2" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg>
                                        </button>
                                        <button className="px-3 py-2 text-sm font-medium text-white dropdown-toggle inline" type="button" data-toggle="dropdown">Our Products
                                            <svg className="w-3.5 inline m-2" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex items-center -inset-3 hidden sm:block">
                                <input className="px-4 h-9 my-2 border border-1 outline-blue-600 border-gray-200 rounded-full flex" type="text" placeholder="Search FG.." />
                                <button className="bg-white px-3 py-2 leading-tight text-black mx-2">Log in
                                    <svg className="w-3.5 inline m-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line> </g> </g> </g> </g></svg>
                                </button>
                                <button className="bg-black px-3 py-2 leading-tight text-white mx-2">Sign up
                                    <svg className="w-3.5 inline m-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-up-right"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="18.7 12.4 18.7 5.3 11.6 5.3" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5.3" x2="17.1" y1="18.7" y2="6.9"></line> </g> </g> </g> </g></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav >








        </>
    );
}

export default Nav;