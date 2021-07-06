const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const secondss = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${secondss}`;// ''가 아니라 ``로 해야함

}

getClock();//초기실행은 밑에 setInterval이 1000ms후에 실행되기 때문에 초기실행이 필요하다
setInterval(getClock, 1000);

//얼마전에 바닐라 자바스크립트로 시계를 구현해본적이 있는데 padStart를 이용하진 않았다 새로운 방식이다.