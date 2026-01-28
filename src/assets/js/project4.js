const inputTask = document.querySelector("#inputTask");
const taskList = document.querySelector("#tasks");

function submitTask() {
  // Don't add empty tasks
  if (inputTask.value === "") return;

  // Create new task item
  const newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.innerHTML = `
    <input type="checkbox">
    <label>${inputTask.value}</label>
    <span class="delete cursor-pointer">&times;</span>
  `;

  // Add delete functionality
  const deleteBtn = newTask.querySelector(".delete");
  deleteBtn.onclick = function () {
    newTask.remove();
  };

  // Add task to list and clear input
  taskList.appendChild(newTask);
  inputTask.value = "";
}
