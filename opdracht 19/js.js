let games = ["asseto corsa", "Minecraft", "Gone fishing", "call of duty", "FIFA"];

document.getElementById("output").innerHTML = `
  Eerste item: ${games[0]} <br>
  Laatste item: ${games[games.length - 1]} <br>
  Totaal aantal items: ${games.length}
`;
games[2] = "Eminem";
document.getElementById("output2").innerHTML = `
  Nieuwe lijst: ${games}
`;