import Aboutus from "@/components/Layout/Aboutus";
import AfterHeader from "@/components/Layout/AfterHeader";
import BeforeContact from "@/components/Layout/BeforeContact";
import BigCompany from "@/components/Layout/Bigcompany";
import Contact from "@/components/Layout/Contact";
import Expert from "@/components/Layout/Expert";
import WhyChoose from "@/components/Layout/Whychoose";
import Nav from "@/components/Layout/nav";

function Index() {
  return (
    <div>
      <Nav />
      <AfterHeader />
      <Aboutus />
      <BigCompany />
      <WhyChoose />
      <Expert />
      <BeforeContact />
      <Contact />
    </div>
  );
}

export default Index;