import React from "react";
import { Link } from "react-router-dom";
import PLogo from "../../../assets/images/PokemonLogo.png";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Container">
        <div className="Header-Logo">
          <Link to="/">
            <img src={PLogo} alt="Logo Pokemon" />
          </Link>
        </div>
        <ul className="Header-Menu">
          <li className="Header-Item">
            <Link to={"/"} className="Header-Links">
              Home
            </Link>
          </li>
          <li className="Header-Item">
            <Link to={"/store"} className="Header-Links">
              Store
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
