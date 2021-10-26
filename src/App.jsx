import PokemonDetails from './components/PokemonDetails';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}/`)
      .then((res) => res.data)
      .then(data => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types,
      }))
      .then((data) => {
        setPokemon(data);
        setError(false)
      })
      .catch((err) => {
        setError(true)
      })  
  };

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <label htmlFor='search'>
        Search pokemon
        <input id='search' type='text' value={search} onChange={event => setSearch(event.target.value)} />
      </label>
      {error && <p>This pokemon doesn't exist</p>}
      <button onClick={getPokemon}>click here</button>
      {pokemon && <PokemonDetails {...pokemon} />}
    </div>
  );
}

export default App;
