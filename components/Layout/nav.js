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

