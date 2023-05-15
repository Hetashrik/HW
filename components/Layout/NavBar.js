import Image from "next/image";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png"

function NavBar(){
    return (
        <>
            <nav className="bg-black">
                <div className="flex justify-between">
                    <div className="items-center py-4 px-10 inset-2 hidden sm:block">
                        <Image src={FG_LOGO_white_4} alt="FG_LOGO" width="32" height="32" className="w-[45px] h-[34.55px] ml-[18px] mt-[0px]" />                    
                    </div>

                    <div className="flex-wrap space-x-1 hidden sm:block relative right-[1150px]">
                        <button className="text-sm font-medium text-white" type="button">
                        More
                        <svg className="w-3.5 inline m-2 relative font-bold" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg></button>
                        <button className="text-sm font-medium text-white" type="button">
                        Our Products
                        <svg className="w-3.5 inline m-2 relative font-bold" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#ffffff"></path></g></svg></button>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default NavBar;