var x=Math.floor(Math.random()*6)+1;

var x_image="dice"+x+".png";
var x_imgsource="images/"+x_image;
document.querySelectorAll("img")[0].setAttribute("src", x_imgsource);
var y=Math.floor(Math.random()*6)+1;

var y_image="dice"+y+".png";
var y_imgsource="images/"+y_image;
document.querySelectorAll("img")[1].setAttribute("src", y_imgsource);



if(x>y){
  document.querySelector("h1").innerHTML="🚩Player1 Wins";

}
else if(x<y){
  document.querySelector("h1").innerHTML="Player2 Wins🚩";

}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
