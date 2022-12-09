
import getPokemonByID from '../pokedex Vanilla/main';

async function fetchPokemon(id) {
    const data = await getPokemonByID(id);
    setPokemon(data);

}

const createPokemonCard = (pokemon) =>{
    const pokemonEl = document.createElement('a');
    pokemonEl.classList.add('pokemon');
    pokemonEl.setAttribute('href', 'pokemon.html')
    

    const poke_types = pokemon.types.map(type => type.type.name)
    
   

    const name = pokemon.name[0].toUpperCase() +pokemon.name.slice(1);
    
    var pokemonInnerHTML = `
    <div class="header-main-pokemon">
    <span class="number-pokemon">#1</span>
    <div class="container-img-pokemon">
        <img src="https://raw.githubusercontent.com/blueycode/pokedex/main/images/1.png" 
        alt="pokemon bulbasaur">
    </div>

    <div class="container-info-pokemon">
        <h1>Bulbasaur</h1>
        <div class="card-types">
            <span class="grass">Planta</span>
        </div>
        <div class="info-pokemon">
            <div class="group-info">
                <p>Altura</p>
                <span>0.7m</span>
            </div>
            <div class="group-info">
              <p>Peso</p>
              <span>6.9kg</span>
            </div>
        </div>
    </div>
</div>
<div class="container-stats">
  <h1>Estadisticas</h1>
  <div class="stats">
    <div class="stat-group">
      <span>Hp</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">45</span>
    </div>
    <div class="stat-group">
      <span>Attack</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">49</span>
    </div>
    <div class="stat-group">
      <span>Defense</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">49</span>
    </div>
    <div class="stat-group">
      <span>Special Attack</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">65</span>
    </div>
    <div class="stat-group">
      <span>Special Defense</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">45</span>
    </div>
    <div class="stat-group">
      <span>Speed</span>
      <div class="progress-bar"></div>
      <span class="counter-stat">45</span>
    </div>
  </div>
</div>
    `;

    if(poke_types[1] != undefined){
        pokemonInnerHTML = `
        <div class="card-img">
            <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png"
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
        </div>
    `;
    }

    pokemonEl.innerHTML = pokemonInnerHTML;
    poke_container.appendChild(pokemonEl);
}