import {Task} from "./todo";
import {projectList} from "./todo";

const content = document.querySelector(".content");
let taskDisplayArea = document.createElement("div");
taskDisplayArea.id = "taskDisplayArea";
content.appendChild(taskDisplayArea);

function renderProject(project) {
    let taskDisplay = document.getElementById("taskDisplayArea");
    taskDisplay.innerHTML = "";
    let projectName = project.name;

    console.log("Running renderProject function");

    if (project.tasks.length === 0) {
        console.log(`No tasks for project: ${projectName}`);
    } else {
        project.tasks.forEach((task) => {
            // Create div for task
            let taskDiv = document.createElement("div");

            // Append the information for the task
            let taskHeader = document.createElement("h3");
            taskHeader.innerText = task.title; // Assuming tasks have a title property

            taskDiv.appendChild(taskHeader);
            // Add the div to the content page
            content.appendChild(taskDiv);

            console.log("Displaying project");
        });
    }
}

export default renderProject;