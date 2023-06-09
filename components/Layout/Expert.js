import Image from "next/image";
import { useState } from "react";
import dark_blue_circle from "../../public/images/dark_blue_circle.png";
import Expert_1 from "../../public/images/Expert_1.png";
import Expert_2 from "../../public/images/Expert_2.png";
import Expert_3 from "../../public/images/Expert_3.png";
import Expert_4 from "../../public/images/Expert_4.png";
import Expert_5 from "../../public/images/Expert_5.png";
import Expert_1_mv from "../../public/images/Expert_1_mv.png";
import Expert_2_mv from "../../public/images/Expert_2_mv.png";
import Expert_3_mv from "../../public/images/Expert_3_mv.png";
import Expert_4_mv from "../../public/images/Expert_4_mv.png";
import Expert_5_mv from "../../public/images/Expert_5_mv.png";
import Expert_6_mv from "../../public/images/Expert_6_mv.png";
import white_circle from "../../public/images/white_circle.png";
import left_arrow from "../../public/images/left_arrow.png";
import right_arrow from "../../public/images/right_arrow.png";

const data = [
    {
        id: 1,
        src: '/images/Expert_1_mv.png',
        title1: 'Banking, Finance And',
        title2: 'Capital Market',
        dot1: '.',
        text1: 'Open Banking and PSD2, Open Finance, neo banks',
        dot2: '.',
        text2: 'Capital Markets',
        dot3: '.',
        text3: 'Credit and Special Situations',
        dot4: '.',
        text4: 'Foreign Investment Control',
        dot5: '.',
        text5: 'Debt Capital Markets',
        dot6: '.',
        text6: 'AML & Anti-Fraud',
        dot7: '.',
        text7: 'Private Equity',
        dot8: '.',
        text8: 'Trade Finance',
        dot9: '.',
        text9: 'Investment fund',
        dot10: '.',
        text10: 'Securities Litigation and Enforcement'

    },

    {
        id:2,
        src: '/images/Expert_2_mv.png',
        title1: 'Corporate Policy, Governance',
        title2: 'and Ethics',
        dot1: '.',
        text1: 'Corporate Governance',
        dot2: '.',
        text2: 'Employment, Labour and Benefits',
        dot3: '.',
        text3: 'Corporate Restructuring',
        dot4: '.',
        text4: 'Crisis Management',
        dot5: '.',
        text5: 'Intellectual Property',
        dot6: '.',
        text6: 'Corporate and Commercial',
        dot7: '.',
        text7: 'Dispute Resolution',
        dot8: '.',
        text8: 'Competition / Antitrust',
        dot9: '',
        dot10: ''
    },

    {
        id:3,
        src: '/images/Expert_3_mv.png',
        title1: 'IT & Fintech',
        title2: '',
        dot1: '.',
        text1: 'Blockchain & Cryptocurrency',
        dot2: '.',
        text2: 'Artificial Intelligence',
        dot3: '.',
        text3: 'Cloud Security',
        dot4: '.',
        text4: 'Financial and Banking API',
        text5: 'Due diligence, SoD and RBAC',
        dot5: '',
        dot6: '',
        dot7: '',
        dot8: '',
        dot9: '',
        dot10: ''

    },

    {
        id:4,
        src: '/images/Expert_4_mv.png',
        title1: 'General & Business Law',
        title2: '',
        dot1: '.',
        text1: 'Legal Operations',
        dot2: '.',
        text2: 'International Arbitration',
        dot3: '.',
        text3: 'Mergers and Acquisitions',
        dot4: '.',
        text4: 'Real Estate Financing',
        dot5: '.',
        text5: 'Restructuring and Insolvency',
        dot6: '',
        dot7: '',
        dot8: '',
        dot9: '',
        dot10: ''
    },

    {
        id:5,
        src: '/images/Expert_5_mv.png',
        title1: 'Financial Regulation Group',
        title2: '',
        dot1: '.',
        text1: 'Regulatory Compliance',
        dot2: '.',
        text2: 'Risk Advisory',
        dot3: '.',
        text3: 'Contentious Regulations',
        dot4: '.',
        text4: 'Regulatory Transactions',
        dot5: '.',
        text5: 'FCA & PRA Licencing',
        dot6: '.',
        text6: 'Corporate and Commercial',
        dot7: '.',
        text7: 'Data Privacy & Protection',
        dot8: '.',
        text8: 'hite Collar Crime',
        dot9: '',
        dot10: ''
    },

    {
        id:6,
        src: '/images/Expert_6_mv.png',
        title1: 'Direct & Indirect Tax',
        title2: '',
        dot1: '.',
        text1: 'Corporate TAX & Accounting',
        dot2: '.',
        text2: 'All Taxation and Govt Policy',
        dot3: '.',
        text3: 'TAX Dispute',
        dot4: '',
        dot5: '',
        dot6: '',
        dot7: '',
        dot8: '',
        dot9: '',
        dot10: ''
    }
];


