import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import quotes from "./assets/Json/quotes.json";
import QuoteBox from "./component/QuoteBox";
import color from "./utils/color";
import ButtonQuote from "./component/ButtonQuote";

function App() {
  const getIndexRandom = (arr) => Math.floor(Math.random() * arr.length);
  const firstQuote = quotes[getIndexRandom(quotes)];
  const firstColor = color[getIndexRandom(color)];
  const [randomQuote, setRandomQuote] = useState(firstQuote);
  const [randomColor, setrandomColor] = useState(firstColor);

  const backgroundObjct = { backgroundColor: randomColor };
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]);
    setrandomColor(color[getIndexRandom(color)]);
  };

  return (
    <div style={backgroundObjct} className="App">
      <h1>hla</h1>
      <QuoteBox
        randomQuote={randomQuote}
        randomColor={randomColor}
        getRandomAll={getRandomAll}
      />
      {/* <ButtonQuote randomColor={randomColor} getRandomAll={getRandomll} /> */}
    </div>
  );
}

export default App;
