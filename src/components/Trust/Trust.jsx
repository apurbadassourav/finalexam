import React from 'react'
import trust from '../../assets/trust.png'

const Trust = () => {
  return (
    <div>
      <div className='max-w-container mx-auto bg-blue flex items-center justify-between'>
        <div className='w-2/5'>
            <picture>
                <img src={trust} alt="" />
            </picture>
        </div>
        <div className='w-3/5 mt-[92px]'>
            <h1 className='font-Chivo font-bold text-[44px] text-white'>Trusted by 35,000+ happy <br />customers.</h1>
            <div className='flex mb-[80px] mt-[64px] justify-between'>
                <div className='w-[180px]'>
                  <h1 className='font-Chivo font-bold text-[44px] text-white'>720+</h1>
                  <p className='font-sans font-medium text-[18px] text-gray'>Over 500 business powered with us</p>
                </div>
                <div className='w-[180px]'>
                  <h1 className='font-Chivo font-bold text-[44px] text-white'>4.9</h1>
                  <p className='font-sans font-medium text-[18px] text-gray'>Rating on google play and app store</p>
                </div>
                <div className='w-[180px]'>
                  <h1 className='font-Chivo font-bold text-[44px] text-white'>200</h1>
                  <p className='font-sans font-medium text-[18px] text-gray'>Easily integrate with your favorite apps</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Trust
