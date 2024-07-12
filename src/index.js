import "./style.css"
import { todoPopup, projectList } from "./todo";
import project from "./project";
import displayProject from "./displayProject";

let content = document.querySelector(".content")
let projects = document.querySelector(".projects")
let createButton = document.querySelector(".createButton");
let popupDiv = todoPopup();

createButton.addEventListener("click", () => {
    popupDiv.style.display = "block";
});


projects.appendChild(displayProject);




