import Image from "next/image";
import Before_Contact from "../../public/images/Before_Contact.png";

function BeforeContact() {
     return (
        <div className="relative left-28 hidden sm:block">
            <Image src={Before_Contact} width="780px" />
        </div>
     );
}

export default BeforeContact;