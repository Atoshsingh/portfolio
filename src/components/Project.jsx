import React, { useEffect } from 'react'
import connetSphere from "../assets/projectImages/connectSphere.png"
import workOut from '../assets/projectImages/workout Manager.png'
import spotify from '../assets/projectImages/spotify.png'
import todo from '../assets/projectImages/advTodo.png'
import docs from '../assets/projectImages/docs.png'
import shopNest from '../assets/projectImages/shopNest.png'
import calculator from "../assets/projectImages/calculator.png"
import repairPro from '../assets/projectImages/repairPro.png';
const Project=()=>{
  return (
    <div className=' w-full md:h-[2200px] h-[3700px] flex justify-center items-center'>
      <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-10 xl:gap-32 h-[3600px] md:h-[1700px] '>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[460px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[10%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>Repair Pro </p></div>
        <div className='h-[30%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={repairPro} alt='repairPro'/></div>
        <div className='h-[40%] text-sm text-center w-[90%] text-white '><p>Repair Pro is a comprehensive web platform I developed to streamline and manage repair services. It connects customers with skilled technicians for various repair needs, including electronics, home appliances, and more. The website allows users to request services and schedule appointments with ease, ensuring a smooth and efficient repair process. </p></div>
      </div>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[450px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[7%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>Connect Sphere </p></div>
        <div className='h-[27%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={connetSphere} alt='connectSphere'/> 2</div>
        <div className='h-[46%] text-sm text-center w-[90%] text-white'><p>I developed ConnectSphere using the MERN stack as a networking app to connect people for professional collaborations. Users can create profiles, connect with industry peers, and engage in conversations. The platform simplifies networking with an easy-to-use interface for messaging and sharing updates. ConnectSphere helps users expand their network, discover opportunities, and collaborate across industries. </p></div>
      </div>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[450px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[10%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>Workout Manager  </p></div>
        <div className='h-[30%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={workOut} alt='workoutManager'/></div>
        <div className='h-[40%] text-sm text-center w-[90%] text-white '><p>Using the MERN stack, I coded Workout Manager to help users schedule and manage their gym tasks and workouts. It provides a streamlined interface for organizing fitness routines and tracking progress. The website enables users to plan workouts and stay updated on gym activities. </p></div>
      </div>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[450px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[10%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>Spotify Clone  </p></div>
        <div className='h-[30%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={spotify} alt='workoutManager'/></div>
        <div className='h-[40%] text-sm text-center w-[90%] text-white '><p>I created a Spotify Clone using the Spotify development API, gaining valuable experience in API development. This project involved building a replica of Spotify's core features and learning how to integrate and utilize APIs effectively. </p></div>
      </div>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[450px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[10%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>ShopNest</p></div>
        <div className='h-[30%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={shopNest} alt='shopNest'/></div>
        <div className='h-[40%] text-sm text-center w-[90%] text-white '><p>ShopNest is a website I developed for buying items, utilizing HTML, JavaScript, localStorage, and CSS. It provides a user-friendly interface for browsing and selecting products. Although it does not offer payment options, ShopNest efficiently manages item selection and storage using localStorage to enhance the user experience. </p></div>
      </div>
      <div className='backdrop-blur-2xl gap-7 rounded-3xl hover:scale-105 hover:backdrop-blur-none shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] xl:h-[650px] flex flex-col justify-center items-center xl:w-[340px] md:h-[600px] md:w-[380px] h-[450px] w-[300px] transition ease-in-out duration-300'>
        <div className='h-[10%] font-anton flex items-center justify-center text-2xl md:text-3xl text-[#54c8f9]'><p>Docs  </p></div>
        <div className='h-[27%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={docs} alt='Docs'/></div>
        <div className='h-[43%] text-sm text-center w-[90%] text-white '><p>In this project, I learned how to create a responsive website using Tailwind CSS. Tailwind's utility-first approach allowed me to design and style a website that adapts to various screen sizes seamlessly. By applying Tailwind's responsive design classes and customizing breakpoints, I ensured that the website provides an optimal viewing experience across different devices, from mobile phones to desktops. </p></div>
      </div>
      
      </div>
    </div>
  )
}

export default Project;
