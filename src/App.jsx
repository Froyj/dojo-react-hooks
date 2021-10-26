import PokemonDetails from './components/PokemonDetails';
import { magikarp } from './pokemon';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Pokedex</h1>
      <label htmlFor='search'>
        Search pokemon
        <input id='search' type='text' />
      </label>
      <PokemonDetails pokemon={magikarp} />
    </div>
  );
}

export default App;
