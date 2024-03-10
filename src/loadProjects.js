import { editProjectName } from "./edit_project";
import { loadTodos } from "./loadTodos";
import { listOfProjects } from "./project_creation";

export const loadProjects = function (listOfProjects) {
  const outputBox = document.querySelector("output");
  outputBox.textContent = "";
  for (const project of listOfProjects) {
    addProjectToDOM(project, outputBox);
  }
};

function addProjectToDOM(project, outputBox) {
  const projectNode = document.createElement("div");
  projectNode.classList.add("project");
  projectNode.addEventListener("click", () => {
    loadTodos(project);
  });
  projectNode.innerHTML = `<h2>${project.name}</h2>`;

  const editProjectButton = document.createElement("button");
  editProjectButton.textContent = "Edit";
  editProjectButton.addEventListener("click", () => {
    editProjectName(project, projectNode);
  });
  projectNode.appendChild(editProjectButton);

  //   Create delete buttons
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.id = project.id;
  deleteProjectButton.classList.add("delete-btn");

  deleteProjectButton.addEventListener("click", () => {
    const newTaskButton = document.querySelector("#showTodoDialog");
    // Remove the todo Item from the corresponded todo in project's todoList
    listOfProjects = listOfProjects.filter(
      (item) => item.id != deleteProjectButton.id
    );
    if (listOfProjects.length == 0) {
      newTaskButton.classList.add("hide");
    }
    loadProjects(listOfProjects);
  });
  projectNode.appendChild(deleteProjectButton);

  outputBox.appendChild(projectNode);
}
