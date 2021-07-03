const toDoFrom = document.getElementById('todo-from');
const toDoInput = document.querySelector('#todo-from input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    //submit의 기본실행인 새로고침을 막는 구문
    event.preventDefault();
    //현재입력한값
    const newTodo = toDoInput.value;
    //빈칸으로 만드는 구문 (실행 -> 새로고침막기 -> 입력값저장 -> 삭제)
    toDoInput.value = "";
    //함수실행
    paintToDo(newTodo); //newTodo를 매게변수로 보냄
}

//submit을 한후에 실행할 함수 연결
toDoFrom.addEventListener('submit', handleToDoSubmit);