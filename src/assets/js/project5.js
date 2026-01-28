const pinDisplay = document.querySelector("#display");
const generateBtn = document.querySelector("#generateBtn");
const historyList = document.querySelector("#historyList");

let pinHistory = [];

function generatePin() {
  const randomNumber = Math.floor(Math.random() * 10000);
  const pin = randomNumber.toString().padStart(4, "0");
  return pin;
}

function displayPIN(pin) {
  pinDisplay.textContent = pin;
}

function handleClick() {
  const newPIN = generatePin();
  displayPIN(newPIN);
}
