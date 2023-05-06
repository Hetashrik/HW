import Image from "next/image";
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
            <div className="items-center relative bottom-16 left-4 hidden sm:block">
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


            <div className="bg-[#595959] hidden max-lg:block top-[22.25rem] relative w-[1560px]">
                <h1 className="font-sans font-semibold text-2xl text-center text-white p-4 py-6">Many big company trusted us</h1>
                <p className="text-white text-left p-4 relative left-3 ">Our clients include multinational corporations, financial institutions, private equity funds, domestic corporations, joint ventures, emerging companies, start-ups, non-governmental organizations, international organizations, individuals and government.</p>

                <div>
                    <div className="flex relative right-[13.75rem]">
                        <Image className="items-center relative left-[16rem] mt-16" src={PayPal_Logo} alt="PayPalLogo" width="35" height="50" />
                        <Image className="items-center relative left-[16rem] mt-16 text-white" src={Paypal} alt="PayPal" width="100" height="50" />
                        <Image className="items-center relative left-[18rem] mt-16" src={Google_Logo} alt="GoogleLogo" width="35" height="50" />
                        <Image className="items-center relative left-[18rem] mt-16 text-white" src={Google} alt="Google" width="100" height="50" />
                    </div>
                    <div className="flex relative right-[19.75rem] bottom-6">
                        <Image className="items-center relative left-[20rem] mt-16" src={university} alt="university" width="200" height="112" />
                        <Image className="items-center relative left-[22rem] mt-16" src={Amazon_Logo} alt="AmazonLogo" width="20" height="20" />
                        <Image className="items-center relative left-[22.5rem] mt-16" src={Amazon} alt="Amazon" width="150" height="50" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigCompany;