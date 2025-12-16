const vraag = document.getElementById("vraag");

let leeftijd = prompt("hoe oud ben je?");

if(leeftijd >= 18){
    vraag.innerHTML = "welkom volwassen bezoeker";
    vraag.style.color = "groen";
}
else if(leeftijd < 18){
    vraag.innerHTML = "je mag hier nog niet naar binnnen."
    vraag.style.color = "rood";
}
else if(leeftijd >= 65){
    vraag.innerHTML = "Welkom senior bezoeker"
    vraag.style.color = "groen";
}