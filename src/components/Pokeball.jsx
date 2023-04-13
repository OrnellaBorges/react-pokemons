import Pokeball from "../assets/pokeball.jpg"
import { allPokemons, pokemonsList} from '../datas/pokemonsList.js'



function PokeballComponent (){



    return(
        <div>
            <img src={Pokeball} alt="pokeball"/>
            <p>{name}</p>
        </div>

    )
}