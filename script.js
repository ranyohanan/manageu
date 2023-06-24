//manageu
var Task = /** @class */ (function () {
    function Task(description) {
        this.description = description;
        this.id = Math.floor(Math.random() * 1000);
        this.description = description;
        this.completed = false;
    }
    return Task;
}());
var task1 = new Task("hw");
console.log(task1);
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (description) {
        this.tasks.push(new Task(description));
    };
    TaskManager.prototype.deleteTask = function (id) {
        var indexToDelete = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks.splice(indexToDelete, 1);
    };
    TaskManager.prototype.updateTaskDescription = function (id, newDescription) {
        var toUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[toUpdate].description = newDescription;
    };
    TaskManager.prototype.completeTask = function (id) {
        var indexToUpdate = this.tasks.findIndex(function (task) { return task.id == id; });
        this.tasks[indexToUpdate].completed = true;
    };
    return TaskManager;
}());
var manager = new TaskManager();
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
    document.getElementById("list").innerHTML = "";
    document.getElementById("listCompleted").innerHTML = "";
    for (var _i = 0, _a = manager.tasks; _i < _a.length; _i++) {
        var task = _a[_i];
        if (task.completed == false) {
            document.getElementById("list").innerHTML += "<div> <li class=\"list-group-item d-inline-block w-25 text-start\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i></button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger\" onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div>");
            localStorage.setItem("user1", JSON.stringify(manager.tasks));
        }
        else {
            document.getElementById("listCompleted").innerHTML += "<div> <li class=\"list-group-item d-inline-block w-25 text-decoration-line-through text-start\">".concat(task.description, "</li> <span> <button class=\"btn btn-success\" onclick=\"completeTask(").concat(task.id, ")\"><i class=\"fa-solid fa-check\"></i></button> <button class=\"btn btn-primary\" onclick=\"updateDescription(").concat(task.id, ")\"><i class=\"fa-solid fa-pen\"></i></button> <button class=\"btn btn-danger onclick=\"deleteTask(").concat(task.id, ")\"><i class=\"fa-solid fa-trash\"></i></button></span> </div>");
        }
    }
}
ShowTasks();
function addMission() {
    var mission = document.getElementById('newTask').value;
    manager.addTask(mission);
    document.getElementById("newTask").value = "";
    ShowTasks();
}
function completeTask(id) {
    manager.completeTask(id);
    ShowTasks();
}
function deleteTask(id) {
    // confirm "Are you sure?"
    if (confirm("Are you sure?")) {
        manager.deleteTask(id);
        ShowTasks();
    }
}
function updateDescription(id) {
    var newDescription = prompt('Enter New Description:');
    if (newDescription !== null || newDescription !== "") {
        manager.updateTaskDescription(id, newDescription);
        ShowTasks();
    }
    else
        alert("Sorry something went wrong");
}
