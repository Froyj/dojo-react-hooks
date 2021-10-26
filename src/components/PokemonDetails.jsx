import './PokemonDetails.css';

const PokemonDetails = ({ image, name, types }) => (
  <div className='pokemon-container'>
    <img src={image} alt='' className='pokemon-image' />
    <div className='pokemon-header'>
      <h3>
        {name}
      </h3>
    </div>
    <div className='pokemon-body'>
      <div>
        <h4>Types:</h4>
        <ul>
          {types.map(t => <li>{t.type.name}</li>)}
        </ul>
      </div>
      <div>
        <h4>Moves:</h4>
        <ul>
          {/* Mettre ici la liste des attaques du pokemon */}
        </ul>
      </div>
    </div>
  </div>
);

export default PokemonDetails;
