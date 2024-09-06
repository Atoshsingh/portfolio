import React from 'react';
import Aashutosh from "../assets/resume/Aashutosh_Singh_1.pdf"
import AashutoshJpg from "../assets/resume/Aashutosh_Singh_1.jpg"
const Resume = () => {
  return (
    <div className=' md:top-[64px] w-full md:h-[calc(100vh-64px)] top-0 h-screen'>
      <div className='w-full p-20  flex flex-col items-center justify-center '>
      <p className='text-[#77d6ff] text-2xl md:text-4xl hover:scale-110 duration-500 font-extrabold'>RESUME</p>
        <div className='h-[500px] w-[300px] md:w-[1200px] md:h-[1300px]  flex flex-row justify-center items-center '>
          <img className='xl:w-[860px] hover:scale-95 xl:h-[1200px] md:w-[640px] md:h-[1010px] w-[400px] h-[420px] transition-all ease-in-out duration-700 rounded-2xl' src={AashutoshJpg} alt='my remsume pic' />
        </div>
        <div className='h-[50px]  flex justify-center items-center'>
          <a className='curser-pointer font-mochiy hover:scale-95 bg-[#54c8f9] hover:bg-[#1184b6] px-10 py-3 rounded-md duration-500 hover:text-white ' href={Aashutosh} download="Aashutosh Singh (Resume) " type="application/pdf">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;