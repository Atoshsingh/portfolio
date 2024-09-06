import React from 'react'
import offer_letter from '../assets/intership/cipherbyte_offer_letter.jpg';
import certificate from '../assets/intership/certificate.jpg';
import recommendation from '../assets/intership/cipherbyte_recommendation.jpg';
const Experience = () => {
  return (
    <div className='md:top-[64px] w-full md:h-[calc(100vh-64px)] top-0 h-screen ' ><p className='font-inter'>
      <div className=' text-white h-[1420px] md:h-[2650px] w-full mt-28 flex flex-col justify-center items-center gap-10  px-10'>
        <h1 className=' text-xl md:text-2xl font-blackHan text-center text-[#54c8f9]'>Recently I have completed my one month of internship as a full stack developer at CipherByte Tech.</h1>
        <div className='flex justify-center items-center flex-col gap-5'>
          <h1 className='hover:text-xl md:hover:text-2xl duration-300'>Offer Letter</h1>
          <div><img className='w-[320px] md:w-[650px] border-4 rounded-xl hover:scale-95 duration-500 ' src={offer_letter} /></div>
        </div>
        <div className='flex justify-center items-center flex-col gap-5'>
          <h1 className='hover:text-xl md:hover:text-2xl duration-300'>Completion Certificate</h1>
          <div><img className='w-[320px] md:w-[650px] border-4 rounded-xl hover:scale-95 duration-500 ' src={certificate} /></div>
        </div>
        <div className='flex justify-center items-center flex-col gap-5'>
          <h1 className='hover:text-xl md:hover:text-2xl duration-300'>Letter of Recommendation</h1>
          <div><img className='w-[320px] md:w-[650px] border-4 rounded-xl hover:scale-95 duration-500 ' src={recommendation} /></div>
        </div>
      </div>

    </p> </div>
  )
}

export default Experience