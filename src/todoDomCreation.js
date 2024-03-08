export const todoDomCreation = function(todo) {
    const todosContent = document.querySelector(".todos");
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
  
    //   Create the checkbox element
    const checkboxContent = document.createElement("div");
    checkboxContent.classList.add("checkbox");
    const checkboxElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxContent.appendChild(checkboxElement);
    todoItem.appendChild(checkboxContent);
  
    //   Create the todoTextContent
    const todoTextContent = document.createElement("div");
    todoTextContent.classList.add("todo-text-content");
  
    //   Create title
    const titleElement = document.createElement("h2");
    titleElement.textContent = "Une tache";
    todoTextContent.appendChild(titleElement);
  
    //   Create description
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "Ceci est une description de Todo";
    todoTextContent.appendChild(descriptionElement);
  
    // Create Due Date
    const dueDateElement = document.createElement("p");
    dueDateElement.textContent = "Due date: 2024-03-04";
    todoTextContent.appendChild(dueDateElement);
  
    //   Create priority ELement
    const priorityElement = document.createElement("p");
    priorityElement.textContent = "Priority: Medium";
    todoTextContent.appendChild(priorityElement);
  
    //   Create noteELement
    const noteELement = document.createElement("p");
    noteELement.textContent = "Note: Ceci est une note de Todo";
    todoTextContent.appendChild(noteELement);
  
    todoItem.appendChild(todoTextContent);
  
    //   Create Edit and Delete buttons
    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("buttons");
  
    //   Create editButton
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    buttonsElement.appendChild(editButton);
  
    //   Create delete buttons
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    buttonsElement.appendChild(deleteButton);
  
    todoItem.appendChild(buttonsElement);
  
    todosContent.appendChild(todoItem);
  }
  