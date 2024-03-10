import { loadProjects } from "./loadProjects";
import { Project } from "./project";
export let listOfProjects = [];
const newTaskButton = document.querySelector("#showTodoDialog");

export const handleProjectCreation = function () {
  const showButton = document.getElementById("showDialog");
  const favDialog = document.getElementById("favDialog");
  const inputEl = favDialog.querySelector("#new-project");
  const confirmBtn = favDialog.querySelector("#confirmBtn");
  if (listOfProjects.length == 0) {
    newTaskButton.classList.add("hide");
  }
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
  listOfProjects.push(newProject);
  loadProjects(listOfProjects);
  if (listOfProjects.length == 1) {
    newTaskButton.classList.remove("hide");
  }
}
