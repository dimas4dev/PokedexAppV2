import React from "react";
import Button from "../Button/Button";
// import PropTypes from "prop-types";
import _ from "lodash";
import { useSelector } from "react-redux";
import { addPokemons, removePokemons } from "../../redux/actions";

// Card.propTypes = { id: PropTypes.number, name: PropTypes.string };

const Card = ({ id, name }) => {
  const pokemonsReduxState = useSelector(
    (state) => state.addOrRemovePokeFavs.pokemons
  );

  const isSome = pokemonsReduxState.some((pokemon) => pokemon.id === id);

  return (
    <article className="card">
      <div className="card-image">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="Pokemon 1"
        />
      </div>
      <div className="card-body">
        <h5>{`${id}. ${name}`} </h5>
        <Button
          textButton={isSome ? "Remove" : "Add"}
          char={{ id: id, name: name }}
          addPokemons={addPokemons}
          removePokemons={removePokemons}
          className="btn btn-primary"
        />
      </div>
    </article>
  );
};

export default Card;
