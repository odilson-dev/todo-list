import { listOfProjects } from "./project_creation";

export function editProjectName(project, projectNode) {
  const editDialog = document.getElementById("editDialog");
  const inputEl = editDialog.querySelector("#edit-project");
  const confirmBtnEdit = editDialog.querySelector("#confirmBtnEdit");

  inputEl.value = project.name;

  editDialog.showModal();
  inputEl.addEventListener("change", () => {
    confirmBtnEdit.value = inputEl.value;
  });

  editDialog.addEventListener("close", () => {
    if (editDialog.returnValue != "cancel") {
      // Update listOfProjects
      for (const element of listOfProjects) {
        if (element.name == project.name) {
          element.name = editDialog.returnValue;
        }
      }
      project.name = editDialog.returnValue;
      projectNode.querySelector("h3").textContent = editDialog.returnValue;
      const projectNameLabelH2 = document
        .querySelector(".project-name")
        .querySelector("h2");
      projectNameLabelH2.textContent = editDialog.returnValue;
    }
    window.localStorage.setItem("projects", JSON.stringify(listOfProjects));
  });

  confirmBtnEdit.addEventListener("click", (event) => {
    event.preventDefault();
    editDialog.close(inputEl.value);
  });
}
