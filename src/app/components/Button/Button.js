import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  addPokemons,
  obtainPokemons,
  removePokemons,
} from "../../redux/actions";

function Button({ char, textButton, styleClass, text }) {
  const dispatch = useDispatch();
  const nextP = useSelector((state) => state.initialPokemons.pokemons.nextPage);
  const prevP = useSelector((state) => state.initialPokemons.pokemons.prevPage);

  const handleClick = () => {
    switch (textButton || text) {
      case "Previous":
        dispatch(obtainPokemons(prevP));
        break;
      case "Next":
        dispatch(obtainPokemons(nextP));
        break;
      case "Add":
        dispatch(addPokemons(char));
        break;
      case "Remove":
        dispatch(removePokemons(char));
        break;
      default:
        break;
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={styleClass}
    >
      {textButton ? textButton : text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  char: PropTypes.object.isRequired,
  styleClass: PropTypes.string,
};
