import React from 'react'
import logo from '../../assets/logo.png'
import laptop from '../../assets/laptop.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='bg-[#2C2F99] py-[50px]' >
      <div className='bg-shape bg-cover bg-norepeat'>
       <div className=''>
      <div className='max-w-container mx-auto '>
      <div className='flex items-center text-center'>
        <div className='mr-[258px]'>
            <picture>
              <img src={logo} alt="" />
            </picture>
        </div>
        <div className='flex items-center gap-x-[50px] '>
            <div className='flex items-center gap-x-[12px]'>
              <h1 className='text-white font-sans font-medium text-[18px]'>Home</h1>
              <FontAwesomeIcon icon={faChevronDown} className='text-white' />
            </div>
            <div>
              <h1 className='text-white font-sans font-medium text-[18px]'>Features</h1>
            </div>
            <div className='flex items-center gap-x-[12px]'>
              <h1 className='text-white font-sans font-medium text-[18px]'>Service</h1>
              <FontAwesomeIcon icon={faChevronDown} className='text-white' />
            </div>
            <div className='flex items-center gap-x-[12px]'>
              <h1 className='text-white font-sans font-medium text-[18px]'>Pages</h1>
              <FontAwesomeIcon icon={faChevronDown} className='text-white' />
            </div>
            <div>
              <h1 className='text-white font-sans font-medium text-[18px]'>Blog</h1>
            </div>
        </div>
        <div className='flex items-center justify-end ml-[252px] gap-x-[36px]'>
            <h1 className='text-white font-sans font-medium text-[18px] '>Login</h1>
            <h1 className='text-[#2C2643] font-sans font-medium text-[18px] border bg-deep rounded-md py-[20px] px-[48px] mr-[20px]'>Register</h1>
        </div>
        </div>
      <div className='mt-[122px] '>
     <div className=" container mx-auto text-center">
        <h1 className=" font-Chivo font-bold text-white text-[58px] mb-4">
          Get your work done with <br /> Management Tool
        </h1>
        <p className="font-sans font-normal text-white text-[18px] mb-[32px]">
          The world’s first project management platform that <br /> connects everything
        </p>
        <form className="max-w-md mx-auto flex mb-[98px]">
          <input
            type="email"
            placeholder="Your business email"
            className="w-full px-4 py-2 rounded-l-md text-black"
          />
          <button
            type="submit"
            className="bg-deep text-white px-6 py-2 rounded-r-md ">
            Try for free
          </button>
        </form>
        <picture className='translate-y-[100px]'>
          <img src={laptop} alt="" />
        </picture>
      </div>
      </div>
      <div>
        d
        </div>
      </div>
       </div>
      </div>
    </div>
  )
}

export default Header
