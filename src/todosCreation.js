import { Todo } from "./todo";
import { selectedProject } from "./loadProjects";
import { loadTodos } from "./loadTodos";
export const handleTodoCreation = function () {
  const showTodoDialog = document.querySelector("#showTodoDialog");
  const todoDialog = document.querySelector("#todoDialog");
  const confirmBtn = todoDialog.querySelector("#confirmBtn");

  const inputElements = todoDialog.getElementsByClassName("input");

  showTodoDialog.addEventListener("click", () => {
    todoDialog.showModal();
  });

  // "Cancel" button closes the dialog without submitting because of [form method="dialog"], triggering a close event.
  todoDialog.addEventListener("close", (e) => {
    let newTodoData;
    if (todoDialog.returnValue != "cancel") {
      newTodoData = todoDialog.returnValue
        .split(", ")
        .reduce((acc, currentValue) => {
          const [key, value] = currentValue.split(": ");
          acc[key.trim()] = isNaN(value) ? value : parseInt(value);
          return acc;
        }, {});
    }

    selectedProject.todoList.push(createTodo(newTodoData));
    loadTodos(selectedProject);
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    let data = [];

    for (const element of inputElements) {
      if (element.type == "radio") {
        if (element.checked) {
          data.push(`${element.name}: ${element.value}`);
        } else {
          continue;
        }
      }
      data.push(`${element.name}: ${element.value}`);
    }

    todoDialog.close(data.join(", "));
  });
};

function createTodo(data) {
  const todo = new Todo(
    data.title,
    data.description,
    data.due_date,
    data.priority,
    data.note
  );
  return todo;
}
