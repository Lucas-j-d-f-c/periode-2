 console.log("Test");

const geboortejaar = prompt("Wat is je geboortejaar");
const huidigeJaar = new Date().getFullYear();
let leeftijd = huidigeJaar - geboortejaar;

document.getElementById("leeftijd").innerHTML ="Je bent ongeveer " + leeftijd + " jaar oud.";
