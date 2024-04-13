import { createBrowserRouter } from "react-router-dom";
import Landing from "../Page/Landing";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import Profile from "../Page/Profile";

export let route = createBrowserRouter([
     {
          path: '/',
          element: <Landing />,
     },
     {
          path: '/login',
          element: <Login />
     },
     {
          path: '/signup',
          element: <Signup />
     },
     {
          path: '/profile',
          element: <Profile />
     }         
])