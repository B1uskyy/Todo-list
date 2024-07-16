import project from "./project";
import {projectList} from "./todo";
import renderProject from "./renderProject";

let projects = document.querySelector(".projects")
let content = document.querySelector(".content");

function renderProjects() {
    const projectParentDiv = document.createElement("div");

    console.log("Renderprojects: created parent div")

    projectList.forEach(project => {
        const projectDiv = document.createElement("div");
        let projectName = document.createElement("li");

        projectName.addEventListener("click", () => renderProject(project));

        projectName.innerText = project.name;
        projectDiv.appendChild(projectName)
        projectParentDiv.appendChild(projectDiv);

        console.log(`Renderprojects; created project div for project ${project.name}`)

    })

    return projectParentDiv;
}

export default renderProjects();