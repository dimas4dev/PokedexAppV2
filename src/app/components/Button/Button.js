import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

function Button(props) {
  const { textButton, char, addPokemons, removePokemons } = props;
  console.log(addPokemons);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        textButton === "Add"
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
