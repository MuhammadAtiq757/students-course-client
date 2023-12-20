
import {
    createBrowserRouter,
} from "react-router-dom";

import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminClasses from "../Pages/Dashboard/Admin/AdminClasses";
import Allusers from "../Pages/Dashboard/Admin/Allusers";
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import AddClasses from "../Pages/InstructorHome/AddClasses";
import MyClass from "../Pages/InstructorHome/MyClass";
import Classes from "../Pages/Classes/Classes";






export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                   element: <Home></Home>
                },
              
                {
                    path: '/login',
                    element: <Login></Login>
                 },
                 {
                    path: '/signup',
                    element:<SignUp></SignUp> 
                 },

                 {
                    path: '/classes',
                    element: <Classes></Classes>
                 },
              
           
            ]
            
        },

        {
            path: 'dashboardlayout',
            element: <DashboardLayout></DashboardLayout>,
            children: [
               {
                  path: 'allclasses',
                  element: <AdminClasses></AdminClasses>
               },
               {
                  path: 'allusers',
                  element: <Allusers></Allusers>
               },
      
               {
                 path: 'addclasses',
                 element: <AddClasses></AddClasses>
      
               },
               {
                 path: 'myclass',
                 element: <MyClass></MyClass>
      
               },
               {
                 path: 'selectedClass',
                 element:<SelectedClass></SelectedClass>
      
               },
               
            ]
         }
      


    ]);
