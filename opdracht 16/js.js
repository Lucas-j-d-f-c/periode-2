let titel = document.getElementById("bert");

titel.addEventListener("click", function() {
    if (titel.innerText === "Hallo") {
        titel.innerText = "Doeg";
        titel.style.color = "white";
        document.body.style.backgroundColor = "lightblue";
    } else {
        titel.innerText = "Hallo";
        titel.style.color = "black";
        document.body.style.backgroundColor = "darkred";
    }
});


