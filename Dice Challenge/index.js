
var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomDiceImage1 = "dice"+randomNumber1+".png";
var imgSource1 = "images/"+randomDiceImage1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imgSource1)

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "dice"+randomNumber2+".png";
var imgSource2 = "images/"+randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imgSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player1 is the winner";

}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 is the winner ";

}
else{
    document.querySelector("h1").innerHTML = "draw ";
}
   
