import {pokemonsList} from '../datas/pokemonsList.js'
import './Pokemons.css'

function Pokemons({tuyau}) {
    //const [tableau, setTableau] = useState(['mangue', 'fraise'])
    // INTELLIGENCE


    //tableau.push('orange')
    //['mangue', 'fraise', 'orange']

    //setTableau(     [ ...tableau , 'orange']     )

    const villes = ['Paris', 'Bordeaux', 'Nantes']

    //JSX
    return (
        <div>
            <ul className='pkm-list-container'>
                {pokemonsList.map(({name, image}, index) =>
                    <li key={index} className='pkm-list'>
                        <img className='pkm-img' src={image} alt={name} />
                        <p>{name}</p>
                    </li>
                )}
            </ul>
            <p>Choisissez votre ville :</p>

            {villes.map( (ville, index) =>
                <button onClick={() => tuyau(ville)} key={index}>{ville}</button>
            )}

            


        </div>
    )
}

export default Pokemons 