import React from 'react'
import avatar from '../assets/svg/avatar.svg'
import { TypeAnimation } from 'react-type-animation'
import { FaJava, FaHtml5, FaPython, FaNode, FaReact, FaLinux ,FaGithub , FaLinkedin ,FaCopyright} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io"
import { GrMysql } from "react-icons/gr";
import { SiEcovacs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import myPic from '../assets/myPic.jpg';
const About = () => {
  return (
    <div className=' md:top-[64px] w-full md:h-[calc(100vh-64px)]  h-screen'>
      <div className=' flex justify-evenly items-center w-[100%] md:h-[679px] h-[1000px]  flex-col md:flex-row'>


        <div className='flex h-[430px]  md:flex-1 justify-evenly items-center md:h-[100%] flex-col'>

          <div className='mt-7 text-white hover:scale-125 transition ease-in-out '>
            <p className=' text-center font-nerko text-5xl'>Let me <span className='text-[#54c8f9]'>introduce</span> myself</p>
          </div>
          <div className='font-blackHan text-md sm:text-xl md:text-2xl xl:text-3xl text-justify flex justify-center items-center rounded-3xl p-2 text-white md:hover:scale-105 trasition duration-300 ease-in-out'>
            <p className='text-center'>Hello! I’m Aashutosh Singh from Gopalganj, Bihar. I completed my schooling at SPN High School and am now pursuing a Bachelor’s in Engineering at Chitkara University. With a deep passion for web development, I enjoy playing volleyball and immersing myself in self-development books.  
            </p>
          </div>
        </div>
        <div className=' md:flex-1 md:h-[100%] flex justify-center items-center '>
          <img className='size-[94.5%] md:h-[400px] md:w-[430px] xl:h-[500px] xl:w-[530px] rounded-full hover:scale-105 duration-700' src={myPic} />
        </div>


      </div>

      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='text-[#01ffff] flex-1 h-1/3   w-full flex justify-center items-center  md:flex md:justify-start  md:pl-14'><div className='hover:scale-110 duration-300 transition ease-in-out w-[70%] h-[70%]  md:w-[40%] rounded-3xl backdrop-blur-sm shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] flex flex-col font-mochiy justify-center items-center  text-xl text-center  md:text-2xl'>
          <p>Matriculation</p>
          <p>Government Middle School </p>
          <p>2018</p>
        </div></div>
        <div className='text-[#01ffff] flex-1 h-1/3  w-full flex justify-center items-center md:flex md:justify-end md:pr-14'><div className='hover:scale-110 duration-300 w-[70%] h-[70%]  md:w-[40%] rounded-3xl  backdrop-blur-sm shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center font-mochiy text-xl text-center  md:text-2xl'>


          <p className=''>Intermediate </p>
          <p>SPN High School Bihar</p>
          <p>2020</p>
        </div>
        </div>
        <div className='text-[#01ffff] flex-1 h-1/3  w-full flex justify-center items-center md:flex md:justify-start  md:pl-14'><div className='hover:scale-110 duration-300 w-[70%] h-[70%] md:w-[40%] rounded-3xl backdrop-blur-sm shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center font-mochiy text-xl text-center  md:text-2xl'>

          <p>Bacholer of Engineering</p>
          <p>Chitkara University</p>
          <p>8.96/10</p>
          <p>2021 - 2025</p>
        </div>
        </div>
      </div>
      {/* Skills */}
      <div className='h-[1100px] md:h-[1000px] w-full flex justify-center items-center flex-col'>
        <h1 className=' text-2xl md:text-4xl xl:text-6xl py-20 text-[#62d0ff] font-mochiy'>Professional skills</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-20 xl:gap-32'>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaJava size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><IoLogoJavascript size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaHtml5 size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><IoLogoCss3 size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaPython size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaNode size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaReact size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiExpress size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiMongodb size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><SiTailwindcss size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><GrMysql size={"75px"} /></div>
          <div className=' h-32 w-32 flex justify-center items-center md:hover:scale-150 duration-700'><FaLinux size={"75px"} /></div>
        </div>

      </div>

      <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center bg-[#41c3ff] md:w-[50%] h-[90px] rounded-3xl text-sm w-[75%] md:hover:text-xl md:md:hover:text-2xl duration-500 font-mochiy hover:scale-95 transition-all ease-in-out cursor-pointer'>
        <p><span className='font-semibold'>Email:</span> toshkumrt@gmail.com</p>
        <p><span className='font-semibold'>Contact:</span> 8235167434</p>
        </div>
      </div>

      <div className=' w-full flex flex-col justify-center items-center h-[200px] gap-10'>
        <p className='text-2xl md:text-3xl font-mochiy text-white'>Find Me On</p>
       <div className='flex justify-center items-center gap-20'>
       <a href='https://github.com/Atoshsingh' target="_blank"><FaGithub size="75px" /></a>
       <a href='https://www.linkedin.com/in/atoshsingh/' target="_blank"><FaLinkedin size="75px"/></a>
       </div>
      </div>

      <div className='w-full text-center bg-[#3fb2ff]'><p>CopyRight  &copy; 2024 Aashutosh Singh </p></div>
    </div>
  )
}

export default About