import './App.css';
import { useState, useEffect } from 'react';
//import Pokemons from './Pokemons';
import { pokemonsList } from '../datas/pokemonsList';
import { badgesList } from '../datas/badgesList';
import { recupImage } from '../datas/pokemonsList';

function App() {
    // creation des useState
    const [levelOfBadgeSelected, setLevelOfBadgeSelected] = useState(badgesList[0].level)
    const [isLoaded, setIsLoaded] = useState(false)
    // pour chaque pokémon retourne les pokémons inférieurs ou égal au niveau du badge selectionné 
    const pokemonsFiltered = pokemonsList.filter(({level}) => level <= levelOfBadgeSelected)

    function handleChange(value) {
        setLevelOfBadgeSelected(Number(value))
    }

    async function handleClickButton(){
        /* const requestFetch = await fetch('https://pokebuildapi.fr/api/v1/pokemon/Bulbizarre');
        const reponseFetch = await requestFetch.json();
        console.log(reponseFetch.image) */

        const result = await recupImage()
        console.log(result)

        if(result === 'ok'){
            setIsLoaded(true)
        }

    }

    return (
        <div className="App">
            <button onClick={() => handleClickButton()}>Recuper Images</button>
            {isLoaded ? 
                <div>
                    <div>
                        <label>Selectionnez votre badge:</label>
                        <select className="select-container" onChange={(e) => handleChange(e.target.value)}>

                            {badgesList.map((badge, index)=>
                                <option key={index} value={badge.level}>{badge.name}</option>
                            )}

                        </select>
                        <span className="text-level">
                            (niveau : {levelOfBadgeSelected})
                        </span>
                    </div>
                    {/* <Pokemons /> */}
                    <ul>
                        {pokemonsFiltered.map((pokemon, index) =>
                            <li className="list-pokemon" key={index}>
                                <div className="container-image-pokemon">
                                    <img src={pokemon.image} alt="blabla"/>
                                </div>
                                <h2>{pokemon.name}</h2>
                            </li>
                        )}
                    </ul>
                </div>
                :
                <p>Loading...</p>
            }
        </div>
    )
}

export default App;
