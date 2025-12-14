import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

   const navigate =useNavigate()
  const [input, setinput] = useState(data?data:"")
  
  const onsubmithandler =(e)=>{
    e.preventDefault()
    navigate("/course-list/" + input)
  }

  return (
    <div>
     <form  onSubmit={onsubmithandler} action="submit" className='max-w-xl w-full md:h-14 h-12  flex items-center justify-between bg-white border rounded border-gray-500/20'>
     <div className="flex gap-5 font-bold text-gray-700">
       <img src={assets.search_icon} alt="searchIcon" className='md:w-auto w-10 px-3' />
      <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Search For Courses' className='w-full h-full outline-none text-gray-500/80'/>
     </div>
      <button className='bg-blue-600 cursor-pointer text-white  rounded md:px-10 px-7 md:py-3 py-2 mx-1' type='submit'>search</button>
     </form>
    </div>
  )
}

export default SearchBar