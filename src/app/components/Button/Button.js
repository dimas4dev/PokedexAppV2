import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { textButton, char, addPokemons, removePokemons } = props;

  return (
    <button
      onClick={() => {
        textButton === "Add" ? addPokemons(char) : removePokemons(char);
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
