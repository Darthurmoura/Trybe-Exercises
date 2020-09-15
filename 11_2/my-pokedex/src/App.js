import React from 'react';
import Pokedex from './Pokedex.js';
import PokedexStateful from './PokedexStateful';
import pokemons from './data.js';
import './Pokemon.css';
import './App.css';

function App() {
  return (
    <section className="data">
      {/* <Pokedex pokemons={pokemons}/> */}
      <PokedexStateful pokemons={pokemons} />
    </section>
  );
}

export default App;
