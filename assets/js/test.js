

function createTask(task){
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
            <input type="checkbox" name="task" id="taskCheck">
            <label for="task">
            ${task}
            </label>
            <input type="button" value="X" id="delTask">
    `
    document.querySelector('#taskList').appendChild(taskElement);
}

 const addTask = document.querySelector('#addTask');
    addTask.addEventListener('click', function(e){
        e.preventDefault();
        const input = document.querySelector('#toDoInput');
        const task1 = input.value;
        createTask(task1);
        input.value = '';
    });

    function clearTask() {
        document.getElementById("task")
        .outerHTML = "";
    }

    const delTask = document.querySelector('#delTask');
    delTask.addEventListener('click', clearTask());