import Image from "next/image";
import Legal1 from "../../public/images/Legal1.png"

function AfterHeader() {
    return (
        <>
        
        <div className="w-[100%] hidden sm:block"> 
            <div>
            <Image className="-z-10" src={Legal1} alt="FG_LOGO" width="1980" height="1113.75" />
                <p className="text-center text-white relative bottom-[26rem] font-medium text-7.5xl font-sans">FINTRACT GLOBAL</p>
                <p className="text-center text-white relative bottom-96  text-6.5xl font-sans font-semibold">WE HELP FOR PROFESSIONAL SERVICES</p>
                <p className="text-center text-white relative bottom-96  text-6.5xl font-sans font-semibold"> WITH PERSONAL ATTENTION</p>
                <p className="text-center text-white relative bottom-80 font-sans">Our vision is to enrich customer and stakeholder experience,</p>
                <p className="text-center text-white relative bottom-80 font-sans">embrace niche tools and technology</p>
            </div>
        </div>
        <div className="hidden max-lg:block relative top-36 bg-cover w-[505px]">
        <Image src={Legal1} alt="FG_LOGO" height="220" className=" relative w-[500px]" />
        </div>
        <div className="bg-[#332b27] md:hidden top-[8.6rem] h-[22rem] relative w-[500px]">
            <p className="text-left text-white font-medium text-5xl font-sans relative top-14 left-4 m-2">FINTRACT GLOBAL</p>
            <p className="text-left text-white text-2xl font-sans relative top-14 font-semibold left-4 m-5">WE HELP FOR PROFESSIONAL SERVICES WITH PERSONAL ATTENTION</p>
            <p className="text-left text-white font-sans relative top-14 left-4 m-5">Our vision is to enrich customer and stakeholder experience, embrace niche tools and technology</p>
        </div>
        </>
    );
}

export default AfterHeader;