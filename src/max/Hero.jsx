import React from "react";

import Moto1 from "../../src/image/Photo (2).png";
import Moto2 from "../../src/image/Logo.png";
import Moto3 from "../../src/image/Logo (1).png";
import Moto4 from "../../src/image/Logo (2).png";
import Moto5 from "../../src/image/Logo (3).png";


function Hero() {
    
    
  return (
    <>
      <div className="flex max-sm:flex-col items-center justify-center p-[10%] gap-[7%] ">
         <div className="  flex flex-col gap-8">
            <h1 className="max-sm:text-[40px] text-[40px] font-bold max-sm:w[30%] ">The Future of Green Energy</h1>
                <p className="text-[16px] ">
                  Our commitment to green energy is paving the way for a cleaner, <br/>
                  healthier planet. Join us on a journey towards a future where clean,<br/>
                  renewable energy sources transform the way we power our lives.
                </p> 
                <div className="flex gap-3 ">
                   <button className="w-[35%] max-sm:w-[50%]   bg-[#022C22] font-bold p-3 rounded-[15px]  text-[white] border-solid border-2 border-[black]">See our Solution</button>
                   <button className="w-[30%] max-sm:w-[40%]  bg-[white] font-bold p-3 rounded-[15px]  text-[#022C22] border-solid border-2 border-[black]">Get Touch</button>
                </div>
              </div>
        <div>
          <img 
             src={Moto1} 
             alt="" 
             className="h-[80vh] max-sm:h-[40vh]  rounded-[50%] " />
        </div>
      </div>
      <div className="">
        <div className="flex items-center max-sm:flex-col justify-center gap-[5%] p-5">
           <h1 className="text-[17px] font-bold">Global partner that trust Us:</h1>
            <div className="flex  max-sm:flex max-sm:gap-3">
                <img src={Moto2} alt="" className="h-[5vh] max-sm:hidden "  />
              <img src={Moto3} alt="" className="h-[5vh] "  />
              <img src={Moto4} alt="" className="h-[5vh] "  />
              <img src={Moto5} alt="" className="h-[5vh] max-sm:hidden "  />
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero;