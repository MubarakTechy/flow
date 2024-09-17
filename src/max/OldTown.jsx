import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Max1 from "../image/Team-Item (3).png";
import Max2 from "../image/Team-Item (4).png";
import Max3 from "../image/Team-Item (6).png";
import Max4 from "../image/Team-Item (5).png";
import Max5 from "../image/Team-Item (6).png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const OldTown = () => {
  return (
    <div className='p-10 '>
       <div className='flex flex-col p-5 '>
          <h1 className='text-[40px] font-bold '>Meet Our Expert</h1>
          <p className='text-[15px] '>Our team boasts top green energy experts, driving innovation in sustainability.</p>
         </div>
        <Swiper className='p-10'
         modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
           
          <SwiperSlide><div><img className=' ' src={Max1} alt=''/></div> </SwiperSlide>
          <SwiperSlide><div><img className=' ' src={Max2} alt=''/></div></SwiperSlide>
          <SwiperSlide><div><img className=' ' src={Max3}  alt=''/></div></SwiperSlide>
          <SwiperSlide><div><img className=' ' src={Max4}  alt='' /></div></SwiperSlide>
          <SwiperSlide><div><img className=' ' src={Max5}  alt=''/></div> </SwiperSlide>
          
        </Swiper>

    </div>
  )
}

export default OldTown