import { allPokemons, pokemonsList} from '../datas/pokemonsList.js'
import {usestate, useEffect} from 'react'
import './Pokemons.css'

function Pokemons() {
// Intelligence

    // declaration fct callPoke qui fait appel la requete api fct allPokemons
useEffect(() => {
    async function callPokemons(){
        const call = await allPokemons()
        return true
        //console.log('call1', call)
    }
    // appel a la fonction
    callPokemons()
    console.log('call2',callPokemons())
}, [])

//JSX
return (
    <div>
        <h1>All pokemons</h1>
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