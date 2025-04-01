import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard()
  document.querySelector('#realButton').addEventListener('click',generateCard)
};

const generateCard =()=>{
  let allSuits = ["♦", "♥", "♠", "♣"];
  let allNumbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A"
  ];
  let indexAllNumbers = Math.floor(Math.random() * allNumbers.length);

  let indexAllSuits = Math.floor(Math.random() * allSuits.length);

document.querySelector('.number').innerHTML = allNumbers[indexAllNumbers];
document.querySelector('.top-suit').innerHTML = allSuits[indexAllSuits];
document.querySelector('.bottom-suit').innerHTML = allSuits[indexAllSuits];

if (allSuits[indexAllSuits] === "♦" || allSuits[indexAllSuits] === "♥") {
  document.querySelector(".card").style.color = "red";
} else {
  document.querySelector(".card").style.color = "black";
}  
}

  // create random indexes
  // define random suit and rank using index
  // create conditional statement to style red or black based on suit
  // use document.querySelector to replace existing HTML
