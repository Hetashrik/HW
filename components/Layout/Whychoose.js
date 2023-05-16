import Image from "next/image";
import why_choose from "../../public/images/why_choose.png"
import why_choose_mv from "../../public/images/why_choose_mv.png"
function WhyChoose() {
    return (
        <>
            <div className=" flex hidden sm:block">
                <div>
                    <Image src={why_choose} alt="whychoose" width="100%" height="1031" />

                    <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl">Why choose Fintract Global</p>
                    <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-4xl mt-5">Reason to Hire Us</p>

                    <div className="flex">
                        <div>

                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">01.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">EXPERIENCED</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We have world class team with</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white"> industry expertise.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">03.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">REPUTATION</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We commit to provide quality</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">services to our clients.</p>
                        </div>
                        <div className="ml-10">
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">02.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">FOCUS ON YOU</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We do our best to achieve </p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">client’s satisfaction.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">04.</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">WORK</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We are dedicated to give our</p>
                            <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">100% to our clients.</p>
                        </div>
                    </div>
                    {/* <p className="relative text-left right-[35.25rem] -bottom-12 text-white font-bold text-4xl -z-10">01.</p> */}
                </div>
            </div>

            <div className="sm:hidden top-80 bg-why-choose relative w-[1750px]">
            {/* <div className="hidden max-lg:block top-80 bg-why-choose relative w-[1750px]"> */}

                <Image src={why_choose_mv} alt="whychoose" className="relative bottom-[12.8rem] h-[1700px] w-[1750px]" />
{/* 
                <Image src={why_choose} alt="whychoose" width="100%" className="relative bottom-[12.8rem] h-[1750px]" />


                <p className="relative text-left -right-[0.5rem] bottom-[43rem] text-white font-medium text-2xl ml-4">Why choose Fintract Global</p>
                <p className="relative text-left -right-[0.5rem] bottom-[43rem] mt-2 text-white font-medium text-3xl ml-4">Reason to Hire Us</p>
                <div className="flex relative right-[38.5rem] bottom-36">
                    <div className="ml-4">

                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">01.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">EXPERIENCED</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We have world class team with</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white"> industry expertise.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">03.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">REPUTATION</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We commit to provide quality</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">services to our clients.</p>
                    </div>
                    <div className="ml-12">
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">02.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">FOCUS ON YOU</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We do our best to achieve </p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">client’s satisfaction.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-medium text-3xl mt-12">04.</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white font-normal text-2xl mt-3">WORK</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white mt-3">We are dedicated to give our</p>
                        <p className="relative text-left left-[38.75rem] -top-[35rem] text-white">100% to our clients.</p>
                    </div>
                </div> */}

            </div>

            <div>
            </div>
        </>
    );
}

export default WhyChoose;