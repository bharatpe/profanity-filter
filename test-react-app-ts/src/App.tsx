import logo from './logo.svg';
import './App.css';

import { useProfanicityFilter } from 'module-boilerplate';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const profanicity = useProfanicityFilter();

  useEffect(() => {
    (async () => console.log(await profanicity.isProfancityPresent('abbo'), await profanicity.isProfancityPresent('no-abbo')))();
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
