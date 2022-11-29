

let bancoToDo = [];



function createToDo (task, status='', indice) {
    const toDo = document.createElement('label');
    toDo.classList.add('newToDo');
    toDo.innerHTML += `
    <input type="checkbox" ${status} name="checkToDo" id="checkToDo" data-indice=${indice}> 
            <div class="toDoBody">
                ${task}
            </div>
            <button type='button' id='deleteToDo' data-indice=${indice}>X</button>
    `

    document.querySelector('#toDoList').appendChild(toDo);
}

const cleanTasks = () => {
    const taskList = document.querySelector("#toDoList");
    while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
    }
}

const uptadeScreen = () => {
    document.querySelector('#toDoList').innerHTML = '';
    cleanTasks();
    bancoToDo.forEach((toDo, indice) => {
        createToDo(toDo.tarefa, toDo.status, indice)
    });
}

const addTask = (evento) => {
    const tecla = evento.key;
    if(tecla === 'Enter'){
        const input = document.querySelector('#toDoInput');
        const task = input.value;
        bancoToDo.push({'tarefa': task, 'status': ''});
        uptadeScreen();
        input.value = '';
    }
}

const removeItem = (indice) => {
    bancoToDo.splice(indice, 1);
    uptadeScreen();
}

const updateItem = () => {
    const indice = elemento.dataset.indice;
    bancoToDo[indice].status = bancoToDo[indice].status === '' ? 'checked' : '';
    uptadeScreen();
}

const click = (evento) => {
    const elemento = evento.target;
    console.log(elemento);
    if(elemento.type === 'button'){
        const indice = elemento.dataset.indice;
        removeItem(indice);
    } else if (elemento.type === 'checkbox'){
        const indice = elemento.dataset.indice;
        updateItem(indice);
    }



    // if(elemento.id === 'deleteToDo'){
    //     const toDo = elemento.parentElement;
    //     const toDoText = toDo.querySelector('.toDoBody').innerText;
    //     bancoToDo = bancoToDo.filter((toDo) => toDo.tarefa !== toDoText);
    //     uptadeScreen();
    //}

}



document.querySelector('#toDoInput').addEventListener('keypress', addTask);
document.querySelector('#toDoList').addEventListener('click', click);



uptadeScreen();













const sendToDo = document.querySelector('#createToDo');

sendToDo.addEventListener('click', function (e){
    e.preventDefault();
    const input = document.querySelector('#toDoInput');
    const task = input.value;
    bancoToDo.push({'tarefa': task, 'status': ''});
    uptadeScreen();
    input.value = '';
});


