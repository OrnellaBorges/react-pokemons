import { allPokemons, pokemonsList} from '../datas/pokemonsList.js'
import {useState, useEffect} from 'react'
import './Pokedex.css'

function Pokedex(){
    // Intelligence

    // USESTATE
    const [arrayApiPokemons, setArrayApiPokemon] = useState([])
    const [checkedPokemon, setCheckedPokemon] = useState([])
    //const [uncheckedPokemon, setUnCheckedPokemons]= useState(false)

    // declaration fct qui fait appel la fct allPokemons qui elle fait un fetch
    useEffect(() => {
        async function callPokemons(){
            const res = await allPokemons()
            setArrayApiPokemon(res)
        }
        // appel de la fct 
        callPokemons()
    }, [])



    // Check si au moins un des elements valide la condition a linterieur du some()
    //array.some((el) => el > 2)


    /*

    let pokemonSelected = [
        {
            name: 'mew'
        },
        {
            name: 'onix'
        }
    ]
    */

    /* function selectPokemons(e){
        console.log('e', e)
    } */

    function addToCoffre (name, image, apiTypes, sprite, id){
        //verifier si  pokemon existe dans le sac 
        
        // ajout des pokemons dans le sac 
        setCheckedPokemon([...checkedPokemon, { name, image, apiTypes, sprite, id}]) 
        console.log('checkedPokemons', checkedPokemon)
    }

    /* function unChecked(){
        if(nkjnjnkj){

        }
        setUnCheckedPokemons(true)
    }


    <Composant name='ornella' />

 */

    //JSX
    return (
        <div>
            <h1>Pokedex</h1>
            <p className='text'>Select your pokemons</p>
            <form className='container-pokemons'>
                {arrayApiPokemons.map(({image, id, name, apiTypes, sprite}, index) =>
                    <label key={id} htmlFor={id} className={`pkm-checkbox ${checkedPokemon.find((pokemon) => pokemon.name === name) ? 'pkm-checked' : '' }` }>
                        <input type ='checkbox' name='prout' id={id} className='pokemons-items' onChange={() => addToCoffre(name, image, apiTypes, sprite, id)}/>
                        <p>{name}</p>
                        <div className='constainer-image-pokemon'>
                            <img src={image} alt="xxx"/>
                        </div>
                        <button className='info-bulle'>i</button>
                    </label>
                )}
            </form>
        </div>
    )
}

export default Pokedex 





/*

attend il existe pas un chat ? sur vscode ? Heu on utilise google tchat ou teams ou slack pour communiquer

yes : donc je texplique par écrit (car je suis dans une reunion video: ok ?)

oui d'accord j'espere que personne ne regarde ton ecran , non ca va



Le resultat de la boucle (map) donnera ceci :

Si tu recupere 2 pokemons, ça fera 2 labels comme ci dessou :


<label for='pkm1'> <<< Ok ? oui j'ai compris 

mais est ce que ça ne va pas faire interférence avec key = {id}? >>> non je pense pas, attends je branche ma batterie je reviens
ok Re, Donc , non ça fera pas interference car supposons

<<< ici c'est toujours pkm pour ce pokemon, il faut que d'un pokemon a un autre ce soit different. Donc il faut typiquement que ça donne qqchose comme ça :
<label for"1" key="1"> <<< id vaut 1 pour le pokemon bulbizarre, puis 2 pour herbizarre ainsi de suite donc, si on met {id}, ça va donner
    <p>Bulbizarre</p>
    <input type='checkbox' id="1" /> <<< Comme id vaut 1, si on remplace ça donnera en sortie
</label> <<< Donc, meme si les 3 attributs sont à 1, ça marche, car la clé doit juste etre unique, il ne doit pas y avoir deux clés key="1", ok pour ça ?
oui ok c'est juste parce que c'est identifié par la props key mais rien avoir avec id et for < oui, la prop key n'a rien a voir avec for et id, il faut juste que les key soient uniques, et que chaque for est lié a chaque id


<label for"1" key="1">
    <p>Bulbizarre</p>
    <input type='checkbox' id="1" />
</label>
<label for="2" key="2"> <<< Donc pour le deuxieme element, ça donne <
    <p>Herbizarre</p>
    <input type='checkbox' id="2"></input> <<< Donc conclusion, les clés sont bien uniques, et chaque for unique est lié à sa checkbox id unique. Est-ce que c'est bon ?
    oui j'ai bien compris . Donc je prends la main et regarde bien ce que je fais
</label>

Le problème, c'est que toutes les balises label on toujours le meme attribut for et toutes les balises input on toujours le meme attribut id
A savoir 'pkm' regarde








*/
