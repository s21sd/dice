// for the first dice Image.๐
var randomNumber1=Math.floor(Math.random()*6)+1;
// randomNumber1=randomNumber1*6;
// randomNumber1=Math.floor(randomNumber1)+1;
var randomImage1= "/images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImage1);

// for the second dice Image๐
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImage2= "/images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

// for changing the h1 heading we use here if else if statement๐๐
if(randomNumber1>randomNumber2)
{

    document.querySelector("h1").innerHTML="๐Player 1 wins!"
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins!๐"
}
else{
    document.querySelector("h1").innerHTML="Dwaw!๐ถโ๐ซ๏ธ๐ถโ๐ซ๏ธ"
}