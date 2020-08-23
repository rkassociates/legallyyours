import React from 'react';
import logo from './logo.svg';
import './App.css';
import GMap from './component/GoogleMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is getting developed (Initially) as static. For a legal farm.
        </p>
        <a
          className="App-link"
          href="https://www.sci.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
        SUPREME COURT OF INDIA
        </a>
      </header>
      <GMap isMarkerShown/>
    </div>
  );
}

export default App;
