import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PLogo from "../../../assets/images/PokemonLogo.png";

const Header = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <header className="Header">
      <div className="Header-Container">
        <div className="Header-Logo">
          <Link to="/">
            <img src={PLogo} alt="Logo Pokemon" />
          </Link>
        </div>
        <ul className={click ? "Header-Menu active" : "Header-Menu"}>
          <li className="Header-Item">
            <NavLink to={"/"} className="Header-Links" onClick={handleClick}>
              Home
            </NavLink>
          </li>
          <li className="Header-Item">
            <NavLink
              to={"/store"}
              className="Header-Links"
              onClick={handleClick}
            >
              Store
            </NavLink>
          </li>
        </ul>
        <div className="Header-Icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
