import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {

  const { currency, calculateRating } = useContext(AppContext);

  // 1. SAFETY CHECK: If course is null/undefined, don't render anything
  if (!course) return null;

  return (
    <Link 
      to={'/course/' + course._id} 
      onClick={() => window.scrollTo(0, 0)} // Fixed: added 'window.'
      className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg block cursor-pointer hover:shadow-lg transition-shadow'
    >
      <img 
        src={course.courseThumbnail} 
        alt="Thumbnail" 
        className='w-full h-40 object-cover' // Added h-40 object-cover to keep images same size
      />
      <div className='p-3 text-left'>
        <h2 className='text-base font-semibold truncate'>{course.courseTitle}</h2>
        
        {/* 2. OPTIONAL CHAINING (?.): Prevents crash if educator is missing */}
        <p className='text-gray-500'>{course.educator?.name}</p> 

        <div className='flex items-center space-x-2'>
          <p>{calculateRating ? calculateRating(course) : "4.5"}</p>
          <div className='flex'>
            {[...Array(5)].map((_, idx) => (
              <img 
                key={idx} 
                className='w-3 h-3' // Fixed: 'w-3.3' is invalid in default Tailwind, used 'w-3'
                src={idx < Math.floor(calculateRating ? calculateRating(course) : 0) ? assets.star : assets.star_blank} 
                alt="star"
              />
            ))}
          </div>
          {/* 3. SAFETY CHECK: Check if courseRatings exists before getting length */}
          <p className='text-gray-500'>({course.courseRatings?.length || 0})</p>
        </div>

        <p className='text-base font-semibold text-gray-800'>
          {currency}
          {(
             course.coursePrice - (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard