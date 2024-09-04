import React from 'react'
import layer1 from '../../assets/layer1.png'
import layer2 from '../../assets/layer2.png'
import layer3 from '../../assets/layer3.png'

const Platfrom = () => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-[160px]'>
        <div className='flex items-center justify-between '>
            <h1 className='font-Chivo font-bold text-5xl text-black w-[600px]'>How simple is it to use our platform?</h1>
            <h1 className='font-sans font-normal text-lg text-gray w-[530px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</h1>
         </div>
        <div className='mt-[116px] flex items-center justify-between '>
            <div className=' text-center w-[320px] h-[316px] '>
                <picture className='flex items-center mx-auto justify-center  max-w-xs'>
                    <img src={layer1} alt="" />
                </picture>
                <h1 className='font-Chivo font-bold text-black text-2xl'>
                Login or sign up to be able use our platform
                </h1>
                <p>This quickstart shows you how to use Identity Platform to sign in a user with an email and password. </p>
            </div>
            <div className=' text-center w-[320px] h-[316px] '>
                <picture className='flex items-center mx-auto justify-center  max-w-xs'>
                    <img src={layer2} alt="" />
                </picture>
                <h1 className='font-Chivo font-bold text-black text-2xl'>
                Connect your website with just a few click
                </h1>
                <p>Once your website is online, you can configure it, I will show you how to put your website online </p>
            </div>
            <div className=' text-center w-[320px] h-[316px] '>
                <picture className='flex items-center mx-auto justify-center  max-w-xs'>
                    <img src={layer3} alt="" />
                </picture>
                <h1 className='font-Chivo font-bold text-black text-2xl'>
                Take some sales data that you want
                </h1>
                <p>Sell your data directly: The most straightforward method is to sell your data directly to another </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Platfrom
