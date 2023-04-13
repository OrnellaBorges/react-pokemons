import './App.css';
import { useState, useEffect } from 'react';
import PokemonsBag from './PokemonsBag';
import Pokedex from './Pokedex';

import { pokemonsList, recupImage } from '../datas/pokemonsList';
import { badgesList } from '../datas/badgesList';




function App() {
    // creation des useState
    const [levelOfBadgeSelected, setLevelOfBadgeSelected] = useState(badgesList[0].level)
    const [isLoaded, setIsLoaded] = useState(false)
    // pour chaque pokémon retourne les pokémons inférieurs ou égal au niveau du badge selectionné 
    const pokemonsFiltered = pokemonsList.filter(({level}) => level <= levelOfBadgeSelected)


    // levelOfBadgeSelected (10... 20... 30..)
    const badgeSelected = badgesList.filter((badge) => badge.level === levelOfBadgeSelected)
    const imageOfBadge = badgeSelected[0].image




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

            <Pokedex/>

            {/* <PokemonsBag /> */}

            {isLoaded ? 
                <div>
                    <div className="container-select">
                        <label>Selectionnez votre badge:</label>
                        <select className="select-container" onChange={(e) => handleChange(e.target.value)}>

                            {badgesList.map((badge, index)=>
                                <option key={index} value={badge.level}>{badge.name}</option>
                            )}
                        </select>
                                
                        <div className="container-image-badge">
                            <img src={imageOfBadge} alt="bjcbdkjc" />
                        </div>
                        <span className="text-level">
                            niveau : {levelOfBadgeSelected}
                        </span>
                    </div>
                    <ul className="list-container-pokemon">
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
