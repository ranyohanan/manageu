
//manageu

class Task {
    public id: number;
    public completed: boolean;

    constructor(public description: string) {
        this.id = Math.floor(Math.random() * 1000);
        this.description = description;
        this.completed = false;
    }
}
let task1 = new Task("hw");
console.log(task1);


class TaskManager {
    public tasks: Task[];
    constructor() {
        this.tasks = [];
    }
    addTask(description: string) {
        this.tasks.push(new Task(description));
    }
    deleteTask(id: number): void {
        let indexToDelete = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks.splice(indexToDelete, 1);
    }
    updateTaskDescription(id: number, newDescription: string): void {
        let toUpdate = this.tasks.findIndex((task: Task) => task.id == id)
        this.tasks[toUpdate].description = newDescription;
    }
    completeTask(id: number): void {
        let indexToUpdate = this.tasks.findIndex((task: Task) => task.id == id);
        this.tasks[indexToUpdate].completed = true;

    }
}
let manager = new TaskManager();
manager.addTask("Dishes");
manager.addTask("Home work");
console.log(manager.tasks);

/* function showTasksInTable(): void {
    for (let task of manager.tasks) {
        document.getElementById("tasks")!.innerHTML += `<tr><td>${task.id}</td><td>${task.description}</td><td>${task.completed}</td></tr>`;
    }
}
showTasksInTable(); */

function ShowTasks() {
    document.getElementById("list")!.innerHTML = "";
    document.getElementById("listCompleted")!.innerHTML = "";
    for (let task of manager.tasks) {
        if (task.completed == false) {
            document.getElementById("list")!.innerHTML += `<div> <li class="list-group-item d-inline-block w-25 text-start">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div>`;
            localStorage.setItem("user1", JSON.stringify(manager.tasks));
        }
        else {
            document.getElementById("listCompleted")!.innerHTML += `<div> <li class="list-group-item d-inline-block w-25 text-decoration-line-through text-start">${task.description}</li> <span> <button class="btn btn-success" onclick="completeTask(${task.id})"><i class="fa-solid fa-check"></i></button> <button class="btn btn-primary" onclick="updateDescription(${task.id})"><i class="fa-solid fa-pen"></i></button> <button class="btn btn-danger onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button></span> </div>`;
        }
    }
}
ShowTasks();


function addMission() {
    let mission = (document.getElementById('newTask') as HTMLInputElement)!.value;

    manager.addTask(mission);
    (document.getElementById("newTask") as HTMLInputElement).value = "";

    ShowTasks();
}


function completeTask(id: number) {
    manager.completeTask(id);
    ShowTasks();

}
function deleteTask(id: number) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        ShowTasks();
    }
}

function updateDescription(id: number) {
    let newDescription = prompt('Enter New Description:');
    if (newDescription !== null || newDescription !== "") {
        manager.updateTaskDescription(id, newDescription!)
        ShowTasks();
    }
    else alert("Sorry something went wrong")
}
