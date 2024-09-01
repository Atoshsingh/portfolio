import React from 'react'
import avatar from '../assets/svg/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { FaJava ,FaHtml5 ,FaPython ,FaNode, FaReact ,FaLinux} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io"
import { GrMysql } from "react-icons/gr";
import { SiEcovacs, SiExpress ,SiMongodb, SiTailwindcss } from "react-icons/si";
const About = () => {
  return (
    <div className='absolute md:top-[64px] w-full md:h-[calc(100vh-64px)] top-0 h-screen'>
      <div className='flex justify-center items-center w-[100%] md:h-[679px] h-[1000px]  flex-col md:flex-row'>

        {/* left */}
        <div className='flex md:flex-1 md:h-fullflex justify-center items-center md:h-[100%] flex-col'>
          {/* <p className='md:text-2xl text-xl font-serif'>Let me share a little about who I am.</p> */}
          <div className='mt-7 text-[#5a73ff] font-extrabold bg-gray-200 px-10 rounded-3xl shadow-xl hover:scale-125 transition ease-in-out '>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                2,// time duration for holding 
                '',
                500,// time duration for holding 
                "I'm Aashutosh Singh",
              ]}
              speed={5}
              style={{ fontSize: '2em' }}
              repeat={Infinity}
            />
          </div>
          <div className=' bg-yellow-400  flex justify-center items-center rounded-3xl p-4 text-gray-500 hover:p-5 md:hover:scale-125 trasition duration-300 ease-in-out font-semibold'>
              <p> Originally from Gopalganj, Bihar, I completed my primary and secondary schooling at SPN High School in Bihar.
                I am currently pursuing a Bachelor of Engineering from Chitkara University. I have a strong interest in web development,
                and my hobbies include playing football and reading self-development books.
              </p>
          </div>
        </div>
        {/* right */}
        <div className=' md:flex-1 md:h-[100%] flex justify-center items-center bg-white '>
          <div className=' size-60 md:size-96 rounded-full '> <img src={avatar} /></div>
        </div>


      </div>

      <div className='w-full h-full border-blue-500 flex flex-col justify-center items-center'>
        <div className='flex-1 h-1/3  w-full flex justify-center items-center  md:flex md:justify-start  md:pl-14'><div className= 'hover:scale-110 duration-300 transition ease-in-out w-[70%] h-[70%]  md:w-[40%] rounded-3xl bg-[#6e80ed] flex flex-col justify-center items-center'>
          {/* 10 content */}
          <p>Matriculation</p>
          <p>Government Middle School </p>
          <p>2018</p>
        </div></div>
        <div className='flex-1 h-1/3  w-full flex justify-center items-center md:flex md:justify-end md:pr-14'><div className='hover:scale-110 duration-300 w-[70%] h-[70%]  md:w-[40%] rounded-3xl bg-green-400 flex flex-col justify-center items-center'>

          {/* 12 content */}
          <p className=''>Intermediate </p>
          <p>SPN High School Bihar</p>
          <p>2020</p>
        </div>
        </div>
        <div className='flex-1 h-1/3  w-full flex justify-center items-center md:flex md:justify-start  md:pl-14'><div className= 'hover:scale-110 duration-300 w-[70%] h-[70%] md:w-[40%] rounded-3xl bg-[#6e80ed] flex flex-col justify-center items-center'>
          {/* collage content */}
          <p>Bacholer of Engineering</p>
          <p>Chitkara University</p>
          <p>2021 - 2025</p>
        </div>
        </div>
      </div>
      {/* Skills */}
      <div className='h-[900px] md:h-[800px] w-full flex justify-center items-center flex-col bg-[#7086ff]'>
        <h1 className='text-3xl pb-10'>professional skills</h1>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-20 xl:gap-32'>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaJava size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><IoLogoJavascript size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaHtml5 size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><IoLogoCss3 size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaPython size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaNode size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaReact size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiExpress size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiMongodb size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiTailwindcss size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><GrMysql size={"75px"}/></div>
    <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaLinux size={"75px"}/></div>
  </div>

</div>

    </div>
  )
}

export default About