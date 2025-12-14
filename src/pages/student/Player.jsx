import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";
import Loading from "../../components/student/Loding";

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();

  const [courseData, setCourse] = useState(null);
  const [openSections, setOpenSections] = useState({});
  const [playerData, setPlayerData] = useState(null);

  console.log("1. Course ID from URL:", courseId);
  console.log("2. Enrolled Courses List:", enrolledCourses);

  // 1. Load Course Data
  useEffect(() => {
    const findCourse = enrolledCourses.find((course) => course._id === courseId);
    setCourse(findCourse);
  }, [courseId, enrolledCourses]);

  // 2. Auto-load the first lecture by default when courseData is ready
  useEffect(() => {
    if (courseData && courseData.courseContent.length > 0 && !playerData) {
      const firstChapter = courseData.courseContent[0];
      if (firstChapter.chapterContent.length > 0) {
        const firstLecture = firstChapter.chapterContent[0];
        
        // Open the first chapter in the accordion
        setOpenSections({ [firstChapter.chapterId]: true });
        
        // Set the video
        setPlayerData({
          videoId: firstLecture.lectureUrl.split("/").pop(),
          chapter: 1,
          lecture: 1,
          lectureTitle: firstLecture.lectureTitle,
        });
      }
    }
  }, [courseData]);

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Helper to extract Video ID safely
  const getVideoId = (url) => {
    if (!url) return "";
    return url.split("/").pop(); // Works for https://youtu.be/ID format
  };

  if (!courseData) return <Loading />;

  return (
    <>
      
      <div className="p-4 sm:p-10 flex flex-col-reverse md:flex-row gap-10 min-h-screen bg-gradient-to-b from-cyan-100/70">
        
   
        <div className="md:w-1/2 w-full max-w-3xl">
          <h2 className="text-xl font-bold mb-4">Course Structure</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {courseData.courseContent.map((chapter, index) => (
              <div key={index} className="border-b last:border-0 border-gray-200">
                {/* Chapter Header */}
                <div
                  className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className={`w-3 transform transition-transform ${
                        openSections[index] ? "rotate-180" : ""
                      }`}
                      src={assets.down_arrow_icon}
                      alt="Toggle"
                    />
                    <span className="font-medium text-gray-800">
                      {chapter.chapterTitle}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {chapter.chapterContent.length} lectures •{" "}
                    {calculateChapterTime(chapter)}
                  </span>
                </div>

                {/* Lecture List (Accordion Body) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections[index] ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <ul className="bg-white px-4 pb-4">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-2 text-gray-600 hover:text-blue-600 cursor-pointer"
                        onClick={() =>
                          setPlayerData({
                            videoId: getVideoId(lecture.lectureUrl),
                            chapter: index + 1,
                            lecture: i + 1,
                            lectureTitle: lecture.lectureTitle,
                          })
                        }
                      >
                        <img
                          src={
                            playerData?.videoId === getVideoId(lecture.lectureUrl)
                              ? assets.blue_play_icon // Assuming you have a blue/active icon, else use standard
                              : assets.play_icon
                          }
                          alt="Play"
                          className="w-4 mt-1"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">
                            {lecture.lectureTitle}
                          </span>
                          <span className="text-xs text-gray-400">
                            {humanizeDuration(
                              lecture.lectureDuration * 60 * 1000,
                              { units: ["h", "m"] }
                            )}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Section */}
          <div className="mt-8">
            <h1 className="text-xl font-bold mb-2">Rate this Course:</h1>
            <Rating initialRating={0} onRate={(rate) => console.log(rate)} />
          </div>
        </div>

        {/* --- RIGHT COLUMN: Video Player --- */}
        <div className="md:w-1/2 w-full">
          <div className="sticky top-4">
             {/* Player Container */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video shadow-lg">
              {playerData ? (
                <YouTube
                  videoId={playerData.videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                  className="w-full h-full" // This applies to the container div of iframe
                  iframeClassName="w-full h-full" // This applies to the iframe itself
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <img 
                    src={courseData.courseThumbnail} 
                    alt="Cover" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-black/50 px-4 py-2 rounded">Select a lecture to start</span>
                  </div>
                </div>
              )}
            </div>

            {/* Video Info / Controls */}
            {playerData && (
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                  </h2>
                </div>
                <button 
                  className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition"
                  onClick={()=>alert("Marked as complete!")}
                >
                  Mark as Completed
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;