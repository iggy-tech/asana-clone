import FirstSection from "./FirstSection/page";
import Navbar from "./Navbar/navbar";
import SecondSection from "@/app/product/SecondSection/page";
import ThirdSection from "./ThirdSection/page";
import FourthSection from "./FourthSection/page";
import FifthSection from "./FifthSection/page";
import SixthSection from "./SixthSection/page";
import SeventhSection from "./SeventhSection/page";
import EighthSection from "./EighthSection/page";
import Footer from "./footer/page";

const ProductPage = () => {
    return ( 
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EighthSection />
        <Footer />
    </div> );
}
 
export default ProductPage;