const btnFilter = document.querySelector('.icon-filter');


btnFilter.addEventListener('click', () => {
    const containerFilter = document.querySelector('.container-filters');
    containerFilter.classList.toggle('active');
})


/*pokedex*/

let pokemons = [];

const poke_container = document.getElementById('poke-container');
const group = document.getElementsByClassName('group-type')
const search = document.getElementById("search")
const form = document.getElementById("form")
const pokemon_count = 200




async function getAllPokemons(id){
    const url =`https://pokeapi.co/api/v2/pokemon/${id}/`
    const res = await fetch(url)
    const pokemon = await res.json()
    pokemons = [...pokemons,pokemon];    
}

const removePokemon = () =>{
    const pokemonEls = document.getElementsByClassName("pokemon")
    let removablePokemons = [];
    for (let i= 0; i<pokemonEls.lenght; i++){
        const pokemonEl = pokemonEls[i];
        removablePokemons = [...removablePokemons, pokemonEl];
    }
    removablePokemons.forEach((remPoke) => remPoke.remove());

}

const getPokemon = async(id) =>{
    const searchPokemons = pokemons.filter((poke) => poke.name === id)
    removePokemon();
    searchPokemons.forEach((pokemon) => createPokemonCard(pokemon));
}

async function fetchPokemons() {
    for(let i=1; i <=pokemon_count; i++){
       await  getAllPokemons(i);
    }
    pokemons.forEach((pokemon) => createPokemonCard(pokemon));
}

const createPokemonCard = (pokemon) =>{
    const pokemonEl = document.createElement('a');
    pokemonEl.classList.add('pokemon');
    // pokemonEl.setAttribute('href', 'pokemon.html')
    const poke_stat = pokemon.stats.map((el) => el.stat.name);
    const stats = poke_stat.slice(0, 3);
    const base_value = pokemon.stats.map((el) => el.base_stat);
    const base_stat = base_value.slice(0, 3);
    const stat = stats.map((stat) =>{
        return `<li class="names">${stat}</li>`;
    }).join("");
    const base = base_stat.map((base) =>{
        return `<li class="base">${base}</li>`
    }).join("");
    

    const poke_types = pokemon.types.map(type => type.type.name)

    const name = pokemon.name[0].toUpperCase() +pokemon.name.slice(1);


        var pokemonInnerHTML = `
        <div class="card-img">
            <img
            src="https://projectpokemon.org/images/normal-sprite/${pokemon.name.replace("-", ".") && pokemon.name.replace("-", "_")}.gif"
            alt="Pokemon bulbasaur"
            />
        </div>
        <div class="card-info">
            <span class="pokemon-id">${pokemon.id}</span>
            <h3>${name}</h3>
            <div class="card-types" id="card-types" style=>
            <span class=${pokemon.types.map(type => type.type.name)[0]}>${pokemon.types.map(type => type.type.name)[0] }</span>
            </div>
            <div class="stats">
                <h2>Stats</h2>
                <div class="flex">
                <ul>${stat}</ul>
                <ul>${base}</ul>
                </div>
            </div>
        </div>
    `;
    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);

    if(poke_types[1] != undefined){
        pokemonInnerHTML = `
        <div class="card-img">
            <img
            src="https://projectpokemon.org/images/normal-sprite/${pokemon.name.replace("-", ".") || pokemon.name.replace("-", "_")}.gif"
            alt="Pokemon bulbasaur"
            />
        </div>
        <div class="card-info">
            <span class="pokemon-id">${pokemon.id}</span>
            <h3>${name}</h3>
            <div class="card-types" id="card-types" style=>
            <span class=${pokemon.types.map(type => type.type.name)[0]}>${pokemon.types.map(type => type.type.name)[0]}</span>
            <span class=${pokemon.types.map(type => type.type.name)[1]}>${pokemon.types.map(type => type.type.name)[1]}</span>
            </div>
            <div class="stats">
            <h2>Stats</h2>
            <div class="flex">
            <ul>${stat}</ul>
            <ul>${base}</ul>
            </div>
        </div>
        </div>
    `;

        pokemonEl.innerHTML = pokemonInnerHTML;
        poke_container.appendChild(pokemonEl);
    }
  
}



search.addEventListener("keyup", (e) =>{
    const searchString = e.target.value.toLowerCase();
    console.log(searchString)
    const filteredCharacters = pokemons.filter((pokemon) =>{
        return(
            pokemon.name.toLowerCase().includes(searchString)
        )
    })
    getPokemon(filteredCharacters);
});

fetchPokemons(); 

/* filter */


// const searchPokemon = event => {
//     event.preventDefault();
//     const value = event.target.pokemon;
//     fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
//         .then(data => data.json())
//         .then(response => renderPokemonData(response))
// }


// const renderPokemonData = (data) => {
//     const sprite = data.sprites.default;
//     const {stats, types} = data;
//     console.log(data);

// }









// // // // // // const getPokemon= async(limit = 150)=>{
// // // // // //     const baseURL = 'https://pokeapi.co/api/v2/';
// // // // // //     const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
// // // // // //     const data = await res.json();
// // // // // // }


