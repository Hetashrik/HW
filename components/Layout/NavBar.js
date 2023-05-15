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

                    <div className="flex-wrap items-center space-x-1 hidden sm:block">
                    
                    </div>
                    
                </div>
            </nav>
        </>
    );
}

export default NavBar;