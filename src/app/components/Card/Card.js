import React from "react";
import Button from "../Button/Button";
// import PropTypes from "prop-types";
import _ from "lodash";
import cardFormater from "../../utils/formaters/cardFormater";
import { useSelector } from "react-redux";
// Card.propTypes = { id: PropTypes.number, name: PropTypes.string };

const Card = ({ id, name }) => {
  const pokemonsReduxState = useSelector(
    (state) => state.addOrRemovePokeFavs.pokemons
  );

  const isPokemonExist = pokemonsReduxState.some(
    (pokemon) => pokemon.id === id
  );

  return (
    <div className="container">
      <div className={`card ${cardFormater()}`}>
        <div className="card-front">
          <div className="card-image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="Pokemon 1"
            />
          </div>
          <div className="card-body">
            <p className="card-name">{`${id}. ${name}`} </p>
            <Button
              isPokemonExist={isPokemonExist}
              char={{ id: id, name: name }}
              className="btn btn-primary"
            />
          </div>
        </div>
        <div className="card-back">
          <div className="card-body">
            <p className="back-name">{`${id}. ${name}`} </p>
            <div className="back-info">
              <p className="back-text">
                <span>Height:</span> 2'04''
              </p>
              <p className="back-text">
                <span>Weight:</span> 15.2lbs
              </p>
              <p className="back-text">
                <span>Type:</span> Bug
              </p>
              <p className="back-text">
                <span>Amount:</span> 1
              </p>
            </div>
            <Button
              isPokemonExist={isPokemonExist}
              char={{ id: id, name: name }}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
