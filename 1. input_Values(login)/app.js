const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");



function onLoginSubmit(e) {//함수안에 공간을 만들어 줌으로써 이벤트가 발생했을 당시의 정보를 가져와준다(매우친절)
    /*
    const userName = loginInput.value; 
    console.log(userName);
    */
    e.preventDefault();//이함수는 기본동작을 수행 안하겠단 뜻임
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

//이렇게 되면 새로고침을 막으면서 value값을 성공적으로 가져올수 있다!!