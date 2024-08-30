import React from 'react'
import mainPage from "../assets/svg/mainPage1.svg"
const MainHome = () => {
  return (
    <div  className='absolute gred md:top-[64px] w-full md:h-[calc(100vh-64px)] top-0 h-screen z-0  overflow-y-hidden-hidden'>
     <div className='flex justify-center items-center text-white h-full flex-wrap'>
        <div className='flex-1 flex justify-center items-center h-[100%] px-30'>
          {/* greeting*/}
          <div>
          <p className='text-4xl relative left-[15px]'>Nice to Meet!</p><br/>
          <p className='text-4xl '>I Am <span className='text-[#5dccfc] font-bold'> Aashutosh Singh</span></p>
          </div>
  
          {/* Name  */}
        </div>
        <div className='flex-1 flex justify-center items-center h-full px-30'>
          <img className='size-96 min-w-96 min-h-96 p-5' src={mainPage}/>
          {/* <h1>bfdjkshdkjfsodkfosdkfkds</h1> */}
        </div>
     </div>
    </div>
  )
}

export default MainHome