
import {
    createBrowserRouter,
} from "react-router-dom";

import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignIn/SignUp";






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
           
            ]
            
        }


    ]);