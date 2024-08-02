import React from "react";
import auth from '../component/Auth'
import { Route, Routes } from "react-router-dom";
import "../Css/Navbar.css";
import { Link } from "react-router-dom";
function Header() {
  return (

    
    <div>
      <Routes>
        <Route path="/" Component={auth} />
      </Routes>

      <div className="container-fluid">
        <input type="text" placeholder="Search here" />
        <div className="button2">
          <button className="button5"><Link to="/">SignIn</Link></button>
          <button className="button5">LogIn</button>
        </div>
      </div>

      {/* navigation */}
      <div className="navigation">
        <nav className="navigate">
          <ul>
            <li>
              <a href="#">Embroidery</a>
            </li>
            <li>
              <a href="#">Glass work</a>
            </li>
            <li>
              <a href="">Wood and stone work</a>
            </li>
            <li>
              <a href="">Metal Crafts</a>
            </li>
            <li>
              <a href="">Pottery</a>
            </li>
            <li>
              <a href="">Weaving</a>
            </li>
            <li>
              <a href="">Baskets</a>
            </li>
          </ul>
        </nav>
      </div>

      {/*hero section */}

      {/* <div className="hero">
        <img className="images" src="" alt="" />

        <img
          className="frontimg"
          src="https://www.decornt.com/uploads/product/2022/large/589881704975438.jpeg"
          height={500}
          alt=""
        />
      </div>
      <h2>The Maker's Market</h2>
      <p>Navigating the World of Handcrafted Treasures</p> */}

      <div className="hero">
        <div className="text">
          <h2>The Maker's Market</h2>
          <p>Navigating the World of Handcrafted Treasures</p>
        </div>
        {/* <div className="image"><img src="https://www.decornt.com/uploads/product/2022/large/589881704975438.jpeg" height={500} alt="" /></div> */}
      </div>
    </div>
  );
}

export default Header;
