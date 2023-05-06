import Image from "next/image";
import dark_blue_circle from "../../public/images/dark_blue_circle.png";
import Expert_1 from "../../public/images/Expert_1.png";
import Expert_2 from "../../public/images/Expert_2.png";
import Expert_3 from "../../public/images/Expert_3.png";
import Expert_4 from "../../public/images/Expert_4.png";
import Expert_5 from "../../public/images/Expert_5.png";

const datas = [
    {
        id: 1,
        image: "/Expert_1.png",
        title: "Banking, Finance And Capital Market",
        description: "",
    },
]

function Expert() {
    return (
        <>
            <div className="hidden sm:block">
                <div>
                    <p className="font-bold text-3xl relative bottom-[23rem] left-[5rem]">What we are expert at</p>
                    <p className="font-medium text-3xl relative bottom-[23rem] left-[5rem] mt-5">Legal and Regulatory Practice Areas</p>

                    <div className="flex relative">
                        <div className="ml-14">
                            {/* col1 */}
                            <div className="w-[300px] h-[400px] m-4 -mt-64 bg-white flex space-x-9 rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center">
                                {/* row1 */}
                                <Image className="w-[50px] h-[50px] relative left-[1.8rem] mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[2.89rem] mt-[2.25rem]" src={Expert_1} alt="Expert_1" />


                                <div className="flex flex-col">
                                    <p className="inline relative mt-[1.7rem] -left-[3.25rem] font-bold">Banking,Finance And
                                        Capital Market
                                    </p>

                                    <div className="mt-5 -ml-32">

                                        <li>Open Banking and PSD2, Open Finance, neo banks</li>
                                        <li>Capital Markets</li>
                                        <li>Credit and Special Situations</li>
                                        <li>Foreign Investment Control</li>
                                        <li>Debt Capital Markets</li>
                                        <li>AML & Anti-Fraud</li>
                                        <li>Private Equity</li>
                                        <li>Trade Finance</li>
                                        <li>Investment fund</li>
                                        <li>Securities Litigation and Enforcement</li>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[300px] h-[400px] m-4 bg-white flex space-x-9 rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center mt-32">
                                {/* row2 */}
                                <Image className="w-[50px] h-[50px] relative left-[1.8rem] mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[2.89rem] mt-[2.25rem]" src={Expert_4} alt="Expert_4" />

                                <div className="flex flex-col">
                                    <p className="inline relative mt-[1.7rem] -left-[3.25rem] font-bold">Corporate Policy, Governance and Ethics
                                    </p>

                                    <div className="mt-5 -ml-32">

                                        <li>Corporate Governance</li>
                                        <li>Employment, Labour and Benefits</li>
                                        <li>Corporate Restructuring</li>
                                        <li>Crisis Management</li>
                                        <li>Intellectual Property</li>
                                        <li>Corporate and Commercial</li>
                                        <li>Dispute Resolution</li>
                                        <li>Competition / Antitrust</li>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="ml-14">
                            {/* col2 */}
                            <div className="w-[300px] h-[400px] m-4 -mt-64 bg-white flex rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center">
                                {/* row1 */}
                                <Image className="w-[50px] h-[50px] relative -left-[0.2rem] mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[2.5rem] mt-[2.25rem]" src={Expert_2} alt="Expert_2" />

                                <div className="flex flex-col">
                                    <p className="inline relative mt-[2.7rem] -left-[1.25rem] font-bold">IT & Fintech
                                    </p>

                                    <div className="mt-8 -ml-24">

                                        <li>Blockchain & Cryptocurrency</li>
                                        <li>Artificial Intelligence</li>
                                        <li>Cloud Security</li>
                                        <li>Financial and Banking API</li>
                                        <li>Due diligence, SoD and RBAC</li>
                                    </div>

                                </div>
                                
                                
                            </div>
                            <div className="w-[300px] h-[400px] m-4 bg-white flex rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center mt-32">
                                {/* row2 */}
                                <Image className="w-[50px] h-[50px] relative left-4 mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[1.41rem] mt-[2.35rem]" src={Expert_1} alt="Expert_1" />

                                <div className="flex flex-col">
                                    <p className="inline relative mt-[2.7rem] -left-1 font-bold">General & Business Law
                                    </p>

                                    <div className="mt-12 -ml-16">

                                        <li>Legal Operations</li>
                                        <li>International Arbitration</li>
                                        <li>Mergers and Acquisitions</li>
                                        <li>Real Estate Financing</li>
                                        <li>Restructuring and Insolvency</li>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="ml-14">
                            {/* col3 */}
                            <div className="w-[300px] h-[400px] m-4 -mt-64 bg-white flex rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center">
                                {/* row1 */}
                                <Image className="w-[50px] h-[50px] relative left-[1.18rem] mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[1.35rem] mt-[2.25rem]" src={Expert_3} alt="Expert_3" />

                                <div className="flex flex-col">
                                    <p className="inline relative mt-[2.7rem] -left-1 font-bold">Financial Regulation 
Group
                                    </p>

                                    <div className="mt-8 -ml-12">

                                        <li>Regulatory Compliance</li>
                                        <li>Risk Advisory</li>
                                        <li>Contentious Regulations</li>
                                        <li>Regulatory Transactions</li>
                                        <li>FCA & PRA Licencing</li>
                                        <li>Data Privacy & Protection</li>
                                        <li>White Collar Crime</li>
                                    </div>

                                </div>
                            </div>
                            <div className="w-[300px] h-[400px] m-4 bg-white flex rounded-md shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center mt-32">
                                {/* row2 */}
                                <Image className="w-[50px] h-[50px] relative -left-[1px] mt-7" src={dark_blue_circle} alt="dark_blue_circle" />
                                <Image className="w-[30px] h-[30px] relative -left-[2.55rem] mt-[2.35rem]" src={Expert_5} alt="Expert_5" />

                                <div className="flex flex-col">
                                    <p className="inline relative mt-[2.7rem] -left-[1.35rem] font-bold">Direct & Indirect Tax
                                    </p>

                                    <div className="mt-12 -ml-[5.15rem]">

                                        <li>Corporate TAX & Accounting</li>
                                        <li>All Taxation and Govt Policy</li>
                                        <li>TAX Dispute</li>
                                        

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden max-lg:block top-80 right-[1.75rem] relative w-[1435px]">
            <p className="font-semibold text-2xl relative bottom-[23rem] text-center left-[2.8rem]">What we are expert at</p>
                    <p className="font-normal text-2xl relative bottom-[23rem] left-12 mt-5">Legal and Regulatory Practice Areas</p>

                    
            </div>
        </>
    );
}

export default Expert;