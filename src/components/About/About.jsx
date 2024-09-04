import React from 'react'
import about from '../../assets/about.png'
import star from '../../assets/star.png'
import circle from '../../assets/circle.png'
import starw from '../../assets/starw.png'

const About = () => {
  return (
    <div className='bg-[#F4FAFA] my-[100px]'>
      <div className='max-w-container mx-auto '>
        <div className='flex items-center'>
          <div className='w-1/2 '>
            <div>
              <h1 className='font-Chivo font-bold text-black text-[48px]'>What they are talking  <br /> about us?</h1>
              <p className='font-sans font-normal text-lg text-gray mt-[20px] mb-[40px]'>testimonials are evidence of customers talking about your <br /> product or service in their own words. At their best, they are <br /> authentic, descriptive.</p>
              <a href="" className='font-sans font-medium text-lg text-white border bg-blue py-[20px] px-[48px]'>Get Started</a>
            </div>
            <div className='mt-[80px]'>
              <div className='flex items-center'>
                <div>
                  <img src={about} alt="" />
                </div>
                <div className='ml-[30px]'>
                <div className='flex items-center'>
                  <p className='font-Chivo text-[#52C5B6] font-black text-[24px]'>4.5</p>
                  <img src={star} alt="" />
                </div>
                <p className='font-sans font-medium text-lg'>280k Total Review</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2 bg-white w-[690px] px-[60px] pb-[20px]'>
            <div>
                <img src={circle} alt=""  className='translate-y-[-80px]'/>
              <p className='font-sans font-normal text-[22px] text-gray '>“Wow. Amazing company amazing Expert Manager.<br /> They know how to get things done when it comes to <br /> online trading. </p>
              <div className='flex justify-between mt-[38px]'>
                <div>
                  <p className='font-Chivo font-bold text-black text-[24px]'>Robert Fox</p>
                  <p className='font-sans font-normal text-[16px] text-gray'>Digital Marketer</p>
                </div>
                <img src={starw} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
