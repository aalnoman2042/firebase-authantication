import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Resister from './Components/Resister/Resister';
import RegisterRBS from './Components/RegisterRBS/RegisterRBS';
import RegisterBS from './Components/RegisterBs/RegisterBS';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element: <Resister></Resister>
      },
      {
        path: "/register-rbs",
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path: "/register-bs",
        element: <RegisterBS></RegisterBS>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
