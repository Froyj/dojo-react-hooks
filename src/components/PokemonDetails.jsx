import './PokemonDetails.css';

const PokemonDetails = ({ name, id, image, types }) => ( 
  <div className='pokemon-container'>
    <img src={image} alt={name} className='pokemon-image' />
    <div className='pokemon-header'>
      <h3>{name}</h3>
    </div>
    <div className='pokemon-body'>
      <div>
        <h4>Types:</h4>
        <ul>
          {types.map((type) => (
            <li>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PokemonDetails;
