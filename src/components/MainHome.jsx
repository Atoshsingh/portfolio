import React from 'react'
import mainPage from "../assets/svg/mainPage1.svg"
import { TypeAnimation } from 'react-type-animation';
const MainHome = () => {
  return (
    <div className='absolute md:top-[64px] md:h-[calc(100vh-64px)] top-0 h-screen z-0 w-full'>
      <div className='flex justify-center items-center text-white h-full flex-wrap'>
        <div className=' md:flex-1 flex flex-col md:flex-row justify-center items-center h-[50%] md:h-[100%] w-[100%]'>

          <div className='flex flex-col justify-center items-center'>
            <p className=' text-5xl md:text-8xl font-anton text-white'> Glad You're Here</p><br />
            <p className=' text-4xl md:text-6xl font-nerko'>I'm <span className='text-[#54c8f9] font-serif font-extrabold'> Aashutosh Singh</span></p>
  
              {/* typing effects  */}
              <div className='flex p-7'>
                <TypeAnimation
                  preRenderFirstString={true}
                  sequence={[
                    2, // time duration for holding 
                    '',
                    500, // time duration for holding 
                    'A Frontend Developer',
                    1500,
                    'A Backend Developer',
                    1500,
                    'JavaScript Enthusiast',
                    1500,
                    'Student at Chitkara University',
                    500,
                  ]}
                  speed={50}
                  style={{ fontSize: '2em', color: '#bdbaff' , fontWeight:"bold" }} // Add your desired color here
                  repeat={Infinity}
                />
              </div>
             
              <p className='text-2xl font-anton text-wrap  text-center'>"Strongly believes that 'whatever happens, happens for the good.'"</p>

          </div>

        </div>
        <div className='md:flex-1 flex justify-center items-center h-[50%]  md:h-[100%] w-[100%]'>
          <img className='size-96 md:size-10/12 hover:scale-95 duration-500' src={mainPage} />
          {/* <h1>bfdjkshdkjfsodkfosdkfkds</h1> */}
        </div>
      </div>
    </div>
  )
}

export default MainHome