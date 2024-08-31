import React from 'react'
import mainPage from "../assets/svg/mainPage1.svg"
import { TypeAnimation } from 'react-type-animation';
const MainHome = () => {
return (
  <div className='absolute md:top-[64px] md:h-[calc(100vh-64px)] top-0 h-screen z-0 w-full'>
    <div className='flex justify-center items-center text-white h-full flex-wrap'>
      <div className=' md:flex-1 flex flex-col md:flex-row justify-center items-center h-[50%] md:h-[100%] w-[100%]'>
        {/* greeting*/}
        <div className='flex flex-col justify-center items-center'>
          <p className=' text-2xl md:text-4xl font-semibold text-sky-100'>Nice to Meet!</p><br />
          <p className=' text-2xl md:text-4xl'>I'm <span className='text-sky-300 font-serif font-extrabold'> Aashutosh Singh</span></p>
          <p>
            {/* typing effects  */}
            <div className='flex p-7'>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1500,// time duration for holding 
                  'Frontend Developer',
                  1500,
                  'Backend Developer',
                  1500,
                  'JavaScript Enthusiast',
                  1500,
                  'Student at Chitkara University',
                  500,
                ]}
                speed={50}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              />
            </div>
          </p>
        </div>

      </div>
      <div className='md:flex-1 flex justify-center items-center h-[50%]  md:h-[100%] w-[100%]'>
        <img className='size-72 md:size-96' src={mainPage} />
        {/* <h1>bfdjkshdkjfsodkfosdkfkds</h1> */}
      </div>
    </div>
  </div>
)
}

export default MainHome