import React from 'react'
import img1 from '../../assets/svg1.png'
import img2 from '../../assets/svg2.png'
import img3 from '../../assets/svg3.png'
import img4 from '../../assets/svg4.png'
import img5 from '../../assets/svg5.png'
import img6 from '../../assets/svg6.png'
import img7 from '../../assets/svg7.png'
import img8 from '../../assets/svg8.png'

const Integrations = () => {
  return (
    <div className='bg-[#F4FAFA]'>
      <div className='max-w-container mx-auto mt-[50px] flex items-center justify-between'>
        <div className='w-[600px]'>
         <h1 className='font-sans font-medium text-[20px] text-oreng '>Integrations</h1>
         <h1 className='font-Chivo font-bold text-[46px] text-black'>Easily integrate with your favorite apps</h1>
         <p className='font-Chivo font-normal text-[18px] text-gray mt-[20px] mb-[40px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
         <a href="" className='font-sans font-medium text-[18px] text-white border bg-blue py-[20px] px-[48px] rounded-md '>Get Started</a>
         </div>
        <div className='w-[700px] '>
            <div className='flex items-center justify-between'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Integrations
