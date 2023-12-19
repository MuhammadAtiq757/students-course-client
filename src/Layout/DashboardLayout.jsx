import React from 'react';
import { FaBookReader, FaHome, FaBookOpen, FaAddressBook, FaColumns,FaUserFriends  } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import AdminHook from '../Pages/Hooks/AdminHook';
import Instructor from '../Pages/Instructors/Instructor';
import InstructorHook from '../Pages/Hooks/InstructorHook';

// import { IconName } from "react-icons/fc";

const DashboardLayout = () => {
  // const isAdmin = true;
  // const isInstructor = false;
const [isAdmin] = AdminHook()
console.log(isAdmin)
const [isInstructor] = InstructorHook()


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}


          {
            isInstructor ? (
            <>
              <li>
              <li> <Link> <FaHome></FaHome> Admin Home </Link> </li>

                <Link to='/dashboardlayout/addclasses'> <FaAddressBook></FaAddressBook> Add Courses</Link>
                <Link to='/dashboardlayout/myclass'> <FaBookReader></FaBookReader> Added Courses</Link>
              <Link to='/dashboardlayout/allusers'> <FaUserFriends></FaUserFriends>  Students</Link></li>

              
            </>
            ) : (
              <>
                <li> <Link> <FaHome></FaHome> Student Home </Link> </li>

              <li><Link to='/dashboardlayout/selectedClass'><FaBookReader></FaBookReader> Selected Classes </Link> </li>
              
              </>
            )
          }
          <div className='divider'></div>
          <li><Link to='/'><FaHome></FaHome>   Home</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default DashboardLayout;