//함수 표현식
const myFunc1 = function () {};
const myFunc2 = function name() {};

const showMessage = function () {
  console.log("안녕하세요");
};
showMessage();

const multiply = function (x, y) {
  console.log(`${x} , ${y}`);
};
multiply(35, 4);

// multiply2 내부용 이름(외부에서 호출불가)
const myFunc3 = function multiply2(x, y) {
  return x * y;
};
console.log(myFunc3(6, 8)); //48

// 재귀 호출(자기 자신을 다시 호출)
const rec = function f(x) {
  if (x == 0) {
    console.log(x);
  } else {
    console.log(x);
    f(x - 1);
  }
};
rec(5);

//함수 정의 방식 비교
// multiply4 vs myFunc3
// 호이스팅(Hoisting) : 선언하기 전에 사용
// ->  function name(){} 또는 var 변수
//<> 호이스팅 불가 : let, const
console.log(multiply4(5, 6)); //호이스팅 허용

// y = 5; //y 타입을 나중에 썼는데 오류 없음.
console.log(`y = ${y}`); //호이스팅 허용
// console.log(myFunc4);  Cannot access 'myFunc4' before initialization(초기화)
var y = 6; 


function multiply4(x, y) {
  return x * y;
}



const myFunc4 = function multiply2(x, y) { 
    return x * y;
  };