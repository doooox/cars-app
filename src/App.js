import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/cars" className='link'>Cars</Link>
            </li>
            <li>
              <Link to="/add" className='link'>Add new car</Link>
            </li>
          </ul>
          <Routes />
        </nav>
      </div>
    </div>
  );
}

export default App;
