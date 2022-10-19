import { useEffect, useState } from "react";

import { useProfanityFilter } from "profanity-filter";

import Child from "./Child";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState(0);
  const { isProfanityPresent } = useProfanityFilter();

  useEffect(() => {
    (async () => {
      let present = await isProfanityPresent("abbo");
      console.log("abbo", present);
      present = await isProfanityPresent("no-abbo");
      console.log("no-abbo", present);
    })();
  }, [isProfanityPresent]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button
          onClick={() => setData(() => data + 1)}
        >{`Clicked: ${data} times`}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Child />
      </header>
    </div>
  );
}

export default App;
