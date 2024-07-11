

class task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get title() {
        return this.title
    }

    get description {
        return this.description;
    }

    get dueDate {
        return this.dueDate;
    }

    get priority {
        return this.priority;
    }

    set dueDate(value) {
        this.dueDate = value;
    }

}


function addTask() {
    const content = document.querySelector(".content");
    const todoDiv = document.createElement("div");


    todoDiv.innerText = "Im a new todo!"



    content.appendChild(todoDiv);

}

export default addTask();