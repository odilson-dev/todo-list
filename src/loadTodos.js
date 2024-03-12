import { todoDomCreation } from "./todoDomCreation";

export const loadTodos = function (project) {
  const todosContent = document.querySelector(".todo-list");
  todosContent.textContent = "";
  for (const todo of project.todoList) {
    todoDomCreation(todo, project);
  }
};
