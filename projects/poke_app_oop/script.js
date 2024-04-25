const $searchInput = document.getElementById("search-input");
const $searchButton = document.getElementById("search-button");

const $pokemonNameSpan = document.getElementById("pokemon-name");
const $pokemonIdSpan = document.getElementById("pokemon-id");
const $pokemonWeightSpan = document.getElementById("weight");
const $pokemonHeightSpan = document.getElementById("height");
const $pokemonImgDiv = document.getElementById("pokemon-img");
const $pokemonTypesDiv = document.getElementById("types");

// stats

const $hpDiv = document.getElementById("hp");
const $attackDiv = document.getElementById("attack");
const $defenseDiv = document.getElementById("defense");
const $spAttackDiv = document.getElementById("special-attack");
const $spDefenseDiv = document.getElementById("special-defense");
const $speedDiv = document.getElementById("speed");

// Api endpoint

const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";


const getPokemon = async (pokemonIdOrName) => {
    try {
        const pokemonUri = pokemonApi + `${pokemonIdOrName}`;
        const res = await fetch(pokemonUri);

        if (!res.ok) {
            alert("Pokémon not found");
            //TODO: reference to the clear function
            return
        }

        const data = await res.json();
        showInfo(data);
        showImg(data);
        showStats(data);
        showTypes(data);

    } catch (error) {
        console.log(error);
    }
}

const showInfo = data => {
    const { height, weight, name, id } = data;
    $pokemonNameSpan.textContent = name;
    $pokemonIdSpan.textContent = `#${id}`;
    $pokemonWeightSpan.textContent = `Weight: ${weight}`;
    $pokemonHeightSpan.textContent = `Height: ${height}`;

}

const showStats = data => {
    const { stats } = data;
    const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
    const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
    const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;
    const spAttack = stats.find(stat => stat.stat.name === 'special-attack').base_stat;
    const spDefense = stats.find(stat => stat.stat.name === 'special-defense').base_stat;
    const speed = stats.find(stat => stat.stat.name === 'speed').base_stat;

    $hpDiv.textContent = hp;
    $attackDiv.textContent = attack;
    $defenseDiv.textContent = defense;
    $spAttackDiv.textContent = spAttack;
    $spDefenseDiv.textContent = spDefense;
    $speedDiv.textContent = speed;
}

const showImg = data => {
    const { name, sprites } = data;
    const pokemonImg = `<img id="sprite" src="${sprites.front_default}" alt="${name} front default sprite"> `
    $pokemonImgDiv.innerHTML = pokemonImg;
}

const showTypes = data => {
    const { types } = data;
    let typesElements = ``;

    types.forEach(element => {

        typesElements += `<span class="type ${element.type.name}">${element.type.name}</span>`

    });
    $pokemonTypesDiv.innerHTML = typesElements;

}

const resetDisplay = () => {
    $pokemonNameSpan.textContent = ""; 
    $pokemonIdSpan.textContent = ""; 
    $pokemonWeightSpan.textContent = ""; 
    $pokemonHeightSpan.textContent = ""; 
    $pokemonImgDiv.innerHTML = ""; 
    $pokemonTypesDiv.innerHTML = ""; 
    $hpDiv.textContent = ""; 
    $attackDiv.textContent = ""; 
    $defenseDiv.textContent = ""; 
    $spAttackDiv.textContent = ""; 
    $spDefenseDiv.textContent = ""; 
    $speedDiv.textContent = "";

}

$searchButton.addEventListener("click", () => {
    const inputValue = $searchInput.value.toLowerCase();
    if(!inputValue){
        alert("Pokémon not found");
        return
    }
    resetDisplay();
    getPokemon(inputValue);

})

