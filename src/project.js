export class Project {
  static idCounter = 0;
  constructor(name) {
    this.name = name;
    this.id = ++Project.idCounter;
    this.todoList = [];
  }
}
