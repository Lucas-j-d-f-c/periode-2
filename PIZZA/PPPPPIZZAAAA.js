let aantal = 0;

const knop = document.getElementById("PIZZA");
const resetKnop = document.getElementById("reset");
const melding = document.getElementById("text");
const numb = document.getElementById("number");

knop.addEventListener("click", () => {
    aantal++;
    numb.innerText = aantal;
    updateMelding();
});

function updateMelding() {
    if (aantal >= 67) {
        melding.innerHTML = "67 PIZZAAAAAA'S";
    } else if (aantal >= 40) {
        melding.innerHTML = "kan je stoppen? dit is niet meer goed voor mij";
    } else if (aantal >= 35) {
        melding.innerHTML = "STOPPPP";
    } else if (aantal >= 30) {
        melding.innerHTML = "je bent klaar";
    } else if (aantal >= 25) {
        melding.innerHTML = "ok stop maar je bent klaar";
    } else if (aantal >= 20) {
        melding.innerHTML = "je mag nu op play again clicken";
    } else if (aantal >= 15) {
        melding.innerHTML = "je hebt nu echt gewonnen hoor!";
    } else if (aantal === 10) {
        melding.innerText = "je hebt Gewonnen!";
        melding.style.color = "green";
    } else {
        melding.innerText = "";
    }
}

resetKnop.addEventListener("click", () => {
    aantal = 0;
    numb.innerText = aantal;
    updateMelding();
    melding.innerText = "";
});
