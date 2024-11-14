import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Nav = () => {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="#">
          توظيف
        </Link>
          <div className="kl"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">
                صفحة الرئسية
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/about">
                 حول الوظيفة
              </Link>
            </li>
            
            <li class="nav-item active">
              <Link class="nav-link" to="/server">
              خدمات
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/countactus">
              التواصل
              </Link>
            </li>
            
            
            
            
           
          </ul>
          <form class="d-flex" role="search">
            <div className="no">

                 {/* <img src="/imgss/WhatsApp Image 2024-05-30 at 7.11.09 AM.jpeg" alt="" /> */}
                {/* <p>Amir Salama</p> */}
            </div>
      </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
