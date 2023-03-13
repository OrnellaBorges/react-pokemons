import { allPokemons, pokemonsList} from '../datas/pokemonsList.js'
import {usestate, useEffect} from 'react'
import './PokemonsBag.css'

function Pokemons() {
// Intelligence



//JSX
return (
    <div>
        <h1>Pokemons bag</h1>
        <ul className='container-pokemons'>
            {pokemonsList.map(({image, id, name}, index) => 
                <li className='pokemons-items' key={id}>
                    <div className='container-image-pokemon'>
                    <img src={image} alt="xxx"/>
                    </div>
                    <p>{name}</p>
                </li>
            )}
        </ul>
    </div>
)
}

export default Pokemons 