import React from 'react'
import use1 from '../../assets/use1.png'
import use2 from '../../assets/use2.png'
import use3 from '../../assets/use3.png'
import use4 from '../../assets/use4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Work = () => {
  return (
    <div>
      <div className='max-w-container mx-auto mt-[50px]'>
        <h1 className='text-center font-Sans font-medium text-xl text-oreng'>Our Services</h1>
        <h1 className='text-center font-Chivo font-bold text-[46px] text-black'>How It Works</h1>
        <div className='py-[80px] flex justify-between  items-center'>
             <div className='w-[330px] p-[36px]'>
                <img src={use1} alt="" />
                <h1 className='font-Chivo font-bold text-[22px] text-black mt-[26px] mb-[8px]'>Plan Product Roadmap</h1>
                <p className='font-Sans font-normal text-[16px] text-gray mb-[26px]'>A product roadmap is a shared source of truth that outlines the vision, direction, priorities</p>
               <div className='flex items-center gap-x-[10px]'>
               <a href="" className='font-Sans font-medium text-[16px] text-blue'>Read More</a>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
             </div>
             <div className='w-[330px] bg-blue p-[36px]'>
                <img src={use2} alt="" />
                <h1 className='font-Chivo font-bold text-[22px] text-white mt-[26px] mb-[8px]'>Assign Any Work</h1>
                <p className='font-Sans font-normal text-[16px] text-white mb-[26px]'>Work assignment or job assignment is allocating work to work centers or appropriate </p>
               <div className='flex items-center gap-x-[10px]'>
               <a href="" className='font-Sans font-medium text-[16px] text-white'>Read More</a>
               <FontAwesomeIcon icon={faArrowRight} className='text-white'/>
               </div>
             </div>
             <div className='w-[330px] p-[36px]'>
                <img src={use3} alt="" />
                <h1 className='font-Chivo font-bold text-[22px] text-black mt-[26px] mb-[8px]'>Monitor Work Progress</h1>
                <p className='font-Sans font-normal text-[16px] text-gray mb-[26px]'>Monitor Work ProgressKeeping records and monitoring activities helps people see progress </p>
               <div className='flex items-center gap-x-[10px]'>
               <a href="" className='font-Sans font-medium text-[16px] text-blue'>Read More</a>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
             </div>
             <div className='w-[330px] p-[36px]'>
                <img src={use4} alt="" />
                <h1 className='font-Chivo font-bold text-[22px] text-black mt-[26px] mb-[8px]'>Pertect Intergration</h1>
                <p className='font-Sans font-normal text-[16px] text-gray mb-[26px]'>App integration, in a general sense, is the process of resources or capabilities from one application </p>
               <div className='flex items-center gap-x-[10px]'>
               <a href="" className='font-Sans font-medium text-[16px] text-blue'>Read More</a>
               <FontAwesomeIcon icon={faArrowRight} />
               </div>
             </div>
        </div>
        <a href="" className='flex mx-auto text-center font-Sans font-medium text-[18px] text-blue border boder-blue py-[20px] px-[70px] w-[185px]
        h-[60px] mb-[50px]'>View More</a>
      </div>
    </div>
  )
}

export default Work
