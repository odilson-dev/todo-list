export class Todo {
  static todoID = 0;
  constructor(title, description, dueDate, priority, note, projectID) {
    this.id = ++Todo.todoID;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.projectID = projectID;
    this.checked = false;
  }
}
