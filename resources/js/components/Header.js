import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-inverse " style={{"background-color": "black",marginBottom:2}}>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenuMobile" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">
  <img src="http://localhost:8000/img/logo.png" className="w-75" />
  </a>

  <div class="collapse navbar-collapse" id="navbarMenuMobile">
    <ul class="navbar-nav mr-auto mt-20 mt-lg-0">
      <li class="nav-item active">
       <Link class="nav-link" to = "/Home"> Home </Link>
      
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ours Fleet</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Book Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
     
    </ul>
    </div>
    </nav>

)

export default Header