const textmessage = document.getElementById("textMessage");

let keuzeDrank = prompt("cola,water of koffie?");

if(keuzeDrank === "cola"){
    textmessage.innerHTML = "Je krijgt een blikje cola 🥤";
    textmessage.style.color = "rood";
}
else if(keuzeDrank === "water"){
    textmessage.innerHTML = "Goed bezig, lekker gezond 💧";
    textmessage.style.color = "blauw";

}
else if(keuzeDrank === "koffie"){
    textmessage.innerHTML = "Energie incoming ☕";
    textmessage.style.color = "bruin";

}
else{
    textmessage.innerHTML = "Sorry, dat hebben we niet";
    textmessage.style.color = "grijs";
}