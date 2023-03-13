// appel api pokemon 
//pour mettre des clés image dans les objet de chaque pok

export async function recupImage() {
    for(let pokemon of pokemonsList) {
        const requestFetch = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemon.name}`);
        const reponseFetch = await requestFetch.json();
        pokemon.image = reponseFetch.image
    }
    return true
}

// fonction qui fait un fetch 
export async function allPokemons(){
    const resApi = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/20')
    const pokemons100 = await resApi.json()

    return pokemons100

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
        id: '#3',
        level: 35,
        type: 'feu'
    },
    {
        name: 'Pikachu',
        id: '#4',
        level: 45,
        type: 'electrique'
    },
    {
        name: 'Ponyta',
        id: '#5',
        level: 55,
        type: 'feu'
    },
    {
        name: 'Evoli',
        id: '#6',
        level: 65,
        type: 'Normal'
    },
    {
        name: 'Poissirène',
        id: '#7',
        level: 75,
        type: 'eau'
    },
    {
        name: 'Mew',
        id: '#8',
        level: 85,
        type: 'psy'
    }
]
