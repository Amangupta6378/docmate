import React from "react";
import "../Css/Footer.css";
import { MdDeliveryDining } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { FaStarHalfAlt } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="features">
        <div className="delivery">
          <div className="icon">
            <MdDeliveryDining />
          </div>
          <div className="txt">Delivery</div>
        </div>
        <div className="delivery">
          <div className="icon">
            <RiSecurePaymentFill />
          </div>
          <div className="txt">Secure Payment</div>
        </div>
        <div className="delivery">
          <div className="icon">
            <TbTruckDelivery />
          </div>
          <div className="txt">Order Tracking</div>
        </div>
        <div className="delivery">
          <div className="icon">
            <MdOutlineMessage />
          </div>
          <div className="txt">Direct Messaging</div>
        </div>
        <div className="delivery">
          <div className="icon">
            <RiCommunityFill />
          </div>
          <div className="txt">Community Engagement</div>
        </div>
        <div className="delivery">
          <div className="icon">
            <FaStarHalfAlt />
          </div>
          <div className="txt ">Star Rating</div>
        </div>
      </div>
      <div className="contact">
        <div className="first">
          <ul>
            <h2 className="m-4">Top categories</h2>
            <li>
              <a href="">Embroidery</a>
            </li>
            <li>
              <a href="">Glass work</a>
            </li>
            <li>
              <a href="">Wood and stone work</a>
            </li>
            <li>
              <a href="">Metal crafts</a>
            </li>
            <li>
              <a href="">Pottery</a>
            </li>
            <li>
              <a href="">Weavingy</a>
            </li>
            <li>
              <a href="">Baskets</a>
            </li>
            <li>
              <a href="">Home decors</a>
            </li>
          </ul>
        </div>
        <div className="first">
          <ul>
            <h2 className="m-4">About Us</h2>
            <li>
              <a href="">About US</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Wood and stone work</a>
            </li>
            <li>
              <a href="">Metal crafts</a>
            </li>
            <li>
              <a href="">Pottery</a>
            </li>
            <li>
              <a href="">Weavingy</a>
            </li>
            <li>
              <a href="">Baskets</a>
            </li>
            <li>
              <a href="">Home decors</a>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <h2 className="m-4">About Store</h2>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
        <div className="second">
          <ul>
            <h2 className="m-4">About Store</h2>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Reviews</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="foot">@The Maker's Market</div>
    </div>
  );
}

export default Footer;
