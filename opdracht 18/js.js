let password =document.getElementById("password"); 
addEventListener("input", function(){
    let counter = 0;
    for (let i = 0; i < password.value.length; i++){
        counter++;
    }
    document.getElementById("counter").innerText = counter;
    if (password.value.length < 6){
        document.getElementById("text").innerText = "wachtwoord is kort";
        document.getElementById("text").style.color = "red";
    } else {
        document.getElementById("text").innerText = "wachtwoord is Sterk";
        document.getElementById("text").style.color = "green";
    }
});