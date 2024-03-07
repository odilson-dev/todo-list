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
    project.name = editDialog.returnValue;
    projectNode.querySelector("h3").textContent = editDialog.returnValue;
    console.log(project.name);
  });

  confirmBtnEdit.addEventListener("click", (event) => {
    event.preventDefault();
    editDialog.close(inputEl.value);
  });
}
