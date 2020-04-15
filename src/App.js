import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  console.log(pokemon)

  return (
    <div className="main">
      <div className="card">
        {pokemon && pokemon.name &&
          <>
            <img src={pokemon.sprites.front_default} />
            <p>Nombre: {pokemon.name}</p>
            <p>Tipo: {pokemon.types.map(type => type.type.name)}</p>
          </>
        }
      </div>
    </div>
  );
}

export default App;