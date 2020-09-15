import React from 'react';

class PokedexButtons extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="buttons">
        <button id="next-btn" className="next-btn">Next Pokémon</button>
        <button id="fire-btn" className="type-btn">Fire Pokémons</button>
        <button id="psychic-btn" className="type-btn">Psychic Pokémons</button>
      </section>
    )
  }
}

export default PokedexButtons;
