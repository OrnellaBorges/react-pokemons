import bulbizarre from '../assets/bulbizarre.png'
import carapuce from '../assets/carapuce.png'

// appel api pokemon

export async function recupImage() {
    for(let pokemon of pokemonsList) {
        const requestFetch = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon.name}`);
        const reponseFetch = await requestFetch.json();
        pokemon.image = reponseFetch.image
    }
    return true
}


export const pokemonsList = [
    {
        name: 'Bulbizarre',
        id: '#1',
        level: 15,
        type: 'plante'
    },
    {
        name: 'Carapuce',
        id: '#2',
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
        name: 'Ponyta',
        level: 55,
        type: 'feu'
    },
    {
        name: 'Evoli',
        level: 65,
        type: 'Normal'
    },
    {
        name: 'Poissirène',
        level: 75,
        type: 'eau'
    },
    {
        name: 'Mew',
        level: 85,
        type: 'psy'
    }
]
