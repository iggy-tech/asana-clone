import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

const FifthSection = () => {
  return (
    <div className="  md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-[#28282B] ">

        <div className=" space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10 ">
          <div className=" text-xl ">STREAMLINE YOUR WORK AND PROCESSES</div>
          <div className="text-4xl ">Prioritize revenue-driving work</div>
          <div className="text-xl ">
            Connect what needs to get done, who is responsible, and how to get
            it done.
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
              <AccordionTrigger
              className="text-blue-400"
              
              >Automate your workflows</AccordionTrigger>
              <AccordionContent
                className="border-b border-blue-500"
            
              

              
              >
              Put tasks on autopilot like assigning work, setting due dates, and more.
              <div className="flex text-blue-400 pt-4">
            <div className="text-lg">Get Started</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger
              className="text-yellow-300"
              
              
              >Streamline your reports</AccordionTrigger>
              <AccordionContent
              className="border-b border-yellow-300"
              >
              Get real-time insights into progress for any workstream.

              <div className="flex text-yellow-400 pt-4">
            <div className="text-lg">Get Started</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger
                className="text-green-400"
              >Manage your intakes
              
              
              
              </AccordionTrigger>
              <AccordionContent
              
              
              >
              Make it easy to collect information and triage incoming requests.

              <div className="flex text-green-400 pt-4">
            <div className="text-lg">Get Started</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger
              className="text-red-400"
              
              >Connect work to purpose</AccordionTrigger>
              <AccordionContent>
              Manage risks and dependencies on company goals for better collaboration with leadership.
              <div className="flex text-red-400 pt-4">
            <div className="text-lg">Get Started</div>

            <ArrowRight className="h-6 w-6 ml-4 " />
          </div>

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Image src="/images/tab-6.webp" alt="Image" width={700} height={700} className="p-10 " />
 
    </div>
  );
};

export default FifthSection;
