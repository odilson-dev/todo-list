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

  // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
  favDialog.addEventListener("close", (e) => {
    createProject(favDialog.returnValue);
  });

  // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    favDialog.close(inputEl.value); // Have to send the select box value here.
  });
};

function createProject(name) {
  const newProject = new Project(name);
  addProjectToDOM(newProject);
}

function addProjectToDOM(project) {
  const outputBox = document.querySelector("output");
  const projectDIV = document.createElement("div");
  projectDIV.innerHTML = `<p>${project.name}</p>`;
  outputBox.appendChild(projectDIV);
}
