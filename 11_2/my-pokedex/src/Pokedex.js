import React from 'react'
import Pokemon from './Pokemon.js'
import pokemons from './data.js'
import './Pokemon.css'

class Pokedex extends React.Component {
  render() {
    return(
      <div className='pokedex'>
        <h1>PokéDex!</h1>
        <div className='poke-container'>
          {pokemons.map((poke) => {
            return <Pokemon
            key={poke.id}
            name={poke.name}
            type={poke.type}
            weight={poke.averageWeight.value}
            measure={poke.averageWeight.measurementUnit}
            image={poke.image}
            link={poke.moreInfo}
            />
          })};
        </div>
      </div>
    );
  }
}

export default Pokedex;

// {
//   id: 25,
//   name: "Pikachu",
//   type: 'Electric',
//   averageWeight: {
//       value: 6.0,
//       measurementUnit: "kg"
//   },
//   image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
//   moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
// }