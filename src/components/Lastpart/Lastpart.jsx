import React from 'react'
import fotterlogo from '../../assets/fotterlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGoogle,faTwitter,faInstagram ,faTelegram} from '@fortawesome/free-brands-svg-icons';


const Lastpart = () => {
  return (
    <div className='max-w-container mx-auto mt-[100px]'>
      <div className='flex items-center items-center justify-center text-center'>
        <div className='w-[263px] h-[204px]'>
        <img src={fotterlogo} alt="" />
        <p className='font-sans font-normal text-[16px] text-gray my-[26px] '>Build a modern and creative website with Innovate.</p>
        <div className='flex items-center justify-between'>
        <FontAwesomeIcon icon={faGoogle} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />
        </div>
        </div>
        <div className='w-[105px] h-[192px] font-Sans text-gray ml-[200px]'>
          <h1 className='font-medium text-[16px] '>Product</h1>
          <div className='font-Sans font-normal text-[16px] text-blue mt-[20px] '>
            <p className='mb-[12px]'>Landingpages</p>
            <p className='mb-[12px]'>Pricing</p>
            <p className='mb-[12px]'>Benefits</p>
            <p className='mb-[12px]'>Features</p>
          </div>
        </div>
        <div className='w-[146px] h-[228px] font-Sans text-gray ml-[84px]'>
          <h1 className='font-medium text-[16px] '>Company</h1>
          <div className='font-Sans font-normal text-[16px] text-blue mt-[20px] '>
            <p className='mb-[12px]'>About</p>
            <p className='mb-[12px]'>Privacy Policy</p>
            <p className='mb-[12px]'>Terms & Conditions</p>
            <p className='mb-[12px]'>Partners</p>
            <p className='mb-[12px]'>Contact</p>
          </div>
        </div>
        <div className='w-[162px] h-[190px] font-Sans text-gray ml-[80px]'>
          <h1 className='font-medium text-[16px] '>Resources</h1>
          <div className='font-Sans font-normal text-[16px] text-blue mt-[20px] '>
            <p className='mb-[12px]'>Guides and resources</p>
            <p className='mb-[12px]'>Blog</p>
            <p className='mb-[12px]'>Tools</p>
            <p className='mb-[12px]'>Support</p>
          </div>
        </div>
        <div className='w-[285px] h-[180px] ml-[83px]'>
          <h1 className='font-sans font-medium text-[18px] text-black mb-[18px]'>Get Latest Updates</h1>
          <h1 className='font-sans font-normal text-[16px] text-black mb-[32px]'>Subscribe to our newsletter and get many interesting things every week</h1>
          <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 rounded-l-md text-black"
          />
          <button
            type="submit"
            className="bg-blue text-white px-6 py-2 rounded-r-md ">
            <FontAwesomeIcon icon={faTelegram} />
          </button>
        </form>
        </div>
      </div>
      <div>
        <h1 className='font-sans font-normal text-[14px] text-black '>
        © 2024 Innovate - All Right Reserved
        </h1>
      </div>
    </div>
  )
}

export default Lastpart
