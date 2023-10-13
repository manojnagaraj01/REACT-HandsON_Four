import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Student from "./Student";
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import DynamicCompo from "./DynamicCompo";
import "./Handson4.css"

function RouteCompo(){
    return(
        <>
            {/* <h1> This is RouteCompo   </h1> */}
            <BrowserRouter>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/student">  Students  </Link></li>
                <li><Link to="/contact">  Contact US</Link></li>
            </ul>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/student" element={<Student/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/student/:id" element={<DynamicCompo/>}/>  
                </Routes>
            </BrowserRouter>
        </>
    )
}
//<Route path="/student/:id" element={<DynamicCompo/>}/> instead id you can use any another also like :user, :name etc
export default RouteCompo;