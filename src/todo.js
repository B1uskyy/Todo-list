import project from "./project";

let taskList = [];
const content = document.querySelector(".content");

let projectList = []

projectList.push(new project("default") );

class Task {
    constructor(title, description, dueDate, priority) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get priority() {
        return this._priority;
    }

    set dueDate(value) {
        this._dueDate = value;
    }
}


function todoPopup() {
    const todoDiv = document.createElement("div");
    todoDiv.style.display = "none"
    todoDiv.classList.add("todoDiv")

    let titleInput = document.createElement("input");
    let titleDesc = document.createElement("h3");
    titleDesc.innerText = "Title";
    todoDiv.appendChild(titleDesc);
    todoDiv.appendChild(titleInput);

    let descInput = document.createElement("input");
    let desc = document.createElement("h3");
    desc.innerText = "Description";
    todoDiv.appendChild(desc);
    todoDiv.appendChild(descInput);

    let dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    let dueDateDesc = document.createElement("h3");
    dueDateDesc.innerText = "Due Date";
    todoDiv.appendChild(dueDateDesc);
    todoDiv.appendChild(dueDateInput);

    let prioritySelect = document.createElement("select");
    let priorityDesc = document.createElement("h3");
    priorityDesc.innerText = "Priority";
    todoDiv.appendChild(priorityDesc);
    todoDiv.appendChild(prioritySelect);

    let lowOption = document.createElement("option");
    lowOption.value = "Low";
    lowOption.text = "Low";
    prioritySelect.appendChild(lowOption);

    let mediumOption = document.createElement("option");
    mediumOption.value = "Medium";
    mediumOption.text = "Medium";
    prioritySelect.appendChild(mediumOption);

    let highOption = document.createElement("option");
    highOption.value = "High";
    highOption.text = "High";
    prioritySelect.appendChild(highOption);

    let taskButton = document.createElement("button");
    taskButton.innerText = "Add task";
    todoDiv.appendChild(taskButton);

    content.appendChild(todoDiv);


    taskButton.addEventListener("click", () => {
        const newTask = new Task(
            titleInput.value,
            descInput.value,
            dueDateInput.value,
            priorityInput.value
        );
        console.log(newTask);
        taskList.push(newTask);
        renderTasks();
        todoDiv.style.display = "none";

    });
    console.log("-----------------")
    console.log(taskList)

return todoDiv;

}


function renderTasks() {
    let taskParentDiv = document.createElement("div");

    taskList.forEach(task => {
        let taskDiv = document.createElement("div")
        // Create the html elements for the task
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";

        let title = document.createElement("p");
        title.innerText = task.title

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(title);


        taskParentDiv.appendChild(taskDiv);
    })

    content.appendChild(taskParentDiv);
}

export {todoPopup, Task, projectList};