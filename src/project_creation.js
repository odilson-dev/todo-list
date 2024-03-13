import { loadProjects } from "./loadProjects";
import { Project } from "./project";
localStorage.clear();
export let listOfProjects = window.localStorage.getItem("projects")
  ? JSON.parse(window.localStorage.getItem("projects"))
  : [
      {
        id: -1,
        name: "TaskMaster",
        todoList: [
          {
            id: -1,
            title: "Learn JavaScript Fundamentals",
            description:
              "Study basic concepts like variables, data types, and control flow.",
            dueDate: "2024-04-15",
            priority: "Low",
            note: "Practice coding examples to reinforce learning.",
            checked: false,
          },
          {
            id: -2,
            title: "Build Portfolio Website",
            description:
              "Create a personal website to showcase projects and skills.",
            dueDate: "2024-04-30",
            priority: "Medium",
            note: "Include a contact form for potential employers.",
            checked: false,
          },
          {
            id: -3,
            title: "Attend Networking Event",
            description:
              "Participate in a local meetup or online community event.",
            dueDate: "2024-05-05",
            priority: "Hight",
            note: "Bring business cards and be prepared to introduce yourself.",
            checked: false,
          },
          {
            id: -4,
            title: "Read JavaScript Book",
            description:
              "Read a recommended book on JavaScript programming language.",
            dueDate: "2024-04-20",
            priority: "Medium",
            note: "Take notes and practice code examples from the book.",
            checked: false,
          },
        ],
      },
      {
        id: -2,
        name: "TaskGenius",
        todoList: [
          {
            id: -5,
            title: "Complete Coding Challenge",
            description:
              "Solve a programming problem to practice problem-solving skills.",
            dueDate: "2024-04-10",
            priority: "Medium",
            note: "Allocate dedicated time each day to work on the challenge.",
            checked: false,
          },
          {
            id: -6,
            title: "Update Resume",
            description:
              "Revise resume with recent projects, skills, and experience.",
            dueDate: "2024-04-20",
            priority: "Hight",
            note: "Tailor resume for specific job applications.",
            checked: false,
          },
          {
            id: -7,
            title: "Prepare for Technical Interview",
            description:
              "Review data structures, algorithms, and practice coding problems.",
            dueDate: "2024-04-25",
            priority: "Low",
            note: "Simulate interview scenarios with mock interviews or coding challenges.",
            checked: false,
          },
          {
            id: -8,
            title: "Contribute to Open Source Project",
            description:
              "Find an open-source project and make a meaningful contribution.",
            dueDate: "2024-05-10",
            priority: "Medium",
            note: "Select a project aligned with personal interests or skills.",
            checked: false,
          },
        ],
      },
    ];

loadProjects(listOfProjects);
const newTaskButton = document.querySelector("#showTodoDialog");

export const handleProjectCreation = function () {
  const showButton = document.getElementById("showDialog");
  const favDialog = document.getElementById("favDialog");
  const inputEl = favDialog.querySelector("#new-project");
  const confirmBtn = favDialog.querySelector("#confirmBtn");
  if (listOfProjects.length == 0) {
    newTaskButton.classList.add("hide");
  }
  showButton.addEventListener("click", () => {
    favDialog.showModal();
  });

  inputEl.addEventListener("change", (e) => {
    confirmBtn.value = inputEl.value;
  });

  favDialog.addEventListener("close", (e) => {
    createProject(favDialog.returnValue);
  });

  confirmBtn.addEventListener("click", (event) => {
    event.preventDefault();
    favDialog.close(inputEl.value);
  });
};

function createProject(name) {
  const newProject = new Project(name);
  listOfProjects.push(newProject);
  window.localStorage.setItem("projects", JSON.stringify(listOfProjects));
  loadProjects(JSON.parse(window.localStorage.getItem("projects")));
  if (listOfProjects.length == 1) {
    newTaskButton.classList.remove("hide");
  }
}
