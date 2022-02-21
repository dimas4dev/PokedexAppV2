import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ErrorImg from "../../../assets/images/Error.png";

export default function Error404() {
  return (
    <>
      <Header />
      <section className="error">
        <div className="error-container">
          <img className="error-image" src={ErrorImg} alt="error Pokemon" />
          <div className="error-info">
            <h1 className="error-heading">404 ERROR</h1>
            <p className="error-warning">We couldn`t access to the Pokedex</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
