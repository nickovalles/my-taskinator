var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");


var createTaskHandler = function(event) {
  event.preventDefault();

  var listItemE1 = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task";
  tasksToDoEl.appendChild(listItemEl);
};










  // Event Listener for the form
  formEl.addEventListener("submit", createTaskHandler);