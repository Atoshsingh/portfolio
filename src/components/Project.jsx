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
      <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-32 h-[3600px] md:h-[1700px]'>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Repair Pro </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={repairPro} alt='repairPro'/></div>
        <div className='h-[40%] '><p>Repair pro content </p></div>
      </div>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Connect Sphere </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={connetSphere} alt='connectSphere'/> 2</div>
        <div className='h-[40%]'><p>An Dynamic Socail Media app 3 </p></div>
      </div>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Workout Manager  </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={workOut} alt='workoutManager'/></div>
        <div className='h-[40%] '><p>Workout Manager </p></div>
      </div>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Dynamic Spotify Clone  </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={spotify} alt='workoutManager'/></div>
        <div className='h-[40%] '><p>Spotify Clone </p></div>
      </div>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Eccomerns speling ckeck  </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={shopNest} alt='shopNest'/></div>
        <div className='h-[40%] '><p>ShopNest </p></div>
      </div>
      <div className='bg-gray-200 hover:bg-gray-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>Docs  </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={docs} alt='Docs'/></div>
        <div className='h-[40%] '><p>Docs </p></div>
      </div>
      {/* <div className='bg-g2ay hover:bg-gray-300-300 rounded-3xl hover:scale-110 shadow-2xl xl:h-[800px] xl:w-[420px] md:h-[600px] md:w-[380px] h-[400px] w-[270px] transition ease-in-out duration-300'>
        <div className='h-[10%]'><p>TODO  </p></div>
        <div className='h-[50%] flex justify-center items-center px-4 '><img className='rounded-xl ' src={todo} alt='todo'/></div>
        <div className='h-[40%] '><p>Todo </p></div>
      </div> */}
      </div>
    </div>
  )
}

export default Project;
