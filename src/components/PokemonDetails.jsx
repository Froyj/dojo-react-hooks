import './PokemonDetails.css';

const PokemonDetails = ({ pokemon }) => (
  <div className='pokemon-container'>
    <img src="" alt='' className='pokemon-image' />
    <div className='pokemon-header'>
      <h3>
        {/* mettre ici le nom du pokemon */}
      </h3>
    </div>
    <div className='pokemon-body'>
      <div>
        <h4>Types:</h4>
        <ul>
          {/* Mettre ici la liste des types du pokemon */}
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
