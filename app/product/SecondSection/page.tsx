import Image from "next/image";


const SecondSection = () => {
  return (
    <div className="py-10 space-y-10 items-center justify-center flex flex-col">
      <div className="text-5xl ">Why Bird ?</div>
      <div className="text-2xl text-center">
        According to JDA, Bird improves employee productivity by 45%.
      </div>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-20 text-xl">
        <div className="w-80 text-amber-300 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
                src="/images/icons/lightbulb.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl">82% +</div>
          </div>
          <div className="pt-4 w-80">Increased creativity</div>
        </div>
        <div className="w-80  border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
              src="/images/icons/clock.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl">37% +</div>
          </div>
          <div className="pt-4 w-80">Increased on-time completion</div>
        </div>
        <div className="w-80 text-blue-400 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
             src="/images/icons/refresh.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl">24% +</div>
          </div>
          <div className="pt-4 w-80">
            Increased productivity and efficiency
          </div>
        </div>
        <div className="w-80 text-green-400 border p-8 rounded-lg">
          <div className="flex items-center space-x-2">
            <div>
            <Image
              src="/images/icons/checkmark.png"
              width={250}
              height={250}
              alt="logo"

              
              className="h-20 w-20 " />
            </div>

            <div className="text-3xl">999 +</div>
          </div>
          <div className="pt-4 w-80">Happy clients</div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
