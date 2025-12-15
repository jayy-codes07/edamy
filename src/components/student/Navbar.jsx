import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from './../../context/AppContext'



const Navbar = () => {
  const ispagecorselist = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {navigate ,isEducator} = useContext(AppContext)

  return (
    <>
      <div
        className={`p-4 flex items-center justify-between gap-3 border-b border-gray-500 sm:px-10 md:px-14  lg:px-36 ${
          ispagecorselist ? "bg-white" : "bg-cyan-100/70"
        }  `}
      >
        <img onClick={()=>{navigate('/')}}
          src={assets.logo}
          alt="logo"
          className="w-28 cursor-pointer lg:w-32"
        />
        <div className=" hidden  md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            {user && (
              <>
                <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator' }</button>|{" "}
                 <button onClick={()=>{navigate('/my-enrollment')}}>My Enrollment</button>
                
              </>
            )}
          </div>
          {user ? <UserButton /> : <button onClick={() => {
                openSignIn();
              }}
              className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-full">
              Create account
            </button>
          }
        </div>

        {/* {phone screen} */}


        <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
          <div className="sm:flex items-center sm:gap-2 max-sm:text-xs ">
            {user && (
              <>
               <button onClick={()=>{navigate('/educator')}}>{isEducator?'Educator Dashboard':'Become Educator' }</button>|{" "} {" "}
                <Link to="/my-enrollment"> My Enrollment</Link>
              </>
            )}
          </div>
          {user ? <UserButton /> :<button className=" cursor-pointer" onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="usericon" />
          </button>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
