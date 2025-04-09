//콜백함수 : 함수를 함수의 인자로 전달, 전달된 함수가 나중에 호출


function showOk() {
    console.log("동의");
}

function showCancel() {
    console.log("취소");
}

function ask(question, yes, no) {};

ask("동의하십니까?", showOk, showCancel);

//1급함수 개념; 변수 던지는x, 함수 자체를 던짐.


// function1.html 에서 실행시킴.


// 함수 표현식
const foo = function(func){
func();
}

foo(() => console.log("함수를 인자로 전달하기"));


function calltenTimes(callback) {
    for (let index = 0; index < 5; index++) {
        callback();
    }
}
const callback = () => console.log("함수호출");

calltenTimes(callback);



//자바스크립트 내장함수
//setTimeout() : 비동기식.
// console.log("시작");
// //3000(3초) 뒤에 호출되라고 함.
// setTimeout(() => {
// console.log("3초가 지냈습니다.");    
// }, 3000);

// console.log("마무리");

// setInterval(() => {
//    console.log("안녕"); 
// }, 2000);

// 2초 간격으로 저 함수가 호출됨.
// 멈추는건 ctrl + C

// parseFloat() : string => float
console.log("parseFloat() ");
console.log(parseFloat("10"));
console.log(parseFloat("10.55"));
console.log(parseFloat("10.55%"));

// 10
// 10.55
// 10.55

// encodeURI
// encodeURIComponent
// decodeURI
// decodeURIComponent
console.log(encodeURI("http://localhost.8080/basic/info.html?name=홍길동"));
console.log(encodeURIComponent("http://localhost.8080/basic/info.html?name=홍길동"));


console.log(decodeURI("http://localhost.8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99"));
console.log(decodeURIComponent("http%3A%2F%2Flocalhost.8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99"));
// http://localhost.8080/basic/info.html?name=홍길동
// http://localhost.8080/basic/info.html?name=홍길동
