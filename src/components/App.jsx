import './App.css';
import { useState } from 'react';
import Pokemons from './Pokemons';
import Enfant from './Enfant';
import Enfant2 from './Enfant2';
import Test from './Test';

/* const listPokemons = [
    {
        name: 'Bulbizarre',
        level: 15,
        type: 'plante'
    }, 
    {
        name: 'Carapuce',
        level: 25,
        type: 'eau'
    },
    {
        name: 'Salameche',
        level: 35,
        type: 'feu'
    },
    {
        name: 'Pikachu',
        level: 45,
        type: 'electrique'
    },
    {
        name: 'Ponita',
        level: 55,
        type: 'feu' 
    },
    {
        name: 'Evoli',
        level: 65,
        type: 'Normal' 
    },
    {
        name: 'Poisirène',
        level: 75,
        type: 'eau'
    },
    {
        name: 'Mew',
        level: 85,
        type: 'psy'
    }
]

const listBadges = [
    {
        name: 'Roche',
        level: 20
    },
    {
        name: 'Cascade',
        level: 30
    },
    {
        name: 'Foudre',
        level: 40
    },
    {
        name: 'Prisme',
        level: 50
    },
    {
        name: 'Âme',
        level: 60
    },
    {
        name: 'Marais',
        level: 70
    },
    {
        name: 'Volvan',
        level: 80
    },
    {
        name: 'Terre',
        level: 90
    }
] */



function App() {
    // 2EME CAS : En utilisant un state :
    const [maVille, setMaVille] = useState('Lille')
    //const [monAge, setMonAge] = useState(18)

    // creation d'un useState
    //const [levelOfBadgeSelected, setLevelOfBadgeSelected] = useState(listBadges[0].level)

    // pour chaque pokémon retourne les pokémons inférieurs ou égal au niveau du badge selectionné 
    //const pokemonsFiltered = listPokemons.filter(({level}) => level <= levelOfBadgeSelected)

    /* function handleChange(value) {
        setLevelOfBadgeSelected(Number(value))
    } */

/*     const fonctionBidon = (value) => {
        console.log(value)
    }

    const fonctionToto = (message) => {
        console.log(message)
    }

    const fonctionQuestion = (val) =>{
        console.log(val)
    }

    const clickHere = (value) => {
        console.log (value)
    } */

    /* const age = (num) => {
        setMonAge(num)
    } */

    //const a = 10;

    // 1ER CAS : On réceptionne la remontée ici :
    /* const reception = () => {
        // On décide de modifier un state (maVille) :
        setMaVille('Paris')
    } */

  return (
    <div className="App" style={{border: '10px solid orange'}}>
      <p>{maVille}</p>
      <header className="App-header">
        {/* <div>
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
         */}
        <Pokemons tuyau={setMaVille} />
        {/* <ul>
            {pokemonsFiltered.map((pokemon, index) =>
                <li key={index}>{pokemon.name}</li>
            )}
        </ul> */}


        {/* <div style={{border: '5px solid red'}}>
            <Enfant firstname='Toto' lastname='Borges' fonctionProp={fonctionBidon}  age={a}/>
            <Enfant2 firstName='Titi' lastName='Borges' fonctionBis={fonctionToto}/>
            <Test message='Salut' question={fonctionQuestion} propsClickHere={setLevelOfBadgeSelected} propsAge={setMonAge}/>
        </div> */}

      </header>
    </div>
  );
}

export default App;
