import React from 'react'
import ga from '../../utils/ga'

const Pokemon = ({ pokemon }) => (
  <div className="pokemon">
    <button
      type="button"
      className="pokemon__sprite"
      onClick={() => {
        ga.event({
          category: 'pokemon',
          action: 'click',
          label: pokemon.id
        })
      }}
      style={{
        backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          pokemon.id
        }.png`})`
      }}
    />
    <p className="pokemon__name">{pokemon.name}</p>
  </div>
)

export default Pokemon
