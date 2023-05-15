import Image from "next/image";
import Before_Aboutus from "../../public/images/Before_Aboutus.png"
import Review from "../../public/images/Review.png"

function BeforeAboutus() {
    return (
      <>
      {/* <p></p> */}
        <div className="hidden max-lg:block relative w-[1560px] top-10">
        <Image className="h-[895px] relative top-20" src={Before_Aboutus} alt="Aboutus" width="1560" />
        <p className="text-7xl font-bold relative text-white bottom-[30rem] m-7">Over 10k reviews</p>
        <Image className="relative bottom-[30rem] m-7" src={Review} alt="Aboutus" />
        <p className="text-7xl font-bold relative text-white bottom-[30rem] m-9">20K+</p>
        <p className="relative text-white bottom-[30rem] ml-7">User already registered and signing up</p>
        <p className="relative text-white bottom-[30rem] ml-7"> for our product</p>
        </div>
      </>  
    );
}

export default BeforeAboutus;