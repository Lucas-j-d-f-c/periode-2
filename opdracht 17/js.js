let block = document.getElementById("block");
addEventListener("mouseover", function(event) {
    if (event.target.id === "block") {
        block.style.backgroundColor = "green";
        block.innerText = "nice hover";
        block.style.width = "250px";
        block.style.height = "250px";
    }
});

addEventListener("mouseout", function(event) {
    if (event.target.id === "block") {
        block.style.backgroundColor = "red";
        block.innerText= " ";
        block.style.width = "200px";
        block.style.height = "200px";
    }
});