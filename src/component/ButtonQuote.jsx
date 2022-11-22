import React from "react";

const ButtonQuote = ({ randomColor, getRandomAll }) => {
  const backgroundObj = { backgroundColor: randomColor };

  return (
    <button className="card__btn" style={backgroundObj} onClick={getRandomAll}>
      &#62;
    </button>
  );
};

export default ButtonQuote;
