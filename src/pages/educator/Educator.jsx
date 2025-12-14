import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/educator/Sidebar'
import Footer from '../../components/educator/Footer'
import Navbar from '../../components/educator/Navbar'


const Educator = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
       <Sidebar/>
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Educator