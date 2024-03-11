import { editTodos } from "./edit_todos";
import { loadTodos } from "./loadTodos";
export const todoDomCreation = function (todo, project) {
  const todosContent = document.querySelector(".todos");
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo");

  switch (todo.priority.toLowerCase()) {
    case "hight":
      todoItem.classList.add("red-border");
      break;
    case "medium":
      todoItem.classList.add("orange-border");
      break;
    case "low":
      todoItem.classList.add("green-border");
      break;

    default:
      break;
  }
  //   Create title
  const titleElement = document.createElement("h2");
  titleElement.textContent = todo.title;
  //   Create description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = todo.description;

  //   Create the checkbox element
  const checkboxContent = document.createElement("div");
  checkboxContent.classList.add("checkbox");

  //   Create editButton
  const editButton = document.createElement("button");

  const checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";
  if (todo.checked) {
    checkboxElement.checked = true;
    titleElement.style.textDecoration = "line-through";
    descriptionElement.style.textDecoration = "line-through";
    editButton.classList.add("hide");
  } else {
    titleElement.style.textDecoration = "none";
    descriptionElement.style.textDecoration = "none";
    editButton.classList.remove("hide");
  }
  checkboxElement.addEventListener("click", () => {
    if (checkboxElement.checked) {
      titleElement.style.textDecoration = "line-through";
      descriptionElement.style.textDecoration = "line-through";
      editButton.classList.add("hide");
      todo.checked = true;
    } else {
      titleElement.style.textDecoration = "none";
      descriptionElement.style.textDecoration = "none";
      editButton.classList.remove("hide");
      todo.checked = false;
    }
  });
  checkboxContent.appendChild(checkboxElement);
  todoItem.appendChild(checkboxContent);

  //   Create the todoTextContent
  const todoTextContent = document.createElement("div");
  todoTextContent.classList.add("todo-text-content");

  todoTextContent.appendChild(titleElement);

  todoTextContent.appendChild(descriptionElement);

  todoItem.appendChild(todoTextContent);

  //   Create Edit and Delete buttons
  const buttonsElement = document.createElement("div");
  buttonsElement.classList.add("buttons");

  editButton.textContent = "Edit";
  editButton.classList.add("edit-btn");
  editButton.id = todo.id;
  editButton.addEventListener("click", () => {
    document
      .getElementById("editTodoDialog")
      .querySelector('input[name="id"]').value = todo.id;
    editTodos(todo, project);
  });
  buttonsElement.appendChild(editButton);

  //   Create delete buttons
  const deleteButton = document.createElement("button");
  deleteButton.id = todo.id;
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");
  deleteButton.addEventListener("click", () => {
    // Remove the todo Item from the corresponded todo in project's todoList
    project.todoList = project.todoList.filter(
      (item) => item.id != deleteButton.id
    );
    loadTodos(project);
  });
  buttonsElement.appendChild(deleteButton);

  todoItem.appendChild(buttonsElement);

  todosContent.appendChild(todoItem);
};
