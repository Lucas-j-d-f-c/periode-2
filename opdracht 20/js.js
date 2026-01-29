let emojis = ["🍆" , "🍑" , "🍌" , "🍒" , "🍓"]

const button = document.getElementById("goon");
const h1 = document.querySelector("h1");
button.addEventListener("click", function() {
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    h1.textContent += randomEmoji;
});