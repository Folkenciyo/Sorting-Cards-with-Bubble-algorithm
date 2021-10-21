/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let DECK = 0;
let cards = []; //[{value: 1, suit: ♣}, {value:4, suit: ♦ } ... }]

window.onload = function() {
  addInput();
  putCardsOnTable();
};
//Devuelve un diccionario con valores aleatorios para el suit y el number de la carta
function getCard() {
  return {
    value: VALUES[getRandom(VALUES)],
    suit: SUITS[getRandom(SUITS)]
  };
}
//Da un numero aleatorio
function getRandom(list) {
  let position = Math.floor(Math.random() * list.length);
  return position;
}
//dibuja la carta dandole un cuerpo añadiendo un suit arriba, un numero al centro, un suit abajo
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
    //diferencia el color dependiendo del palo
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
// div donde se encuentran todos los elementos interactivos
let INTERACTIONS = document.createElement("div");
INTERACTIONS.classList.add("interactions");
FORM.appendChild(INTERACTIONS);
// Input donde meteremos el numero de cartas a jugar
const addInput = () => {
  let INPUT = document.createElement("input");
  INTERACTIONS.appendChild(INPUT);

  INPUT.addEventListener("focusout", event => {
    console.log(INPUT.value);
    DECK = INPUT.value;
  });
};
//la funcion del boton es colocar todas las cartas sobre la mesa.
function putCardsOnTable() {
  let BUTTON = document.createElement("button");
  BUTTON.classList.add("btn");
  INTERACTIONS.appendChild(BUTTON);
  BUTTON.innerHTML = "Get Cards";
  BUTTON.addEventListener("click", event => {
    event.preventDefault();
    for (let i = 0; i < DECK; i++) {
      cards.push(getCard());
    }
    drawCards(cards);
  });
}
