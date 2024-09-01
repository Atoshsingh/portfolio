import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
  alert("Still  Under Construction")
  return (
    <div>
      <div className=''>
      <Navbar />
      </div>
      <div className=''>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
