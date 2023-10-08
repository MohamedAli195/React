
// import './App.css';
// import { Component } from 'react';
// import Parent from './Components/Parent';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Artist from "./Components/Artist/Artist";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Gallery/Gallery";
import { Notfound } from "./Components/Notfound/Notfound";

const routes= createBrowserRouter([{
  path:"",element:<Layout />,children:[
    {path:"About",element:<About />},
    {index:true,element:<Home />},
    {path:"Artist",element:<Artist />},
    {path:"Testimonials",element:<Testimonials />},
    {path:"Contact",element:<Contact />},
    {path:"Gallery",element:<Gallery/>},
    {path:"*",element:<Notfound/>}
  ]
}])

function App () {
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
