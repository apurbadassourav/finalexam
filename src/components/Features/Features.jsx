import React from 'react'
import new1 from '../../assets/New1.png'
import new2 from '../../assets/New2.png'
import new3 from '../../assets/New3.png'
import new4 from '../../assets/New4.png'
import new5 from '../../assets/New5.png'
import easy1 from '../../assets/easy1.png'
import easy2 from '../../assets/easy2.png'
import easy3 from '../../assets/easy3.png'


const Features = () => {
  return (
    <div className='max-w-container mx-auto mt-[100px] flex items-center'>
      <div className='w-3/5'>
        <div className='w-[450px] h-[650px] border'>
            <div className='bg-[#2290F5] w-full h-[20px]'></div>
           <div className='flex'>
           <div>
                <img src={new1} alt="" className='translate-x-[-120px] py-[35px]'/>
                <img src={new2} alt="" className='py-[35px]'/>
                <img src={new3} alt="" className='pb-[35px]'/>
            </div>
            <div className='translate-x-[110px] mt-[108px]'>
                <img src={new4} alt=""  className='w-[278px] h-[250px]'/>
                <img src={new5} alt="" />
            </div>
           </div>
        </div>
      </div>
      <div className='w-2/5'>
        <h1 className='font-Chivo font-bold text-[46px] text-black mx-auto mb-[64px]'>We provide features for your Business</h1>
        <div>
            <div className='flex justify-between'>
                <div className='w-[220px]'>
                    <img src={easy1} alt="" />
                    <h1 className='font-Chivo font-bold text-[22px] text-black mt-[14px] mb-[6px]'>Fast and Easy to use</h1>
                    <p className='font-sans font-normal text-[18px] '>Easily to convert API with <br /> just a few clicks</p>
                </div>
                <div className='w-[220px]'>
                    <img src={easy2} alt="" />
                    <h1 className='font-Chivo font-bold text-[22px] text-black mt-[14px] mb-[6px]'>Safely Security</h1>
                    <p className='font-sans font-normal text-[18px]'>All customer data is encrypted</p>
                </div>
            </div>
            <div className='flex mt-[40px] items-center justify-between'>
            <div className='w-[220px]'>
                    <img src={easy3} alt="" />
                    <h1 className='font-Chivo font-bold text-[22px] text-black mt-[14px] mb-[6px]'>Get Organized</h1>
                    <p className='font-sans font-normal text-[18px]'>From lists to boards, organize work your way. </p>
                </div>
                <a href="" className='py-[20px] px-[50px] border bg-blue text-white'>Get Started</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Features
