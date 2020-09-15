import React from 'react'
import Pokemon from './Pokemon.js'
import './Pokemon.css'

class PokedexStateful extends React.Component {
  constructor(props) {
    super();

    this.handleNextClick = this.handleNextClick.bind(this);

    this.state = {
      pokemon: {id: 25,
        name: "Pikachu",
        type: 'Electric',
        averageWeight: {
            value: 6.0,
            measurementUnit: "kg"
        },
        image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
        moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)",},
      counter: 0
    }

  }

  handleNextClick() {
    if (this.state.counter === this.props.pokemons.length) {
      this.setState({
        pokemon: this.props.pokemons[0],
        counter: 1
      });
    } else {
      this.setState((state) => ({
            pokemon: this.props.pokemons[state.counter],
            counter: state.counter + 1
          }
      ))
    }
    console.log(this.state.pokemon)
  }

  render() {
    const poke = this.state.pokemon;

    return(
      <div className='pokedex'>
        <div className='pokedex-header'>
          <div className='blue-circle'></div>
          <h1>Pokédex</h1>
        </div>
        <div className='poke-container'>
          <Pokemon
            key={poke.id}
            name={poke.name}
            type={poke.type}
            weight={poke.averageWeight.value}
            measure={poke.averageWeight.measurementUnit}
            image={poke.image}
            link={poke.moreInfo}
            />
        </div>
        <section className="buttons">
          <button id="next-btn" className="next-btn" onClick={this.handleNextClick}>Next Pokémon</button>
          <button id="fire" className="type-btn">Fire Pokémons</button>
          <button id="psychic" className="type-btn">Psychic Pokémons</button>
        </section>
      </div>
    );
  }
}

export default PokedexStateful;

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