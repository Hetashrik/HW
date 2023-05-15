import Image from "next/image";
import Legal1 from "../../public/images/Legal1.png"
import AfterHeader_mv from "../../public/images/AfterHeader_mv.png";

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
        <div className="hidden max-lg:block relative -top-4 bg-cover w-[1645px]">
        <Image src={AfterHeader_mv} alt="FG_LOGO" height="220" className=" relative w-[1645px]" />
        </div>
        <div className="bg-[#332b27] md:hidden -top-[1.6rem] h-[46rem] relative w-[1645px]">
            <p className="text-left text-white font-medium text-9xl font-sans relative top-14 left-4 m-2 ml-11">FINTRACT</p>
            <p className="text-left text-white font-medium text-9xl font-sans relative top-14 left-4 m-2 ml-11">GLOBAL</p>
            <p className="text-left text-white text-5xl font-sans relative top-14 font-semibold left-4 m-5 mt-11 ml-11">WE HELP FOR PROFESSIONAL</p>
            <p className="text-left text-white text-5xl font-sans relative top-14 font-semibold left-4 m-5 ml-11">SERVICES WITH PERSONAL</p>
            <p className="text-left text-white text-5xl font-sans relative top-14 font-semibold left-4 m-5 ml-11">ATTENTION</p>
            <p className="text-left text-white text-2xl font-sans relative top-14 left-4 ml-11 mt-11">Our vision is to enrich customer and stakeholder</p>
            <p className="text-left text-white text-2xl font-sans relative top-14 left-4 ml-11">experience, embrace niche tools and technology</p>
        </div>
        </>
    );
}

export default AfterHeader;