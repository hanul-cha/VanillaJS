const toDoFrom = document.getElementById('todo-from');
const toDoInput = document.querySelector('#todo-from input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

//로컬스토리지에 저장할것임
function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//로컬값을 각각의스트링으로 만들어줄거임(배열처럼)
}

//버튼을 눌렀을때 li가 삭제되게함
function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();
}

//li와 button 엘리멘트를 추가하는 구문
function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    //submit의 기본실행인 새로고침을 막는 구문
    event.preventDefault();
    //현재입력한값
    const newTodo = toDoInput.value;
    //빈칸으로 만드는 구문 (실행 -> 새로고침막기 -> 입력값저장 -> 삭제)
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    //함수실행
    paintToDo(newToDoObj); //newTodo를 매게변수로 보냄
    saveToDo();
}

//submit을 한후에 실행할 함수 연결
toDoFrom.addEventListener('submit', handleToDoSubmit);


//로컬스토리지에서 들어온 값을 불러줄것임
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){//로컬스토리지가 있다면
    const parsedToDo = JSON.parse(savedToDos);//배열로 만들어 줄것임
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);//배열의 아이템들에 한개의 함수을 실행시킴
}


/* 
저장된 값이 중복될수 있기 때문에 id를 넣은 객체의 프로퍼티를 매개로 게속 보내주는걸로 해결
*/

/* 
filter(fx) : 필터함수도parse처럼 객체 인덱스에 각각 함수를 실행시킨다 
인덱스를 매개로 필터에 연결된 함수에서 false값을 반환하면 그 인덱스는 탈락한 상태로
새로운 객체가 생긴다

ex)
function full(i) {
    if(i<=4){
        return true
    }else{
        return false
    }
}

[1,2,3,4].filter(full)

//새로운 객체엔 [1,2,3]만 담긴채로 생성됨
*/