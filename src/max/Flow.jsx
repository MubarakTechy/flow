import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Max1 from '../image/star.png';
import Max2 from '../image/star.png';
import Max3 from '../image/star.png';
import Max4 from '../image/star.png';
import Max5 from '../image/star.png';
import Max6 from "../image/Ellipse 1 (5).png";
import Max7 from "../image/Ellipse 1 (7).png";
import Max8 from "../image/Ellipse 1 (6).png";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const OldTown = () => {
  return (
    <div className='p-10  justify-center items-start'>
       <div className='flex flex-col gap-4 p-10  items-center'>
          <h1 className='text-[50px] font-bold max-sm:text-[17px]   '>What our customers say</h1>
          <p className='text-[16px] max-sm:text-[13px] max-sm:text-center '>Thousands of happy customers that changed their energy use </p>
         </div>
        <Swiper className='p-10'
         modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          pagination
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
           
          <SwiperSlide> 
                <div className='flex flex-col gap-3  bg- h-[40vh] p-3 w-[40vw] max-sm:h-[30vh]  max-sm:w-[80vw]  items-center  rounded-[10px] shadow-lg '>
                    <div className='flex gap-3'>
                        <img src={Max1} alt="" />
                        <img src={Max2} alt="" />
                        <img src={Max3} alt="" />
                        <img src={Max4} alt="" />
                        <img src={Max5} alt="" />
                    </div>
                    <h1 className='max-sm:text-[16px]  text-[25px] font-bold '>“Flow transformed my energy use. Efficient, green tech <br /> green tech, outstanding service!”</h1>
                    <div className='flex items-center gap-3'>
                        <img src={Max6} alt="" />
                        <p className='text-[13px] font-bold '>Leslie Alexander</p>
                    </div>
                    <p>Solar energy service</p>
                </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className='flex flex-col gap-3  bg- h-[40vh] p-3 w-[40vw] items-center max-sm:h-[30vh]  max-sm:w-[80vw]    rounded-[10px] shadow-lg '>
                        <div className='flex gap-3'>
                            <img src={Max1} alt="" />
                            <img src={Max2} alt="" />
                            <img src={Max3} alt="" />
                            <img src={Max4} alt="" />
                            <img src={Max5} alt="" />
                        </div>
                        <h1 className=' max-sm:text-[14px]  text-[25px] font-bold '>“Flow transformed my energy use. Efficient, green tech <br /> Green tech, outstanding service!”</h1>
                        <div className='flex items-center gap-3'>
                            <img src={Max7} alt="" />
                            <p className='text-[13px] font-bold '>Jenny Wilson</p>
                        </div>
                        <p>Solar energy service</p>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
                <div className='flex flex-col gap-3  bg- h-[40vh] p-3 w-[40vw] items-center  max-sm:h-[30vh]  max-sm:w-[80vw]  rounded-[10px] shadow-lg '>
                        <div className='flex gap-3'>
                        <img src={Max1} alt="" />
                        <img src={Max2} alt="" />
                        <img src={Max3} alt="" />
                        <img src={Max4} alt="" />
                        <img src={Max5} alt="" />
                    </div>
                    <h1 className='text-[25px] max-sm:text-[14px] font-bold '>“Flow transformed my energy use. Efficient, <br /> green tech, outstanding service!”</h1>
                    <div className='flex items-center gap-3'>
                        <img src={Max8} alt="" />
                        <p className='text-[13px] font-bold '>Wade Warren</p>
                    </div>
                    <p>Solar energy service</p>
                </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='flex flex-col gap-3  bg- h-[40vh] p-3 w-[40vw]  max-sm:h-[30vh]  max-sm:w-[80vw] items-center  rounded-[10px] shadow-lg '>
                <div className='flex gap-3'>
                    <img src={Max1} alt="" />
                    <img src={Max2} alt="" />
                    <img src={Max3} alt="" />
                    <img src={Max4} alt="" />
                    <img src={Max5} alt="" />
                </div>
                <h1 className='text-[14px] font-bold '>“Flow transformed my energy use.<br /> green tech, outstanding service!””</h1>
                <div className='flex items-center gap-3'>
                    <img src={Max6} alt="" />
                    <p className='text-[13px] font-bold '>Leslie Alexander</p>
                </div>
                <p>Solar energy service</p>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
                <div className='flex flex-col gap-3  bg- h-[40vh] p-3 w-[40vw]  max-sm:h-[30vh]  max-sm:w-[80vw] items-center  rounded-[10px] shadow-lg  '>
                    <div className='flex gap-3'>
                        <img src={Max1} alt="" />
                        <img src={Max2} alt="" />
                        <img src={Max3} alt="" />
                        <img src={Max4} alt="" />
                        <img src={Max5} alt="" />
                    </div>
                    <h1 className='text-[25px] max-sm:text-[14px] font-bold '>“Flow transformed my energy use. Efficient, <br /> green tech, outstanding service!”</h1>
                    <div className='flex items-center gap-3'>
                        <img src={Max7} alt="" />
                        <p className='text-[13px] font-bold '>Jenny Wilson</p>
                    </div>
                    <p>Solar energy service</p>
                </div>
          </SwiperSlide>
          
        </Swiper>

    </div>
  )
}

export default OldTown