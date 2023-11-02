
import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


const Footer = () => {
    return ( 
    <div>

      <section className="hidden md:flex flex-col py-20 justify-between bg-[#3a3b3c]">
        <div className=" text-center  flex justify-between px-80 space-x-20 text-white">
            <div className="">
            ©2024 Bird, Inc. All rights reserved.
            </div>
            <div>
            <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
            Terms & Conditions
            </div>
            <div className="flex space-x-2">
  
            <div className="bg-black p-2 rounded-full ">
              <Twitter className="h-6 w-6 text-white" />

            </div>
            <div className="bg-black p-2 rounded-full">
              <Linkedin className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black p-2 rounded-full">
              <Instagram className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black p-2 rounded-full">
              <Facebook className="h-6 w-6 text-white" />
            </div>
            <div className="bg-black p-2 rounded-full">
              <Youtube className="h-6 w-6 text-white" />
            </div>
            </div>


</div>
        </section>
    </div> );
}
 
export default Footer;