const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");
const doneList = document.getElementById("doneList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    taskItem.innerHTML = `
      <span>${taskText}</span>
      <button class="btn btn-sm btn-outline-light mark-done-btn">✔</button>
    `;

    todoList.appendChild(taskItem);

    taskItem
      .querySelector(".mark-done-btn")
      .addEventListener("click", () => {
        taskItem.remove();
        taskItem.querySelector(".mark-done-btn").remove();
        doneList.appendChild(taskItem);
      });

    taskInput.value = ""; 
  } 
});