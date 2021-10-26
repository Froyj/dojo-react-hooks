import './App.css';
import axios from 'axios';
import { useState } from 'react';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const getPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((resp) => resp.data)
      .then((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types,
      }))
      .then((p) => {
        setPokemon(p)
        setError(false)
      })
      .catch((err) => {
        setPokemon(null)
        setError(true)
      })
  };

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <label htmlFor='search'>
        Search pokemon
        <input id='search' type='text' value={search} onChange={e => setSearch(e.target.value)}/>
        <button onClick={getPokemon}>search</button>
      </label>
      {error && <p>This pokemon doesn't exist</p>}
      {pokemon && <PokemonDetails {...pokemon}/>}
    </div>
  );
}

export default App;
