import React from "react";
import Button from "../Button/Button";
import cardFormater from "../../utils/formaters/cardFormater";
import { useSelector } from "react-redux";

const Card = ({ id, name, types, height, weight }) => {
  const pokemonsReduxState = useSelector(
    (state) => state.addOrRemovePokeFavs.pokemons
  );
  const isPokemonExist = pokemonsReduxState.some(
    (pokemon) => pokemon.id === id
  );
  const count = pokemonsReduxState.some((pokemon) => pokemon.cantPoke > 1);
  console.log(count);

  const typePokemon = types[0].type.name;

  const pokemonWeight = weight / 10;

  const heightPokemonMeters = height / 10;
  return (
    <div className="container">
      <div className={`card ${cardFormater(typePokemon)}`}>
        <div className="card-front">
          <div className="card-image">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              alt="Pokemon 1"
            />
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
                <span>Amount:</span> 1
              </p>
            </div>
            <Button
              isPokemonExist={isPokemonExist}
              text="Add"
              count={count}
              char={{ id: id, name: name, cantPoke: 1 }}
              styleClass={"Button"}
            />
            {isPokemonExist ? (
              <Button
                isPokemonExist={isPokemonExist}
                text="Remove"
                count={count}
                char={{ id: id, name: name }}
                styleClass={"Button"}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
