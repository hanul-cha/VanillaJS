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
    li.remove();
}

//li와 button 엘리멘트를 추가하는 구문
function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
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
    toDos.push(newTodo);//*****실행해보면 알겠지만 여기서 푸쉬해주는 공간은 누를때마다 비어진다 즉 해결해야함*/
    
    //함수실행
    paintToDo(newTodo); //newTodo를 매게변수로 보냄
    saveToDo();
}

//submit을 한후에 실행할 함수 연결
toDoFrom.addEventListener('submit', handleToDoSubmit);


//로컬스토리지에서 들어온 값을 불러줄것임
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){//로컬스토리지가 있다면
    const parsedToDo = JSON.parse(savedToDos);//배열로 만들어 줄것임
    toDos = parsedToDo; //paintToDo를 초기 배열에 추가 시켜주는것으로 해결하였음(41번 시트의 문제)
    parsedToDo.forEach(paintToDo);//배열의 아이템들에 한개의 함수을 실행시킴
}

/* 
화실표함수
function say(item){
    console.log("this id", item);
}
parsedToDo.forEach(say);

와

parsedToDo.forEach((item) => console.log("this id", item));
은 똑같이 작동함
*/


/* 
function say(){
    console.log("la"); //2번실행
}

//로컬스토리지에서 들어온 값을 불러줄것임
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
    const parsedToDo = JSON.parse(savedToDos);//배열로 만들어 줄것임
    parsedToDo.forEach(say);//배열의 아이템들에 한개의 함수을 실행시킴
}

여기서 각각 배열에 맞는 매개변수를 사용하고 싶으면 item처럼 사용해주면됨

item 이부분에서 이벤트리스너 e를 매개변수로 받는것처럼 함수의 인자로 쓸수 있음
그렇게되면 parsedToDo의 각각의 변수들을 대입해 함수를 실행시켜주게됨

일반적인 매개변수가 있는 함수에서 변하는값을 (10,20)처럼 직접써주는게 아님
*/





/* 
거의 다되었지만 생성된x버튼을 누르면 부모요소의 li만 삭제되고 로컬레지스트리에
저장된 값들은 없어지지 않음 할당된text(newTodo)에 맞는 스트링을 없애주는 방법도 있지만
똑같은 이름으로 저장이 됬을때 문제가 생김
그 해결법은 todolist(2)에서 해결할것임
*/