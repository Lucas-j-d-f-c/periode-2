let aantal = 0;

const knop = document.getElementById("knop");
const resetKnop = document.getElementById("reset");
const melding = document.getElementById("melding");
const numb = document.getElementById("numb");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
    if (aantal > 0) {
        aantal--;
        numb.innerText = aantal;
    }
});
knop.addEventListener("click", () => {
    aantal++;
    numb.innerText = aantal;
    updateMelding();
});
    
function updateMelding() {
if (aantal >= 5) {
    melding.innerText = "pauze? water is ook lekker"
    innerText.color = "red";

} else if (aantal >= 3) {
    melding.innerText = "dat zijn er best veel"
    innerText.color = "orange"
}
else {    melding.innerText = "";  
}}


resetKnop.addEventListener("click", () => {
    aantal = 0;
    numb.innerText = aantal;
    updateMelding();
});