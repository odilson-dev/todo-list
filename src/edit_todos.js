import { loadTodos } from "./loadTodos";
import { listOfProjects } from "./project_creation";

export const editTodos = function (todo, project) {
  const editTodoDialog = document.getElementById("editTodoDialog");
  const inputElements = editTodoDialog.querySelectorAll(".input");
  const confirmBtn = editTodoDialog.querySelector("#confirmBtn");

  const todoTitleInput = editTodoDialog.querySelector('input[name="title"]');
  todoTitleInput.value = todo.title;

  const todoDescriptionInput = editTodoDialog.querySelector(
    'input[name="description"]'
  );
  todoDescriptionInput.value = todo.description;

  const todoDueDateInput = editTodoDialog.querySelector(
    'input[name="due_date"]'
  );
  todoDueDateInput.value = todo.dueDate;

  const todoPriorityInputs = editTodoDialog.querySelectorAll(
    'input[name="priority"]'
  );

  for (const iterator of todoPriorityInputs) {
    if (iterator.value === todo.priority.toLowerCase()) {
      iterator.checked = true;
    }
  }
  const todoNoteInput = editTodoDialog.querySelector('textarea[name="note"]');
  todoNoteInput.value = todo.note;
  editTodoDialog.showModal();

  editTodoDialog.addEventListener("close", (e) => {
    let todoUpdatedData;
    if (editTodoDialog.returnValue != "cancel") {
      todoUpdatedData = editTodoDialog.returnValue
        .split(", ")
        .reduce((acc, currentValue) => {
          const [key, value] = currentValue.split(": ");
          acc[key.trim()] = isNaN(value) ? value : parseInt(value);
          return acc;
        }, {});
      if (todo.id == todoUpdatedData.id) {
        todo.title = todoUpdatedData.title;
        todo.description = todoUpdatedData.description;
        todo.dueDate = todoUpdatedData.due_date;
        todo.priority = todoUpdatedData.priority;
        todo.note = todoUpdatedData.note;
      }
      // Update listOfProjects
      for (const element of listOfProjects) {
        if (element.id == project.id) {
          for (let todoItem of element.todoList) {
            if (todo.id == todoItem.id) {
              todoItem = todo;
            }
          }
        }
      }
      window.localStorage.setItem("projects", JSON.stringify(listOfProjects));
      loadTodos(project);
    }
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
    editTodoDialog.close(data.join(", "));
  });
};
