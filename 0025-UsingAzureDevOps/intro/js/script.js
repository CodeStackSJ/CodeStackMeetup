document.getElementById("aniBtn").addEventListener("click", animateBtn);
document.getElementById("bckBtn").addEventListener("click", changeBGColor);
document.getElementById("loadBtn").addEventListener("click", loadSomething);
let changed = false;
let created = false;

function changeBGColor(){
    let body = document.getElementById("body");
    if(!changed){
        body.className = "bgColor2";
        changed = true;
    } else{
        body.className = "bgColor1"
        changed = false;
    }
}

function animateBtn(){
    let btn = document.getElementById("aniBtn");
    btn.classList.remove("pulse");
    btn.classList.remove("sideToSide");
    btn.classList.remove("barrelRoll");
    let r = Math.floor(Math.random() * 3);
    switch (r){
        case 0: btn.classList.add("pulse");
        break;
        case 1: btn.classList.add("sideToSide");
        break;
        case 2: btn.classList.add("barrelRoll");
        break;
    }
}

function loadSomething(){
    if(!created){
        let final = document.getElementById("final");
        let holder = document.createElement("div");
        let spinner = document.createElement("span");
        let jk = document.createElement("p");
        jk.innerText = "Just kidding!";
        holder.classList.add("spinner-border", "text-dark");
        holder.setAttribute("role","status");
        spinner.classList.add("visually-hidden");
        spinner.innerText = "Loading...";
        holder.appendChild(spinner);
        final.appendChild(holder);
        setTimeout(function(){
            final.removeChild(holder);
            final.appendChild(jk);
        },1200);
        setTimeout(function(){
            final.removeChild(jk);
        },3200);
    }
}