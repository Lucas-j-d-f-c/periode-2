let NS= "false"
let RET="false"
let sneeuw="true"
height="5"



const textMessage = document.getElementById("sneeuw");
 let sneeuw = prompt ("how dik is het sneeuw?");

 if (sneeuw >= 5){
    textMessage.innerHTML = "je hebt online les";
 }
    else if (sneeuw <= 4){
        textMessage.innerHTML = "je hebt op school les";
    }