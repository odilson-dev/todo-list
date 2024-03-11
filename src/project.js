export class Project {
  static idCounter = 0;
  constructor(name) {
    this.name = name;
    this.id = ++Project.idCounter;
    this.todoList = [
      {
        id: 1,
        title: "Todo",
        description: "This is a description",
        dueDate: "2024-03-04",
        priority: "Hight",
        note: "This is a small note for the todo",
        checked: true,
      },
      {
        id: 2,
        title: "Todo",
        description: "This is a description",
        dueDate: "2024-03-04",
        priority: "Hight",
        note: "This is a small note for the todo",
        checked: false,
      },
      {
        id: 3,
        title: "Todo",
        description: "This is a description",
        dueDate: "2024-03-04",
        priority: "Hight",
        note: "This is a small note for the todo",
        checked: true,
      },
    ];
  }
}
