import React from "react";
import "../Css/Data.css";

const Data = (props) => {
  return (
    <div className="main">
      <div className="card">
        <img width="100%" height="300px" src={props.aman.image}></img>
        <h2 className="heading">{props.aman.name}</h2>
        <p className="intro">{props.aman.intro}</p>
        <div className="price-rating">
          <span className="price">{props.aman.price}</span>
          {/* <span className="rating">{props.aman.ratin}</span> */}
        </div>

        <button className="button1">Add To Cart</button>
      </div>
    </div>
  );
};

export default Data;
