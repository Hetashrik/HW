import Image from "next/image";
import FG_LOGO_white_4 from "../../public/images/FG_LOGO_white_4.png";
import insta_logo from "../../public/images/insta_logo.png";
import twitter_logo from "../../public/images/twitter_logo.png";
import fb_logo from "../../public/images/fb_logo.png";
import linkedin_logo from "../../public/images/linkedin_logo.png";
import call from "../../public/images/call.png";
import msg from "../../public/images/msg.png";
import location from "../../public/images/location.png";
import twitter_mv from "../../public/images/twitter_mv.png";
import insta_mv from "../../public/images/insta_mv.png";
import fb_mv from "../../public/images/fb_mv.png";
import linkedin_mv from "../../public/images/linkedin_mv.png";

function Contact() {
    return (
        <>

            <div className="bg-[#ea580c] h-[590px] hidden sm:block">
                <div className="flex space-x-14 relative top-14 left-16">
                    <Image src={FG_LOGO_white_4} width="100" height="115" className="relative" />
                    <h1 className="text-white text-4xl font-bold relative top-4">Fintract Global</h1>
                </div>
                <div className="text-white text-left relative top-24 left-16">

                    <p>At Fintract Global Ltd, we combine a cutting-edge tech stack with exceptional</p>
                    <p>talent from Europe, Asia and America to lead change in how financial entities work. </p>
                    <p>Headquartered in London, Fintract Global develops cutting edge fintech</p>
                    <p> and regtech products.</p>
                </div>
                <div className="relative top-36 left-20 flex space-x-5">
                    <Image src={twitter_logo} width="30" height="30" />
                    <Image src={insta_logo} width="30" height="30" />
                    <Image src={fb_logo} width="30" height="30" />
                    <Image src={linkedin_logo} width="30" height="30" />
                </div>
                <div className="relative bottom-[9.5rem] left-[50rem]">
                    <h1 className="text-white text-4xl font-bold relative top-4">Contacts</h1>
                    <div className="flex space-x-2 top-10 relative">
                        <Image src={call} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Phone:</h2>
                        <h2 className="text-white font-bold relative top-2">+44-2037373227</h2>
                    </div>
                    <div className="flex space-x-2 top-20 relative">
                        <Image src={msg} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Email:</h2>
                        <h2 className="text-white font-bold relative top-2">contact@fintractglobal.com</h2>
                    </div>
                    <div className="flex space-x-2 top-[7.4rem] relative">
                        <Image src={location} width="50" height="50" />
                        <h2 className="text-white font-bold relative top-2">Address:</h2>
                        <h2 className="text-white font-bold relative top-2 text-left">Docklands Business Center 10-16</h2>
                        <h2 className="text-white font-bold relative top-7 right-64 text-left">Tiller Road E14 8PX</h2>
                    </div>
                </div>
                <div>
                    <p className="text-white font-bold relative left-3">_______________________________________________________________________________________________________________________________________________________________________________________________________________________</p>
                    <p className="text-white relative top-8 left-3">Fintract Global takes your privacy very seriously. We may process your personal information for carefully considered and specific purpose which are in our interests and</p>
                    <p className="text-white relative top-8 left-3"> enable us to enhance the service we provide.</p>
                    <p className="text-white font-serif relative top-20 left-3">© Copyright 2023. All rights reserved</p>
                    <p className="text-white font-serif relative top-[3.5rem] text-right right-4">Privacy Policy</p>
                </div>
            </div>


            <div className="hidden max-lg:block bg-[#ea580c] top-96 h-[2500px] relative w-[1750px]">
                <div className="relative top-12 left-20">
                    <Image src={FG_LOGO_white_4} width="200" height="225" />
                    <h1 className="text-white text-9xl mt-20">Fintract Global</h1>
                    <p className="text-white mt-20 text-5xl"> At Fintract Global Ltd, we combine a cutting-edge</p>
                    <p className="text-white text-5xl">tech stack with exceptional talent from Europe,</p>
                    <p className="text-white text-5xl">Asia and America to leadchange in how financial</p>
                    <p className="text-white text-5xl">entities work. Headquartered in London,</p>
                    <p className="text-white text-5xl">Fintract Global develops cutting edge fintech</p>
                    <p className="text-white text-5xl"> and regtech products.</p>

                    <div className="flex mt-20 space-x-7">
                        <Image src={twitter_mv} width="150" height="100" />
                        <Image src={insta_mv} width="150" height="100" />
                        <Image src={fb_mv} width="150" height="100" />
                        <Image src={linkedin_mv} width="150" height="100" />
                    </div>
                    <p className="bg-[#ea580c] mt-10 relative right-20"></p>
                    <div className="flex mt-20 space-x-7">
                        <Image src={location} width="150" height="150" />
                        <p className="text-white relative top-[2.5rem] text-6xl">Address</p>
                    </div>
                    <p className="text-white relative bottom-[1.75rem] left-[10.5rem] text-4xl">Docklands Business Center 10-16</p>
                    <p className="text-white relative bottom-[1.75rem] left-[10.5rem] text-4xl">Tiller Road E14 8PX</p>


                    <div className="flex mt-20 space-x-7">
                        <Image src={call} width="150" height="150" />
                        <p className="text-white relative top-[2.5rem] text-6xl">Phone</p>
                    </div>
                    <p className="text-white relative bottom-[1.75rem] left-[10.5rem] text-4xl">+44-2037373227</p>


                    <div className="flex mt-20 space-x-7">
                        <Image src={msg} width="150" height="150" />
                        <p className="text-white relative top-[2.5rem] text-6xl">Email</p>
                    </div>
                    <p className="text-white relative bottom-[1.75rem] left-[10.5rem] text-4xl">contact@fintractglobal.com</p>

                    <p className="text-white text-left text-5xl left-4 mt-20 relative right-6">Fintract Global takes your privacy very seriously. We may process</p>
                    <p className="text-white text-left text-5xl left-4 relative right-6"> your personal information for carefully considered and specific</p>
                    <p className="text-white text-left text-5xl left-4 relative right-6">purposes which are in our interests and enable us to enhance the</p>
                    <p className="text-white text-left text-5xl left-4 relative right-6">services we provide, but which we believe also benefit our </p>
                    <p className="text-white text-left text-5xl left-4 relative right-6">customers. View our Privacy Policy to learn more about these</p>
                    <p className="text-white text-left text-5xl left-4 relative right-6"> interests and when we may process your information in this way.</p>
                    <p className="text-white text-center text-5xl mt-20 relative right-24">Copyright ©2021 All rights reserved.</p>
                </div>
            </div>
        </>

    );
}

export default Contact;