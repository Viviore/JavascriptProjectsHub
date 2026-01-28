const display = document.querySelector("#display");

function appendToDisplay(input) {
  display.value += input;
  display.style.color = "black";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}
