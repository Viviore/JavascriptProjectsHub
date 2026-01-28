let name;
let color;
let food;

document.getElementById("submit").onclick = function () {
  name = document.getElementById("fullName").value;
  color = document.getElementById("favoriteFood").value;
  food = document.getElementById("favoriteColor").value;

  if (!name || !color || !food) {
    alert("Please fill in all fields!");
  }

  document.getElementById(
    "output"
  ).textContent = `Hello, my name is ${name}! My favorite color is ${color}, and my favorite food is ${food} `;
};
