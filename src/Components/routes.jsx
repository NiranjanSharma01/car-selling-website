import { Routes, Route, HashRouter } from "react-router-dom";
 import React, { useState } from 'react'
import Home from "../Screens/Home";
import Navbar from "./Navbar";
import Services from "../Screens/Services";
import Compare from "../Screens/Compare";
import Contact from "../Screens/Contact";
import New from "../Screens/Shop";
import Newsingle from "../Screens/Shopsingle";
import Blog from "../Screens/Blog";
import Sellcar from "../Screens/Sellcar";
import Login from "../Screens/Login/Login";
import Error from "../../src/Screens/Error"
import Footer from "./Footer";
import { Query } from "../Screens/query";
import Search from "../Screens/SearchReasult";
 
 export const Rout = () => {
  const[touch,setTouch]=useState(true);
   return (
     <div onClick={()=> touch === false && setTouch(true)}>
         <HashRouter>
        <Navbar touch={touch} setTouch={setTouch} />
         <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/service" element={<Services/>} />
         <Route path="/compare" element={<Compare/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/new" element={<New/>} />
         <Route path="/newsingle" element={<Newsingle/>} />
         <Route path="/blog" element={<Blog/>} />
         <Route path="/error" element={<Error/>} />
         <Route path="/sellcar" element={<Sellcar/>} />
         <Route path="/login" element={<Login />} />
         <Route path="/Query/:id" element={<Query />} />
         <Route path="/search" element={<Search />} />

         </Routes>
         <Footer/>
         </HashRouter>
     </div>
   )
 }
 