
import "./App.css";
import Navbar from "./components/student/Navbar";
import Hero from "./components/student/Hero";
import { BrowserRouter as Router, Routes, Route, useMatch } from "react-router-dom";
import Home from "./pages/student/Home";
import Courseslist from "./pages/student/Courseslist";
import CourseDetails from "./pages/student/CourseDetails";
// import MyEnrollment from "./pages/student/MyEnrollment";
import Player from "./pages/student/Player";
import Loding from "./components/student/Loding";
import Educator from "./pages/educator/Educator";
import Dashboard from "./pages/educator/Dashboard";
import AddCourses from "./pages/educator/AddCourses";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentsEnrolled";
import Footer from "./components/student/Footer";
import MyEnrollment from "./pages/student/MyEnrollment";


function App() {
const isEducator = useMatch('/Educator/*')

  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducator && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course-list" element={<Courseslist />} />
        <Route path="/Course-list/:input" element={<Courseslist />} />
        <Route path="/Course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollment" element={<MyEnrollment />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loding/:path" element={<Loding />} />
        <Route path="/educator" element={<Educator />}>
          <Route path="educator" element={<Dashboard />} />
          <Route path="add-Courses" element={<AddCourses />} />
          <Route path="my-Courses" element={<MyCourses />} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
