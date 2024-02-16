import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import Register from './pages/register/Register';

import './style.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from './components/navbar/Navbar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';
import { AuthContext } from './context/AuthContext';

function App() {
  //fetching darkMode from context using useContext Hook and we should pass the context we are using in it.
  const {darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div style={{display:"flex"}}>
          <LeftBar />
          <div style={{flex:6}}>
            {/* all our other routes will be replaced by this outlet [it is a placeholder for other routes] */}
           <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  };

  //here layout is passed as the argument to ProtectedRoute,
  //If there is no user it redirects to login page, else it moves to Home[layout] Page
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    };

    return children;
  }

  //***By using the element we are trying to determine the component that we want to render on the dom. 

  //You must provide a non-empty routes array to createRouter and we are passing them.
  /*
  Why do we use CreateBrowserRouter?
  This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack. It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
  */
  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <ProtectedRoute> <Layout /> </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
  ])
  
  return (
    <>
      {/* The way we are going to use the above router is by calling the router provider, and inside we are gonna pass the router */}
      <RouterProvider router = {router} />
    </>
  )
}

export default App
