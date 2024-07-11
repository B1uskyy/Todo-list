
let taskList = [];

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
    const content = document.querySelector(".content");
    const todoDiv = document.createElement("div");

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

    let priorityInput = document.createElement("input");
    let priorityDesc = document.createElement("h3");
    priorityDesc.innerText = "Priority";
    todoDiv.appendChild(priorityDesc);
    todoDiv.appendChild(priorityInput);

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

    });
    console.log("-----------------")
    console.log(taskList)



}

export {todoPopup};