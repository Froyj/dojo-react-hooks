import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <label htmlFor='search'>
        Search pokemon
        <input id='search' type='text' />
      </label>
    </div>
  );
}

export default App;
