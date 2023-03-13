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

    // appel useEffect
    useEffect(() => {
        // Déclaration :
        async function loadImagesFromApi() {
            const result = await recupImage()
            if(result) {
                setIsLoaded(true)
            }
        }

        // Appel :
        loadImagesFromApi()
    }, [])



    return (
        <div className="App">
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
