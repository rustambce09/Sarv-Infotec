const input=document.getElementById('todoInput');
const btn=document.getElementById('addTodoButton');
const list=document.getElementById('todoList');

//try to load saved todos from localstorage(if any)
const saved=localStorage.getItem('todos');
const todos=saved?JSON.parse(saved):[];

function saveTodos(){
    //Saved current todos array to local storage
    localStorage.setItem('todos',JSON.stringify(todos));
}

//create a dom node for a todo object and append it to the list
function createTodoNode(todo,index){
    const div=document.createElement('div');

    //checkbox to toggle comletion
    const checkbox = document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked=!!todo.completed;
    checkbox.addEventListener("change",()=>{
        todo.completed=checkbox.checked;

        //strike-through when completed
          textSpan.style.textDecoration=todo.completed?'line-through':"";
    saveTodos(); 
    })

    //text of todos
    const textSpan=document.createElement("span");
    textSpan.textContent=todo.text;
    textSpan.style.textDecoration='0 8px';
    if(todo.completed){
        textSpan.style.textDecoration='line-throgh';
    }    
        //Add double click event listener to edit todo
        textSpan.addEventListener("dblclick",()=>{
            const newText=prompt("Edit todo",todo.text);
            if(newText !==null){
                todo.text=newText.trim()
                textSpan.textContent=todo.text;
                saveTodos();
            }
        })


        //Delete todo button
        const delbtn=document.createElement('button');
        delbtn.textContent="Delete";
        delbtn.addEventListener('click',()=>{
            todos.splice(index,1)
            render();
            saveTodos();
        })

        div.appendChild(checkbox);
        div.appendChild(textSpan);
        div.appendChild(delbtn);
        return div;


    }



//render the array
function render(){
    list.innerHTML="";

    //Recreate each item
    todos.forEach((todo,index) => {
        const node=createTodoNode(todo,index);
        list.appendChild(node)
        
    });
}


//add todos
function addTodo(){
    const text=input.value.trim();
    if(!text){
        return
    }

    //push a new  todo
    todos.push({text,completed:false});
    input.value="";
    render()
    saveTodos()
}

btn.addEventListener("click",addTodo);
input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        addTodo();
    }
})
render();