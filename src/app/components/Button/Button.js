import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import {
  addPokemons,
  obtainPokemons,
  removePokemons,
} from "../../redux/actions";

function Button(props) {
  const { isPokemonExist, char, textButton, styleClass } = props;

  const textButtonCard = isPokemonExist ? "Remove" : "Add";

  const nextP = useSelector((state) => state.initialPokemons.pokemons.nextPage);
  const prevP = useSelector((state) => state.initialPokemons.pokemons.prevPage);

  const dispatch = useDispatch();

  const handleClick = () => {
    switch (textButton || textButtonCard) {
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
      {textButton ? textButton : textButtonCard}
    </button>
  );
}

export default Button;

Button.propTypes = {
  textButton: PropTypes.string,
};
