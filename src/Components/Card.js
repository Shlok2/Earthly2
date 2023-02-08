import React from "react";
import "./style.css";

const CardSection = ({ thumbnail, amount, title }) => {
  return (
    <>
      <div className="card">
        <img src={thumbnail} alt="product_image" />
        <div className="bottom">
          <h3 className="title">{title}</h3>
          {/* &8364; -> html code for Euro symbol. */}
          <p className="amount">&#8364; {amount}</p>
          <button className="add_to_cart">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default CardSection;
