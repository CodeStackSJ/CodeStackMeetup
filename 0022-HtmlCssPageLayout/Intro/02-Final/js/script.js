let gameList = ["Super Mario Bros", "Path of Exile", "Borderlands", "Pokemon", 
"Animal Crossing"];

let actorList = ["Kevin Bacon", "Rosario Dawson", "Jennifer Lawrence", "Tom Cruise", 
"Daisy Ridley"];

let chosenList = [];

let nameGen = document.getElementById("name");
let nameGenBtn = document.getElementById("nameGenBtn")
let list1Btn = document.getElementById("list1");
let list2Btn = document.getElementById("list2");

list1Btn.addEventListener("click", GameBtnChecked);
list2Btn.addEventListener("click", ActorBtnChecked);

nameGenBtn.addEventListener("click", NameGenerator);

function NameGenerator(){
    if(list1Btn.checked){
        let randomNumber = Math.floor(Math.random() * gameList.length);
       nameGen.innerText = gameList[randomNumber];
    }else {
        let randomNumber = Math.floor(Math.random() * actorList.length);
       nameGen.innerText = actorList[randomNumber];
    }
}

function chooseList(list){
    chosenList = list
}


function GameBtnChecked(){
    if (list2Btn.checked){
        list1Btn.checked = true;
        list2Btn.checked = false;
    }
    chooseList(gameList);
}
function ActorBtnChecked(){
    if(list1Btn.checked){
        list2Btn.checked = true;
        list1Btn.checked = false;
    }
    chooseList(actorList);
}


