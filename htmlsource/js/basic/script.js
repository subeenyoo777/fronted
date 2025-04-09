// "use strict"

// 엄격 모드(Strict Mode) 선언
// 암묵적 전역 변수 방지: 
// 선언하지 않은 변수에 값을 할당할 경우 에러를 발생시켜 실수를 줄여줍니다.

// 중복된 매개변수명 금지: 
// 함수에서 같은 이름의 매개변수를 사용할 수 없게 하여 코드의 명확성을 높여줍니다.

// 읽기 전용 프로퍼티 변경 금지: 
// 상수처럼 취급되는 값을 변경하려 할 때 에러를 발생시킵니다.

// 안전하지 않은 'this' 사용 방지: 
// 객체 메서드 내에서 'this'가 잘못된 값(예: undefined)이 되는 것을 막습니다.

// 자바스크립트 변수
// 타입 없음
// 줄바꿈이 있다면 세미콜롬 생략 가능.
// let, const (요즘방식)/ var(예전 방식, 멀리하자)
// let : 변수 선언, var : 유연한 변수 선언 방식
// 에러나면 아래 모두 실행안됨.

// alert("Hello world");

let a = 3;
console.log(typeof a); //number 타입
console.log(a);

 a = "test"; // "", '' - 문자열로 모두 허용
console.log(typeof a); //string 타입
console.log(a)  //javascript는 ;이 필수 아님 


// a로 또 선언하면 > Cannot redeclare block-scoped variable 'a'.
const b = 15; //const : 상수 선언 
console.log(b);
// b = 20;
// console.log(b); //TypeError: Assignment to constant(항상 똑같은_상수) variable.


{ //선언된 위치가 다르기에 변수명 같아도 영향을 주지 않음, block-scoped
let a = 333;
console.log("block-scope", a);
}
// 전역 스코프(Global Scope): 코드 전체에서 접근 가능.
// 함수 스코프(Function Scope): 함수 내에서만 유효. 주로 var로 선언.
// 블록 스코프(Block Scope): { } 내부에서만 유효. let과 const 사용.
// 모듈 스코프(Module Scope): ES6 모듈 내부에서만 유효.



// 변수범위
// var : function scope 이어서 fun에서만 제약 있음.
// let, const : block-scoped


function foobar(){
    var foo = 5;
    console.log(foo);
}
// console.log(foo); ReferenceError에러가 난다!

if (true){
    var aa = 5;
    console.log(aa);
}
console.log(aa);



if (true){
    let bb = 5;
    console.log("let block scope", bb);
}
// console.log("let block scope",bb); ReferenceError뜬다!