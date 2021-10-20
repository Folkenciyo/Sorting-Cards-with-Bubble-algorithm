/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const DECK = 0;
let cards = []; //[{value: 1, suit: ♣}, {value:4, suit: ♦ } ... }]

window.onload = function() {
  for (let i = 0; i < DECK; i++) {
    cards.push(getCard());
  }
  console.log(cards);
  button();
  input();
  /*  SUBMIT.addEventListener("submit", event => {
    event.preventDefault();
  }); */
  /* submitButon(); */
};

function getCard() {
  return {
    value: VALUES[getRandom(VALUES)],
    suit: SUITS[getRandom(SUITS)]
  };
}

function getRandom(list) {
  let position = Math.floor(Math.random() * list.length);
  return position;
}

function drawCards(cards) {
  for (let card of cards) {
    let cardBody = document.createElement("div");
    cardBody.classList.add("card");
    BODY.appendChild(cardBody);

    let suitup = document.createElement("div");
    suitup.classList.add("suitup");
    cardBody.appendChild(suitup);

    let num = document.createElement("span");
    num.classList.add("num");
    cardBody.appendChild(num);

    let suitdown = document.createElement("div");
    suitdown.classList.add("suitdown");
    cardBody.appendChild(suitdown);

    num.innerHTML = card["value"]; // card.suit;
    suitup.innerHTML = suitdown.innerHTML = card["suit"];

    if (card["suit"] == "♠" || card["suit"] == "♣") {
      suitup.classList.add("color1");
      suitdown.classList.add("color1");
    } else {
      suitup.classList.add("color2");
      suitdown.classList.add("color2");
    }
  }
}

let FORM = document.createElement("form");
FORM.classList.add("form");
BODY.appendChild(FORM);

let INTERACTIONS = document.createElement("div");
INTERACTIONS.classList.add("interactions");
FORM.appendChild(INTERACTIONS);
INTERACTIONS.innerHTML = "USE ME";

function button() {
  let BUTTON = document.createElement("button");
  BUTTON.classList.add("btn");
  INTERACTIONS.appendChild(BUTTON);
  BUTTON.innerHTML = "Get a Card";
  return BUTTON.addEventListener("click", () => {
    drawCards(cards);
  });
}

function input() {
  let INPUT = document.createElement("input");
  INPUT.classList.add("input");
  INTERACTIONS.appendChild(INPUT);
  INPUT.innerHTML = "";
  return INPUT.addEventListener("submit", () => {
    DECK = INPUT + DECK;
  });
}

let SUBMIT = document.querySelector("#SUBMIT");
FORM.appendChild(SUBMIT);

/* function submitButon() {
  let SUBMIT = document.createElement("button");
  SUBMIT.classList.add("btn");

  INTERACTIONS.appendChild(SUBMIT);
  SUBMIT.innerHTML = "ENVIAR";
  SUBMIT.addEventListener("submit", event => {
    event.preventDefault();
    input();
  });
} */
