import { editProjectName } from "./edit_project";
import { loadTodos } from "./loadTodos";
import { listOfProjects } from "./project_creation";

export let selectedProject;
const projectNameLabelH2 = document
  .querySelector(".project-name")
  .querySelector("h2");

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
  const buttonElements = document.createElement("div");
  buttonElements.classList.add("buttons");

  // Create the project name Element
  const projectName = document.createElement("h2");

  projectName.textContent = project.name;
  projectName.id = project.id;
  projectName.style.cursor = "pointer";
  projectName.addEventListener("click", () => {
    projectNameLabelH2.textContent = project.name;
    loadTodos(project);
  });
  projectNode.appendChild(projectName);

  const editProjectButton = document.createElement("button");
  editProjectButton.textContent = "Edit";
  editProjectButton.classList.add("edit-btn");
  editProjectButton.addEventListener("click", () => {
    editProjectName(project, projectNode);
  });
  buttonElements.appendChild(editProjectButton);

  //   Create delete buttons
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.id = project.id;
  deleteProjectButton.classList.add("delete-btn");

  deleteProjectButton.addEventListener("click", () => {
    const newTaskButton = document.querySelector("#showTodoDialog");
    const todosContent = document.querySelector(".todo-list");
    if (confirm("Do you really want to delete this project?")) {
      console.log("Loll");

      // Remove the todo Item from the corresponded todo in project's todoList
      listOfProjects = listOfProjects.filter(
        (item) => item.id != deleteProjectButton.id
      );
    }
    todosContent.textContent = "";
    projectNameLabelH2.textContent = "";

    if (listOfProjects.length == 0) {
      newTaskButton.classList.add("hide");
    }
    loadProjects(listOfProjects);
  });
  buttonElements.appendChild(deleteProjectButton);
  projectNode.appendChild(buttonElements);

  projectNode.addEventListener("click", () => {
    selectedProject = project;
  });

  outputBox.appendChild(projectNode);
}
