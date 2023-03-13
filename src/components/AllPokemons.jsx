import { allPokemons, pokemonsList} from '../datas/pokemonsList.js'
import {useState, useEffect} from 'react'
import './PokemonsBag.css'

function Pokemons() {
    // Intelligence

    const [array, setArray] = useState([])
    //let array2 = []

    // declaration fct  qui fait appel la fct allPokemons qui elle fait un fetch
    useEffect(() => {
        async function callPokemons(){
            const res = await allPokemons()
            console.log('res', res)
            setArray(res)
        }
        // appel
        callPokemons()
    }, [])

    //JSX
    return (
        <div>
            
            <h1>All pokemons</h1>
            <ul className='container-pokemons'>
                {array.map(({image, id, name}, index) => 
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