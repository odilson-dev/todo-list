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
      project.name = editDialog.returnValue;
      projectNode.querySelector("h2").textContent = editDialog.returnValue;
      const projectNameLabelH2 = document
        .querySelector(".project-name")
        .querySelector("h2");
      projectNameLabelH2.textContent = editDialog.returnValue;
    }
  });

  confirmBtnEdit.addEventListener("click", (event) => {
    event.preventDefault();
    editDialog.close(inputEl.value);
  });
}
