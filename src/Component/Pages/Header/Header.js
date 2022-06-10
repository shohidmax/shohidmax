import React from "react";
import './Header.css';
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="col-md-12 sticky-top">
    <nav class="navbar navbar-expand-lg bg-light  ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Sarwar jahan</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/about" class="nav-link active buttonc" aria-current="page" href="#">About Me</Link>
        </li>
        <li class="nav-item">
          <a  class="nav-link active buttonc" aria-current="page" href="../home/#serve1">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active buttonc" aria-current="page" href="home/#proj">Project</a>
        </li>
        <li class="nav-item">
          <Link to="" class="nav-link active buttonc" aria-current="page" href="#">Blogs</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active buttonc" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active btn-primary" target="_blank" rel="noopener noreferrer"  href="https://drive.google.com/file/d/1FqjbQ6O_09NsRIca4h_bdyzcI1nZJiX9/view">DOWNLOAD RESUME</a>
        </li>
        
          
        </ul>
    </div>
  </div>
</nav>


    </div>
  );
};

export default Header;
