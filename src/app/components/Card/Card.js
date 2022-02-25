import React from "react";
import Button from "../Button/Button";
import cardFormater from "../../utils/formaters/cardFormater";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Card = ({ id, name, types, height, weight, sprites, cantPoke }) => {
  const pokemonsReduxState = useSelector(
    (state) => state.addOrRemovePokeFavs.pokemons
  );

  const isPokemonExist = pokemonsReduxState.some(
    (pokemon) => pokemon.id === id
  );
  const count = pokemonsReduxState.some((pokemon) => pokemon.cantPoke > 1);

  const typePokemon = types[0].type.name;
  const pokemonImage = sprites.front_default;
  const pokemonWeight = weight / 10;
  const heightPokemonMeters = height / 10;

  return (
    <div className="container">
      <div className={`card ${cardFormater(typePokemon)}`}>
        <div className="card-front">
          <div className="card-image">
            <img src={pokemonImage} alt="Pokemon 1" />
          </div>
          <div className="card-body">
            <p className="card-name">{`${id}. ${name}`} </p>
          </div>
        </div>
        <div className="card-back">
          <div className="card-body">
            <p className="back-name">{`${id}. ${name}`} </p>
            <div className="back-info">
              <p className="back-text">
                <span>Height:</span> {heightPokemonMeters} m
              </p>
              <p className="back-text">
                <span>Weight:</span> {pokemonWeight} Kg
              </p>
              <p className="back-text">
                <span>Type:</span> {typePokemon}
              </p>
              <p className="back-text">
                <span>Amount: </span>
                {cantPoke}
              </p>
            </div>
            <Button
              isPokemonExist={isPokemonExist}
              text="Add"
              count={count}
              char={{
                id: id,
                name: name,
                types: types,
                height: height,
                weight: weight,
                sprites: sprites,
                cantPoke: 1,
              }}
              styleClass={"Button"}
            />
            {isPokemonExist ? (
              <Button
                isPokemonExist={isPokemonExist}
                text="Remove"
                count={count}
                char={{
                  id: id,
                  name: name,
                  types: types,
                  height: height,
                  weight: weight,
                  sprites: sprites,
                }}
                styleClass={"Button"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

// { id, name, types, height, weight, sprites, cantPoke }

export default Card;

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.array,
  height: PropTypes.number,
  weight: PropTypes.number,
  sprites: PropTypes.object,
  cantPoke: PropTypes.number,
};
