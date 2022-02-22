import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addPokemons, removePokemons } from "../../redux/actions";

function Button(props) {
  const { isPokemonExist, char } = props;

  const textButton = isPokemonExist ? "Remove" : "Add";

  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        !isPokemonExist
          ? dispatch(addPokemons(char))
          : dispatch(removePokemons(char));
      }}
      className="Button"
    >
      {textButton}
    </button>
  );
}

export default Button;

Button.propTypes = {
  textButton: PropTypes.string,
};
