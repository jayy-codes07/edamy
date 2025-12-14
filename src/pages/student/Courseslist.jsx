import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Removed unused imports
import SearchBar from '../../components/student/SearchBar';
import { AppContext } from '../../context/AppContext';
import Footer from '../../components/student/Footer';
import CourceCard from '../../components/student/CourceCard';

const CoursesList = () => {
  const { allCourses } = useContext(AppContext); // specific 'navigate' not needed here if we use Link
  const { input } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);


  useEffect(() => {
    // Ensure allcourses exists before processing
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      if (input) {
        setFilteredCourses(
          tempCourses.filter((item) =>
            item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        );
      } else {
        setFilteredCourses(tempCourses);
      }
    }
  }, [allCourses, input]);

  return (
    <>
      <div className="relative md:px-36 px-8 pt-20 text-left">
        {/* Header Section */}
        <div className="flex md:flex-row flex-col gap-6 w-full justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">Course List</h1>
            <p className="text-gray-500 mt-1">
              <Link
                to="/"
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Home
              </Link>{' '}
              / Course List
            </p>
          </div>
          
          {/* Passed input to SearchBar so it shows the current search term */}
          <SearchBar data={input} />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-0 md:my-16 my-10 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <CourceCard key={idx} course={course} />
            ))
          ) : (
             <div className="col-span-full text-center text-gray-500 mt-10">
               <p>No courses found matching "{input}".</p>
             </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursesList;