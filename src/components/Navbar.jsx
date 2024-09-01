
import React,{ useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Navbar=()=>{
  let [open,setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-30 md:h-16 md:flex md:justify-end md:items-center bg-white'>
      <div className='md:flex items-center justify-end'>
        <div onClick={() => setOpen(!open)} className='absolute right-0 top-2 cursor-pointer md:hidden w-10 h-7 text-[#6e80ed]'>
          {
            open ? <IoClose size={30}/> : <MdMenu size={30}/>
          }
        </div>
        <ul className={` backdrop-blur-md md:flex justify-center items-center md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-0' : 'top-[-490px]'}`}>
          <li className='md:ml-8 md:my-0 my-7 font-semibold flex flex-col justify-center items-center '>
            <NavLink onClick={()=>setOpen(!open)} to='/' className={({ isActive }) => `text-[#6e80ed] h-10 w-32 flex justify-center items-center hover:shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] font-bold rounded-xl ${isActive ? 'shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)]' : ''}`}>Home</NavLink>
          </li>
          <li className='md:ml-8 md:my-0 my-7 font-semibold flex flex-col justify-center items-center'>
            <NavLink onClick={()=>setOpen(!open)} to='/about' className={({ isActive }) => `text-[#6e80ed] h-10 w-32 flex justify-center items-center hover:shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] font-bold rounded-xl ${isActive ? ' shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)]' : ''}`}>About</NavLink>
          </li>
          <li className='md:ml-8 md:my-0 my-7 font-semibold flex flex-col justify-center items-center'>
            <NavLink onClick={()=>setOpen(!open)} to='/project'className={({ isActive }) => `text-[#6e80ed] h-10 w-32 flex justify-center items-center hover:shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] font-bold rounded-xl ${isActive ? ' shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)]' : ''}`}>Project</NavLink>
          </li>
          <li className='md:ml-8 md:my-0 my-7 font-semibold flex flex-col justify-center items-center'>
            <NavLink onClick={()=>setOpen(!open)} to='/resume' className={({ isActive }) => `text-[#6e80ed] h-10 w-32 flex justify-center items-center hover:shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] font-bold rounded-xl ${isActive ? ' shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)]' : ''}`}>Resume</NavLink>
          </li>
          <li className='md:ml-8 md:my-0 my-7 font-semibold flex flex-col justify-center items-center'>
            <NavLink onClick={()=>setOpen(!open)} to='/experience' className={({ isActive }) => `text-[#6e80ed] h-10 w-32 flex justify-center items-center hover:shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)] font-bold rounded-xl ${isActive ? ' shadow-[0_7px_13px_1px_rgba(0,0,0,0.3)]' : ''}`}>Experience</NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;