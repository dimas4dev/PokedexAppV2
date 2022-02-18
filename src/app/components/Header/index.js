import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../../../assets/images/Pokeball.png";

import AppRoutes from "../../AppRoutes";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Logo">
        <img src={Pokeball} />
        <h1>Pokedex</h1>
      </div>
      <div className="Header-Routes">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/store"}>My Pokedex</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
