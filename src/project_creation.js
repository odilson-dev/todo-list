import { editProjectName } from "./edit_project";
import { loadTodos } from "./loadTodos";
import { Project } from "./project";
export const handleProjectCreation = function () {
  const showButton = document.getElementById("showDialog");
  const favDialog = document.getElementById("favDialog");
  const inputEl = favDialog.querySelector("#new-project");
  const confirmBtn = favDialog.querySelector("#confirmBtn");
  

  // "Show the dialog" button opens the <dialog> modally
  showButton.classList.add("hello");
  showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  inputEl.addEventListener("change", (e) => {
    confirmBtn.value = inputEl.value;
  });

  favDialog.addEventListener("close", (e) => {
    createProject(favDialog.returnValue);
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    favDialog.close(inputEl.value);
  });
};

function createProject(name) {
  const newProject = new Project(name);
  addProjectToDOM(newProject);
}

function addProjectToDOM(project) {
  const outputBox = document.querySelector("output");
  const projectNode = document.createElement("div");
  projectNode.classList.add("project");
  projectNode.addEventListener("click", () => {
    loadTodos(project);
  });
  projectNode.innerHTML = `<h3>${project.name}</h3>`;

  const editProjectButton = document.createElement("button");
  editProjectButton.textContent = "Edit";
  editProjectButton.addEventListener("click", () => {
    editProjectName(project, projectNode);
  });
  projectNode.appendChild(editProjectButton);

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.addEventListener("click", () => {
    deleteProject(projectNode);
  });
  projectNode.appendChild(deleteProjectButton);

  outputBox.appendChild(projectNode);
}

function deleteProject(projectNode) {
  projectNode.remove();
}
