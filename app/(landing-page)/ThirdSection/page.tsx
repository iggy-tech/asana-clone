'use client'



import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const ThirdSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  
  return (
    <div 
    >
      <motion.div 
      ref = {ref}
      initial={{ y: 100, opacity: 0 }}  
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 4 }}

      
      className="flex flex-col space-y-10 ">
        <div className="py-20 bg-[#097969] items-center flex flex-col space-y-10">
          <div className="text-white text-4xl px-10 md:px-0  md:text-6xl md:pb-10 flex items-start justify-start ">
            Why companies choose Bird
          </div>
          <div className="md:w-3/4 px-10">
            <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                The only platform with goals built in
              </div>
              <div className="md:w-1/2 hidden md:block">
                See related tasks, collaborators and progress to quickly achieve
                business goals.
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center  text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 w-10 h-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Rated best for cross-team collaboration
              </div>
              <div className="md:w-1/2 hidden md:block">
                Bird is rated as a leader in work management by industry
                experts.
              </div>
            </div>
            <div className="flex space-x-10 md:space-x-20 text-white items-center justify-center text-2xl border-b border-t py-10">
              <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10 " />
              <div className="md:w-80 md:text-3xl text-md w-72">
                Simple adoption, with less downtime
              </div>
              <div className="md:w-1/2 hidden md:block">
                Get tailored support to help your teams easily migrate existing
                data and adopt Bird.
              </div>
            </div>

            <div className="bg-gray-200 p-6 w-52 rounded-lg mt-10 items-center justify-center flex">
              See how it works
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ThirdSection;