function Expert() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

  function nextText() {
    const newIndex = currentTextIndex === data.length - 1 ? 0 : currentTextIndex + 1;
    setCurrentTextIndex(newIndex);
  };

  function previousText() {
    const newIndex = currentTextIndex === 0 ? data.length - 1 : currentTextIndex - 1;
    setCurrentTextIndex(newIndex);
  };
    
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


            <section className="w-[1750px] relative">

             <div className="relative top-[11.25rem] h-[76rem] md:hidden">
             {/* <div className="w-[1750px] relative top-[11.25rem] h-[76rem] sm:hidden"> */}
             {/* <div className="w-[1750px] relative top-[11.25rem] h-[76rem] hidden max-lg:block"> */}
                <p className="text-center font-sans font-bold text-7xl">What we are expert at</p>
                <p className="text-center font-sans font-semibold text-7xl mt-9">Legal and Regulatory Practice Areas</p>

                <section>
                    <div className="w-[900px] h-[1020px] bg-white rounded-3xl ring ring-black shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)] justify-center relative top-32 left-[21.5rem]"> 
                    {/* {['Expert_1_mv', 'Expert_2_mv', 'Expert_3_mv', 'Expert_4_mv', 'Expert_5_mv', 'Expert_6_mv'].map((path) =>{
                        return(
                            <>
                            <div key={path}>

                    <Image src={`/${path}.png`} alt="darkcurcle" width="220" height="220" className="relative p-4 left-10 top-10"  />
                            </div>
                            </>
                        );
                    })} */}

                    {/* {photo.map((photoicon) => (

<Image src={photoicon} alt="darkcurcle" width="220" height="220" className="relative p-4 left-10 top-10" />
))} */}
                   

                     <Image src={data[currentTextIndex].src} alt="darkcurcle" width="220" height="220" className="relative p-4 left-10 top-10" />
                    <p className="font-bold text-7xl relative top-9 left-9">{data[currentTextIndex].title1}</p>
                    <p className="font-bold text-7xl relative top-9 left-9">{data[currentTextIndex].title2}</p>
                    
                    <p className="relative top-[1.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot1}</p>
                    <p className="relative -top-[0.5rem] ml-5 left-10 text-4xl">{data[currentTextIndex].text1}</p>
                    
                    <p className="relative -top-[1.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot2}</p>
                    <p className="relative -top-[4.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text2}</p>
                    
                    <p className="relative -top-[5.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot3}</p>
                    <p className="relative -top-[8.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text3}</p>
                    
                    <p className="relative -top-[9.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot4}</p>
                    <p className="relative -top-[12.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text4}</p>
                    
                    <p className="relative -top-[13.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot5}</p>
                    <p className="relative -top-[16.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text5}</p>
                    
                    <p className="relative -top-[17.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot6}</p>
                    <p className="relative -top-[20.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text6}</p>
                    
                    <p className="relative -top-[21.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot7}</p>
                    <p className="relative -top-[24.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text7}</p>
                    
                    <p className="relative -top-[25.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot8}</p>
                    <p className="relative -top-[28.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text8}</p>
                    
                    <p className="relative -top-[29.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot9}</p>
                    <p className="relative -top-[32.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text9}</p>
                    
                    <p className="relative -top-[33.5rem] ml-5 left-1 text-7xl font-bold">{data[currentTextIndex].dot10}</p>
                    <p className="relative -top-[36.5rem] ml-5 mt-3 left-10 text-4xl">{data[currentTextIndex].text10}</p>
                 
                    
                    <button className="absolute top-1/2 left-2 transform -translate-y-1/2 sm:hidden" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:hidden" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden sm:block" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute bottom-2 right-1/2 transform translate-x-1/2 hidden sm:block" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2 sm:hidden" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:hidden" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden sm:block" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute bottom-2 right-1/2 transform translate-x-1/2 hidden sm:block" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2 sm:hidden" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 sm:hidden" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden sm:block" onClick={previousText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative right-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={left_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] right-1" />
          </button>
          <button className="absolute bottom-2 right-1/2 transform translate-x-1/2 hidden sm:block" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
          <button className="absolute bottom-2 right-1/2 transform translate-x-1/2 hidden sm:block" onClick={nextText}>
            <Image src={white_circle} alt="" width="40" height="50" className="relative left-2 shadow-[0_0px_22px_-2px_rgb(0,0,0,0.25)" />
            <Image src={right_arrow} alt="" width="30" height="30" className="relative bottom-[2.1rem] left-3" />
          </button>
                    </div>
                </section>
            </div> 
            </section>
        </>
    );
}

export default Expert;