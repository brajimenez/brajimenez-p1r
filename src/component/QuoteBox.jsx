import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ButtonQuote from "./ButtonQuote";

const QuoteBox = ({ randomQuote, randomColor, getRandomAll }) => {
  const colorObject = { color: randomColor };

  return (
    <article style={colorObject} className="card">
      <div className="card__p">
        <FontAwesomeIcon className="card__icon" icon={faQuoteLeft} />
        <p className="card__quote">{randomQuote.quote}</p>
      </div>
      <cite className="card__author">{randomQuote.author}</cite>

      <ButtonQuote
        className="card__btn"
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
    </article>
  );
};

export default QuoteBox;
