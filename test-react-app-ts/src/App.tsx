import logo from './logo.svg';
import './App.css';

import { useProfanityFilter } from 'profanity-filter';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const profanity = useProfanityFilter();

  useEffect(() => {
    (async () => console.log(await profanity.isProfanityPresent('abbo'), await profanity.isProfanityPresent('no-abbo')))();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setData(() => data + 1)}>{`Clicked: ${data} times`}</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
