
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Toastcontent from "../../Element/Toastcontent";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Myprotfolio from "../Myprotfolio/Myprotfolio";
import Progresslevel from "../Progresslevel/Progresslevel";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Mepart1 from "./Mepart1";

const Home = () => {
  const cli = () =>{
    return <Toastcontent/>;

  }
  
    return (
      <>
       <div className="container">
         <div className="row p-2 m-2">
           <div className="col-md-6  mt-2 pt-4 mb-2 justify-content-center">
              <h1>I am Sarwar Jahan </h1>
              <h4>Full stack Web Developer & Designer </h4>
              <p className="">I am a student of marketing at Rajshahi College, Rajshahi. I am Web Developer and Expert With React js , HTML, CSS, JavaScript, React Js, Bootstrap, Tailwind, Firebase, MongoDB, etc. I am also a business Developer as a Super Market manager with a Project Manager.</p>

              <a className="btn btn-info mt-2 rounded" href="https://www.fiverr.com/shohid_ro"> Contact Me</a> 
           </div>
           <div className="col-md-6 ">
                <img  className="img-fluid m-2 w-50 ms-5 mx-auto rounded" src="https://i.ibb.co/2sT4vMw/119883450-2582251711995445-3103029751411193994-n.jpg" alt="" />
           </div>
         </div>

       </div>
       <Projects></Projects>
      <Service></Service>
      <Progresslevel></Progresslevel>
      <Contact></Contact>
      <Footer></Footer>
     {/* <Myprotfolio></Myprotfolio> */}

     </>  

  );
};

export default Home;
