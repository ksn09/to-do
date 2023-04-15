const input = document.querySelector('#input-box');
const add = document.querySelector('#btn');
const task = document.getElementById('task');


function addTask() {
    if(input.value === ''){
        document.querySelector('.error').style.display = `block`;
        document.querySelector('.error').innerText = "Error. Write Something...";
    } else{
        document.querySelector('.error').style.display = `none`;
        let li = document.createElement('li');
        li.innerText = input.value;
        task.appendChild(li);
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);

    }
    input.value= '';
    save_data();
}




add.addEventListener('click', addTask);
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter'){
        addTask();
    }
})

task.addEventListener('click', function(event){

    if(event.target.nodeName === 'LI') {
        event.target.classList.toggle('check');
        save_data();
    } else if (event.target.nodeName === 'SPAN') {
        event.target.parentElement.remove();
        save_data();
    }

});

function save_data() {
    localStorage.setItem("data", task.innerHTML);
}

function load_data() {
    task.innerHTML = localStorage.getItem("data");
}


load_data();