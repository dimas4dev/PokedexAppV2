import React from "react";
import Button from "../Button/Button";
// import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import { addPokemons, removePokemons } from "../../redux/actions";

// Card.propTypes = { id: PropTypes.number, name: PropTypes.string };

const mapStateToProps = (state) => {
  return {
    pokemons: state.addOrRemovePokeFavs.pokemons,
  };
};

const Card = ({ id, name, pokemons, addPokemons, removePokemons }) => {
  const isSome = pokemons.some((pokemon) => pokemon.id === id);

  return (
    <div className="container">
      <div className="card">
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
              textButton={isSome ? "Remove" : "Add"}
              char={{ id: id, name: name }}
              addPokemons={addPokemons}
              removePokemons={removePokemons}
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
              textButton={isSome ? "Remove" : "Add"}
              char={{ id: id, name: name }}
              addPokemons={addPokemons}
              removePokemons={removePokemons}
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, { addPokemons, removePokemons })(Card);
