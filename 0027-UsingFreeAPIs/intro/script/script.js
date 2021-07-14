let pokeCounter = 0;
let PokeUrl = `https://pokeapi.co/api/v2/pokemon/`;
let pokeName = document.getElementById('pokeName');
let pokeImg = document.getElementById('pokeImg');
let moveOne = document.getElementById('pokeFirstMove');
let moveTwo = document.getElementById('pokeSecondMove');
let moveThree = document.getElementById('pokeThirdMove');
let moveFour = document.getElementById('pokeFourthMove');
let type = document.getElementById('pokeType');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let randBtn = document.getElementById('randomBtn');
let pokeNumber = document.getElementById('pokeNumber');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense  = document.getElementById('defense');
let specialA = document.getElementById('specialAttack');
let specialDefense = document.getElementById('specialDefense');
let speed = document.getElementById('speed');


// nextBtn.addEventListener("click", function (e) {
//     next();
// });

// prevBtn.addEventListener("click", function (e) {
//     prev();
// });

// randBtn.addEventListener("click", function (e) {
//     rando();
// });


// function pokeType(data) {
//     pokeArr = data;
//     let pokemonTyping = pokeArr.types[0].type.name;
//     type.innerHTML = pokemonTyping.toUpperCase();
//     switch (pokemonTyping) {
//         case "fire": type.style.background = "red";
//             break;
//         case "water": type.style.background = "blue";
//             break;
//         case "ground": type.style.background = "burlywood";
//             break;
//         case "fighting": type.style.background = "orange";
//             break;
//         case "grass": type.style.background = "green";
//             break;
//         case "bug": type.style.background = "olive";
//             break;
//         case "poison": type.style.background = "purple";
//             break;
//         case "electric": type.style.background = "yellow";
//             break;
//         case "flying": type.style.background = "steel";
//             break;
//         case "ice": type.style.background = "aqua";
//             break;
//         case "psychic": type.style.background = "pink";
//             break;
//         case "dragon": type.style.background = "orange";
//             break;
//         case "normal": type.style.background = "grey";
//             break;
//         case "rock": type.style.background = "brown";
//             break;
//         case "fairy": type.innerHTML = pokemonTyping + " not in gen 1 >:(";
//                      type.style.background = "pink";
//             break;
//         case "ghost": type.style.background =  "plum";
//             break;
//         default: alert("alert alert you have a weird pokemon");
//     }
// }


