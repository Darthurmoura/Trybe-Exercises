import React from 'react'
import Pokemon from './Pokemon.js'
import './Pokemon.css'

class Pokedex extends React.Component {
  constructor(props) {
    super();

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    console.log(this.props.pokemons);
  }

  render() {
    const pokemons = this.props.pokemons;

    return(
      <div className='pokedex'>
        <div className='pokedex-header'>
          <div className='blue-circle'></div>
          <h1>Pokédex</h1>
        </div>
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
        <section className="buttons">
          <button id="next-btn" className="next-btn" onClick={this.handleClick}>Next Pokémon</button>
          <button id="fire-btn" className="type-btn">Fire Pokémons</button>
          <button id="psychic-btn" className="type-btn">Psychic Pokémons</button>
        </section>
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