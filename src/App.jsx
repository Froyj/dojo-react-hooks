import PokemonDetails from './components/PokemonDetails';
import { magikarp } from './pokemon';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then((response) => response.data)
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then((res) => res.data)
      .then((data) => ({
        name: data.name,
        image: data.sprites.front_default,
        types: data.types,
      }))
      .then((pokemon) => {
        setSelectedPokemon(pokemon);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <label htmlFor='search'>
        Search pokemon
        <input
          id='search'
          type='text'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      {error && <p>this pokemon doesn't exist</p>}

      <div>
        <h1>Pokemon List</h1>
        <ul>
          {pokemonList.map((pokemon) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      </div>
      <PokemonDetails image={selectedPokemon.image} name={selectedPokemon.name} types={selectedPokemon.types}/>
    </div>
  );
}

export default App;
