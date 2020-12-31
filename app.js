const toDo = document.querySelector('input');
const toDoButton = document.querySelector('button');
const list = document.querySelector('ul');

//event listener
toDoButton.addEventListener("click", addToDo);
list.addEventListener("click", deleteToDo);
list.addEventListener("click", completedToDo);

//adding a to do to the list
function addToDo(event){

    event.preventDefault();
    if(toDo.value === "")
    {
        alert("please put in valid to do");
    }
    else
    {
        //creating a new task to put in the UL
        const newList = document.createElement('li');
        newList.classList.add("todo");
        newList.innerText = toDo.value;
        
        //completed button
        const doneBtn = document.createElement('button');
        doneBtn.innerHTML = '<i class="fas fa-check"></i>'
        doneBtn.classList.add("doneBtn");
        newList.appendChild(doneBtn);

        //"x" button to remove something
        const xBtn = document.createElement('button')
        xBtn.innerHTML = '<i class="fas fa-times"></i>';
        xBtn.classList.add('xBtn');
        newList.appendChild(xBtn);
        
        //attach the new todo to html
        list.appendChild(newList);
        toDo.value = "";
    }
}

function deleteToDo(event){
    const item = event.target;

    if(item.classList[0] === 'xBtn')
    {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
}

function completedToDo(event)
{
    const item = event.target;
    if(item.classList[0] === 'doneBtn')
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}