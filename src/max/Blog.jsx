import React from 'react';
import Max1 from "../image/Image (24).png";
import Max2 from "../image/Ellipse 1 (6).png";
import Max3 from "../image/forest (6).png";
import Max4 from "../image/Ellipse 1 (7).png";
import Max5 from "../image/Image (15).png";
import Max6 from "../image/Ellipse 1 (5).png";
import Max7 from "../image/forest (2).png";
import Max8 from "../image/Ellipse 1 (6).png";


const Blog = () => {
  return (
    <div className='flex flex-col  overflow-hidden justify-center items-center p-10 max-sm:flex-col  gap-3'>
        <div className='p-5'>
            <h1 className='text-[40px] font-bold '>Blog</h1>
        </div>
           <div className='flex gap-10 max-sm:flex-col'>
               <div className='flex flex-col  overflow-hidden  '>
                    <div><img src={Max1} alt="" className='h-[70vh] max-sm:h-[50vh] ' /></div>
                    <div className='flex flex-col gap-5'>
                        <h1  className='text-[15px] font-bold '>Harnessing the Power of the Sun: Exploring <br /> the World of Solar Energy</h1>
                        <p className='text-[14px] '>Solar energy is revolutionizing the way we power our world. In this blog post, <br />we'll delve into the incredible potential of solar technology,
                        its environmental benefits, <br />and how you can tap into this sustainable energy source  for a brighter future.</p>
                        <div className='flex  items-center gap-4'>
                            <img src={Max2} alt="" />
                            <p className='text-[13px] font-bold '> Leslie Alexander</p>
                            <p className='text-[1px] max-sm:hidden '>9 min read</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-3 '>
                        <div><img src={Max3} alt="" /></div>
                        <div className='flex flex-col gap-5' >
                            <h1 className='text-[15px] font-bold '>Wind Power: A Breath of <br /> Fresh Air for Clean Energy <br /> Enthusiasts</h1>
                            <div className='flex gap-4 items-center'>
                                <img src={Max4} alt="" />
                                <p className='text-[13px] font-bold' >Wade Warren</p>
                                <p className='text-[1px] max-sm:hidden'>7 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div><img src={Max5} alt="" /></div>
                        <div className='flex flex-col gap-5' >
                            <h1 className='text-[15px] font-bold '>From Trash to Treasure: <br /> The Promising World of <br /> Biomass Energy</h1>
                            <div className='flex gap-4 items-center'>
                                <img src={Max6} alt="" />
                                <p className='text-[13px] font-bold' >Jenny Wilson</p>
                                <p className='text-[1px] max-sm:hidden '>12 min read</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 '>
                        <div><img src={Max7} alt="" /></div>
                        <div className='flex flex-col gap-5' >
                            <h1 className='text-[15px] font-bold '>From Trash to Treasure: The <br /> Promising World of Biomass Energy</h1>
                            <div className='flex gap-4 items-center'>
                                <img src={Max8} alt="" />
                                <p className='text-[13px] font-bold' >Leslie Alexander</p>
                                <p className='text-[1px]  max-sm:hidden'>5 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
         </div>
 </div>

  )
}

export default Blog