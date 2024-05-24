/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const generateRandomCard = () => {
  let values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "j",
    "q",
    "k",
    "a"
  ];
  let suit = ["♠", "♥", "♦", "♣"];
  let randomValues = values[Math.floor(Math.random() * values.length)];
  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomValues;
  document.querySelector(".bottom").innerHTML = randomSuit;
};
window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function() {
    generateRandomCard();
  });
};
