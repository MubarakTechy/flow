import React from 'react'
import Max1 from '../image/star.png';
import Max2 from '../image/star.png';
import Max3 from '../image/star.png';
import Max4 from '../image/star.png';
import Max5 from '../image/star.png';
import Max6 from "../image/Ellipse 1 (5).png";



const Customer = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center'>
        <div className='flex flex-col gap-3  bg-slate-500 h-[40vh] p-3 w-[50vw] items-center '>
            <div className='flex gap-3'>
                <img src={Max1} alt="" />
                <img src={Max2} alt="" />
                <img src={Max3} alt="" />
                <img src={Max4} alt="" />
                <img src={Max5} alt="" />
            </div>
            <h1 className='text-[25px] font-bold '>“Flow transformed my energy use. Efficient, <br /> green tech, outstanding service!”</h1>
            <div className='flex items-center gap-3'>
                <img src={Max6} alt="" />
                <p className='text-[13px] font-bold '>Jenny Wilson</p>
            </div>
            <p>Solar energy service</p>
        </div>
    </div>
  )
}

export default Customer