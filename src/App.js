import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/cars">Cars</Link>
        </li>
      </ul>
      <Routes />
    </div>
  );
}

export default App;
