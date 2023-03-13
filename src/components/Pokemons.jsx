import {pokemonsList} from '../datas/pokemonsList.js'
import './Pokemons.css'

function Pokemons() {

    // Intelligence


    //JSX
    return (
        <div>
            <ul className='container-image-pokemon'>
                {pokemonsList.map(({image, id, name}, index) => 
                    <li key={id}>
                        <img src={image} alt="xxx"/>
                        <p>{name}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Pokemons 