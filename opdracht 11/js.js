const vraag = document.getElementById("vraag");


let budget = prompt("Wat is je budget?");

if (budget > 60) {
    vraag.innerHTML = "Je kunt het kopen";
    vraag.style.backgroundColor = "green";
}else {
    vraag.innerHTML = "je kunt het niet kopen";
    vraag.style.backgroundColor = "red";
}