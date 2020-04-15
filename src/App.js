import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState({})
  const [busqueda, setBusqueda] = useState('pikachu')

  const buscarPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }

  const handleChange = e => {
    setBusqueda(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    buscarPokemon()
  }

  useEffect(buscarPokemon, [])

  console.log(pokemon)

  return (
    <div className="main">
      <div className="card">
        {pokemon && pokemon.name &&
          <>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
            <p>Nombre: {pokemon.name}</p>
            <p>Tipo: {pokemon.types.map(type => type.type.name)}</p>
          </>
        }
      </div>
      <form onSubmit={handleSubmit}>
      <input value={busqueda} onChange={handleChange}></input>
      <input type="submit" value="Buscar pokemon"></input>
      </form>
    </div>
  );
}

export default App;