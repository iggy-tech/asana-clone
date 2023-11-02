'use client'

import React from "react";

import Slider from 'react-infinite-logo-slider'

import Image from "next/image";


const SixthSection = () => {
 
  
    return (
        <div className="py-20">


        <Slider
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorders={true}
    

       
    >
        <Slider.Slide>
        <Image src="/images/logo/logo-15.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-13.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-16.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-17.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-18.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-19.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-14.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-13.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-15.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-13.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-12.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/images/logo/logo-14.svg" alt="Facebook" width={100} height={100}  className="w-20 h-20"  />
        </Slider.Slide>
        <Slider.Slide>
          
        </Slider.Slide>
    </Slider>
    </div>
    );
  };
  
  export default SixthSection;