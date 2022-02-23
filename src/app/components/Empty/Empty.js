import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../../../assets/images/Error.png";

export default function Empty() {
  return (
    <>
      <div className="empty">
        <div className="empty-container">
          <img className="empty-image" src={ErrorImg} alt="error Pokemon" />
          <div className="empty-info">
            <h1 className="empty-heading">CART IS EMPTY</h1>
            <p className="empty-warning">You need to add a Pokemon</p>
            <Link to={"/"} className="home-btn">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
