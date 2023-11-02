import Image from "next/image";



const SeventhSection = () => {
  return (
    <div>
      <div className="py-20 space-y-20 px-10 items-center justify-center flex flex-col bg-[#E5E4E2]">
        <div className="text-4xl md:w-2/5 text-center">Robust features to achieve any business objective as your company grows</div>
 

      <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex ">
        <Image 
        src="/images/icons/gears.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
          <div className="text-2xl font-semibold">Drive cross-team efficiency</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Connect teams and automate work to improve productivity.</div>
        <div className="text-xl"> • Gain clarity on bottlenecks and allocate work with Workload</div>
        <div className="text-xl"> • Manage resourcing for teams with messaging, comments, and unique views</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/puzzle.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
         <div className="text-2xl font-semibold">Automate processes</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Systemize intakes with Workflow Builder and Forms</div>
        <div className="text-xl"> • Reduce manual work with custom Rules like assigning tasks and updating statuses</div>
        <div className="text-xl"> • Automate work in one place with 200+ integrations</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/refresh-2.png"
        width={500}
        height={500}
        alt="logo"
        className="h-20 w-20"
        />
      <div className="text-2xl font-semibold">Get real-time insights</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Monitor progress across teams, without manual work</div>
        <div className="text-xl"> • Build personalized visualizations with Custom Fields and Charts</div>
        <div className="text-xl"> • Save time on creating reports with a robust Charts template library</div>
        </div>


         </div>
         </div>

    
         <div className="space-y-10 md:space-x-40 md:flex md:space-y-0">
        <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/lock.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
       <div className="text-2xl font-semibold">Protect sensitive data</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Connect teams and automate work to improve productivity.</div>
        <div className="text-xl"> • Gain clarity on bottlenecks and allocate work with Workload</div>
        <div className="text-xl"> • Manage resourcing for teams with messaging, comments, and unique views</div>
        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/contacts.png"
        width={300}
        height={300}
        alt="logo"
        className="h-20 w-20"
        />
        <div className="text-2xl font-semibold">Manage permissions and settings</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Control permissions, privacy settings, security requirements and more from a centralized admin console</div>
        <div className="text-xl"> • Reduce manual work with custom Rules like assigning tasks and updating statuses</div>

        </div>


         </div>
         <div className="flex-col w-96 space-y-4 flex">
        <Image 
        src="/images/icons/menu.png"
        width={500}
        height={500}
        alt="logo"
        className="h-20 w-20"
        />
        <div className="text-2xl font-semibold">Set goals and drive alignment</div>
        <div className="ml-6 space-y-4">

     
        <div className="text-xl"> • Align your organization and inspire ownership with Goals</div>
        <div className="text-xl"> • Track all of your team&apos;s projects in a single view with Portfolios

</div>
        <div className="text-xl"> • Save time on creating reports with a robust Charts template library</div>
        </div>


         </div>
         </div>

    


      </div>
    </div>
  );
};

export default SeventhSection;
