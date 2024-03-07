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
  const projectNode = document.createElement("div");
  projectNode.classList.add("project");
  projectNode.innerHTML = `<h3>${project.name}</h3>`;

  const editProjectButton = document.createElement("button");
  editProjectButton.textContent = "Edit";
  projectNode.appendChild(editProjectButton);

  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.addEventListener("click", () => {
    console.log("Haha");
    deleteProject(projectNode);
  });
  projectNode.appendChild(deleteProjectButton);

  outputBox.appendChild(projectNode);
}

function deleteProject(projectNode) {
  projectNode.remove();
}
