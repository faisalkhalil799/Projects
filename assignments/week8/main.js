const form = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const label = document.querySelector('label');
const sortbyName = document.querySelector('.sort-by-name');
const sortByTime = document.querySelector('.sort-by-time');

let seconds = 2;

// let todoList = [];
// localStorage.setItem('todos', JSON.stringify(todoList));

function generateTemplate(todo) {
    const item = `<li class="list-group-item">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`

    list.innerHTML += item;
}

const todoItems = JSON.parse(localStorage.getItem('todos'));
for (let todo = 0; todo < todoItems.length; todo++) {
    generateTemplate(todoItems[todo].todo);
}


form.addEventListener('submit', e => {

    label.innerText = 3;

    let timeVariable = setInterval(() => {
        label.innerText = seconds;
        seconds = seconds - 1;
    }, 1000);

    e.preventDefault();
    setTimeout(() => {

        window.clearInterval(timeVariable);
        label.innerText = "Add a new todo...";
        seconds = 2;
        const todo = form.add.value.trim();
        if (todo.length) {
            const allToDos = localStorage.getItem('todos');
            let arr = JSON.parse(allToDos);
            let obj = {todo:todo,date:new Date()};
            localStorage.setItem('todos', JSON.stringify([...arr, obj]));
            generateTemplate(todo);
            form.reset();

        } else {
            label.innerText = "Please add something.";
        }
    }, 3000);

});


list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        const allToDos = localStorage.getItem('todos');
        let arr = JSON.parse(allToDos);
        const res = arr.filter((value) => {
            return value.todo !== e.target.parentElement.innerText;
        });
        localStorage.setItem('todos', JSON.stringify([...res]));
        e.target.parentElement.remove();
    }
});


function theSearch(temp) {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(temp))
        .forEach(todo => todo.classList.add('filtered'))

    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(temp))
        .forEach(todo => todo.classList.remove('filtered'))
}



search.addEventListener('keyup', e => {

    const temp = search.value.trim();
    theSearch(temp);

});


sortbyName.addEventListener('click', () => {

    sortbyName.classList.add('primary-color');
    if(sortByTime.classList.contains('primary-color')) {
        sortByTime.classList.remove('primary-color');
    }

    const allToDos = localStorage.getItem('todos');
    let arr = JSON.parse(allToDos);
    arr.sort((a,b) => {
        if(a.todo>b.todo) {
            return 1;
        }else if(b.todo>a.todo) {
            return -1;
        } else {
            return 0;
        }
    });
    list.innerHTML = "";
    for(let todo=0;todo<arr.length;todo++) {
        generateTemplate(arr[todo].todo);
    }
    localStorage.setItem('todos', JSON.stringify([...arr]));
});



sortByTime.addEventListener('click', () => {

    sortByTime.classList.add('primary-color');
    if(sortbyName.classList.contains('primary-color')) {
        sortbyName.classList.remove('primary-color');
    }


    const allToDos = localStorage.getItem('todos');
    let arr = JSON.parse(allToDos);
    arr.sort((a,b) => {
        let t1 = new Date(a.date).getTime();
        let t2 = new Date(b.date).getTime();
        if(t1>t2) {
            return 1;
        }else if(t2>t1) {
            return -1;
        } else {
            return 0;
        }
    });
    list.innerHTML = "";
    for(let todo=0;todo<arr.length;todo++) {
        generateTemplate(arr[todo].todo);
    }
    localStorage.setItem('todos', JSON.stringify([...arr]));
});