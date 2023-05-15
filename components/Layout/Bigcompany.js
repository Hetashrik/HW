import Image from "next/image";
import paypal_mv from "../../public/images/paypal_mv.png";
import google_mv from "../../public/images/google_mv.png";
import amazon_mv from "../../public/images/amazon_mv.png";
import uni_mv from "../../public/images/uni_mv.png";
import PayPal_Logo from "../../public/images/PayPal_Logo.png";
import Paypal from "../../public/images/Paypal.png";
import Google_Logo from "../../public/images/Google_Logo.png";
import Google from "../../public/images/Google.png";
import university from "../../public/images/university.png";
import Amazon_Logo from "../../public/images/Amazon_Logo.png";
import Amazon from "../../public/images/Amazon.png";


function BigCompany() {
    return (
        <>
            <div className="relative bottom-20 hidden sm:block">
                <h1 className="font-sans font-bold text-3xl text-center">Many big company trusted us</h1>
            </div>
            <div className="items-center relative bottom-16 left-32 hidden sm:block">
            <div className="flex">

                <Image className="items-center relative left-[16rem] mt-16" src={PayPal_Logo} alt="PayPalLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[16rem] mt-16" src={Paypal} alt="PayPal" width="100" height="50.27" />
                <Image className="items-center relative left-[18rem] mt-16" src={Google_Logo} alt="GoogleLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[18rem] mt-16" src={Google} alt="Google" width="100" height="50.27" />
                <Image className="items-center relative left-[20rem] mt-16" src={university} alt="university" width="200" height="112" />
                <Image className="items-center relative left-[22rem] mt-16" src={Amazon_Logo} alt="AmazonLogo" width="35" height="50.27" />
                <Image className="items-center relative left-[22rem] mt-16" src={Amazon} alt="Amazon" width="100" height="50.27" />
            </div>
            </div>


            <div className="bg-[#595959] hidden max-lg:block top-[7.25rem] relative w-[1645px]">
                <h1 className="font-sans font-semibold text-6xl text-center text-white p-4 py-6">Many big company trusted us</h1>
                <p className="text-white text-center relative mt-9 text-4xl">Our clients include multinational corporations,</p>
                <p className="text-white text-center relative text-4xl"> financial institutions, private equity funds, domestic corporations, joint</p>
                <p className="text-white text-center relative text-4xl"> ventures, emerging companies, start-ups, non-governmental</p>
                <p className="text-white text-center relative text-4xl">organizations, international organizations, individuals and</p>
                <p className="text-white text-center relative text-4xl">government.</p>

                <div>
                    <div className="flex relative -right-[14rem]">
                        <Image className="items-center relative left-[16rem] mt-16 w-[280px] h-[94px]" src={paypal_mv} alt="PayPalLogo" />

                        <Image className="items-center relative left-[18rem] mt-16 w-[280px] h-[94px] ml-5" src={google_mv} alt="GoogleLogo" width="35" height="50" />
                    </div>
                    <div className="flex relative -right-[14rem] bottom-6">
                        <Image className="items-center relative left-[16rem] mt-16 w-[304px] h-[112px]" src={uni_mv} alt="university" />
                        <Image className="items-center relative left-[18rem] mt-16 w-[212px] h-[93px]" src={amazon_mv} alt="AmazonLogo" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigCompany;