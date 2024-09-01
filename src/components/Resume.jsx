import React from 'react';
import Aashutosh from "../assets/resume/Aashutosh_Singh.pdf"
import AashutoshJpg from "../assets/resume/Aashutosh_Singh.jpg"
const Resume = () => {
  return (
    <div className='absolute md:top-[64px] w-full md:h-[calc(100vh-64px)] top-0 h-screen'>
      <div className='w-full  flex flex-col '>
        <div className='h-[1500px] flex justify-center items-center border-yellow-500'><img className='w-[900px] h-[1400px]' src={AashutoshJpg} alt='my remsume pic'/></div>
        <div className='h-[100px] flex justify-center items-center'>
          <a href={Aashutosh} download="Aashutosh_Singh" type="application/pdf">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;