const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"



function onLoginSubmit(e) {//함수안에 공간을 만들어 줌으로써 이벤트가 발생했을 당시의 정보를 가져와준다(매우친절)
    /*
    const userName = loginInput.value; 
    console.log(userName);
    */
    e.preventDefault();//이함수는 기본동작을 수행 안하겠단 뜻임
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);//콘솔스토리지에 "username"이라는 키와 해당하는 이름을 넣어줌
    greeting.innerText = `Hello ${userName}`;//="hello" + userName 과 같다
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY);//콘솔스토리지에서 "username"이라는 키를 가져옴

if(savedUsername === null){//콘솔스토리지의 값이null(비어있을때)일때
    //form태그를 안보이게 하던 hidden을 없애주고 submit리스너를 추가해줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    greeting.innerText = `Hello ${savedUsername}`;//="hello" + userName 과 같다
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//이렇게 되면 새로고침을 막으면서 value값을 성공적으로 가져올수 있다!!
//추가적으로 유저정보를 저장하고 저장되있을땐 원하는 화면을 지속적으로 보여줄수 있는 방법을 알게 되었다!!