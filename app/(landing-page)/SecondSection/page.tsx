'use client'

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { useState } from "react";



const tabs = [
  {
    name: "Marketing Teams",
    title: "Deliver impactful marketing strategies",
    feature1: "Campaign planning",
    feature2: "Help teams quickly refocus and reprioritize work as goals change.",
    feature3: "Automate processes for approvals",
    image : "/images/tab-1.webp"
  },
  {
    name : "IT Teams",
    title: "Automate and streamline IT requests",
    feature1: "Reduce digital friction for better team velocity",
    feature2: "Track and manage work across teams",
    feature3: "Automate processes for approvals",
    image : "/images/tab-2.webp"
  },
 
  {
    name : "Operations Teams",
    title : 'Drive operational efficiency',
    feature1 : 'Track work and see progress in real time',
    feature2 : 'Standardize and automate processes',
    feature3 : 'Unblock teams to hit revenue goals',
    image : "/images/tab-3.webp"
  },
  {
    name : 'Project Management',
    title : 'Manage projects more efficiently',
    feature1 : 'Track work and see progress in real time',
    feature2 : 'Standardize and automate processes',
    feature3 : 'Track resources, goals and progress in one place',
    image : "/images/tab-4.webp"



  },
   {
    name : 'Strategic Planning',
    title : 'Align teams to execute winning strategies',
    feature1 : 'Track work and see progress in real time',
    feature2 : 'Set annual plans to deliver results',
    feature3 : 'See real-time insights to stay on track and on budget',
    image : "/images/tab-1.webp"


  }
    
];


const SecondSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const [activeTab, setActiveTab] = useState(tabs[0]);





  return (
    <div ref = {ref}
    
    className="flex flex-col justify-center items-center md:py-20 p-10">
      <div className="flex justify-center items-center">
        <div 
        style={{
          transform: `translateY(${isInView ? 0 : 100}px)`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        
        
        className="md:flex md:space-x-20 border-b md:py-10">
          <div className="space-y-10">
            <div className="text-3xl">
              80% of Fortune 100 companies use Bird
            </div>
            <div className="flex items-center space-x-8 hover:text-blue-500 text-xl">
              See how customers use Bird
              <ArrowRight className="h-6 w-6 ml-4" />
            </div>
          </div>



          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}

          
          className="grid grid-cols-2  md:flex md:space-x-10  items-center   justify-center py-10 ">
            <Image
              src="/images/logo/logo-5.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-13.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-8.svg"
              width={150}
              height={150}
              alt="logo"
            />
            <Image
              src="/images/logo/logo-9.svg"
              width={150}
              height={150}
              alt="logo"
            />
          </motion.div>
        </div>
      </div>
      <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      
       className="text-4xl  md:text-6xl pt-10 py-20 hidden md:block">See how teams use Bird
       </motion.div>
      <div>
        
      </div>

    <div className="hidden md:flex  items-center justify-center ">

  

      {tabs.map((tab) => (
        <div 
        key={tab.name}
        className={`
        flex 
        justify-center 
        items-center 
        space-x-10
        w-60
        ${activeTab === tab ? "border-b-4 pt-2 border-gray-500 text-gray-800" : "text-muted-foreground"}
        
        `}
     
        
        onClick={() => setActiveTab(tab)}
        style={{cursor : 'pointer'}}
        
        >
            <div className="flex text-3xl text-center items-center h-20 w-20 justify-center">
 

                <div className="
                ">{tab.name}</div>
    
    
          </div>


          </div>
      ))}

  </div>

   {/* Display content based on the active tab */}
   <div className="pt-10 hidden md:block">
        {activeTab && (
          <div className="flex   justify-center"> 

          <div 
          style={{height : '525px', width : '700px'}}
      
          
          className="flex-col bg-gray-200 p-10 rounded-md">

 
            <p className="text-4xl py-10 border-b underline ">{activeTab.title}</p>
            <div className="space-y-10 items-center justify-center">

            <ul className="flex space-x-4">
              <CheckCircle2 className="h-6 w-6 text-gray-500" />

              <li>{activeTab.feature1}</li>
      
            </ul>
            <ul className="flex space-x-4">
              <CheckCircle2 className="h-6 w-6 text-gray-500" />

              <li>{activeTab.feature2}</li>
      
            </ul>
            <ul className="flex space-x-4">
              <CheckCircle2 className="h-6 w-6 text-gray-500" />

              <li>{activeTab.feature3}</li>
      
            </ul>
            </div>
          </div>
       
             <div 
             style={{height : '525px', width : '700px'}}
          
          className="
          bg-gradient-to-r from-gray-400 to-gray-100
          items-center justify-center
          rounded-md
          flex

     
      
          
          
          ">


          <Image
              src={activeTab.image}
              width={530}
              height={500}

       
              alt="logo"
              className="
              rounded-md
              
          

          

              
              "

            />

            </div>
        

          </div>
        )}
     
      </div>





    </div>
  );
};

export default SecondSection;
