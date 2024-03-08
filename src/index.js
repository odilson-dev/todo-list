import { handleProjectCreation } from "./project_creation";
import "./style.css";
import { handleTodoCreation } from "./todosCreation";
import { todoDomCreation } from "./todoDomCreation";
handleProjectCreation();
handleTodoCreation();
todoDomCreation({
  title: "Todo",
  description: "This is a description",
  dueDate: "2024-03-04",
  priority: "Hight",
  note: "This is a small note for the todo, and i don't care",
});
