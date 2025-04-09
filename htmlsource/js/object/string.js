
const msg1 = new String("hello javascript"); //생성자
const msg2 = String("HELLO JAVASCRIPT"); //함수

console.log(msg1);
console.log(msg2);

console.log(typeof msg1); //new..object 생성
console.log(typeof msg2); // string 타입

//  == 값과 타입까지 비교
console.log(msg1 === "hello javascript"); //false
console.log(msg2 === "HELLO JAVASCRIPT"); //true


// const msg3 = "" ;
console.log(`특정 위치 문자 반환 :  : ${msg1.charAt(4)}`);
console.log(`특정 문자 위치 반환 :  : ${msg1.indexOf("j")}`);
console.log(`특정 문자 포함 여부 :  : ${msg1.includes("j")}`); //t/f 반환

//내부 동작 방식은 다르다.
// 원본 문자를 자름
// 원본 문자를 잘라 새로운 문자열로 반환
console.log(`문자열 부분 추출 :  : ${msg1.substring(6,10)}`);
console.log(`문자열 부분 추출 :  : ${msg1.slice(6,10)}`);

console.log(`문자열 연결 :  : ${msg1.concat(msg2)}`);
console.log(`문자열 변경 :  : ${msg1.replace("hello", "hi")}`); // 실제 원본이 바뀐건x, 바꾸려면 다시 담아야 함
console.log(`문자열 찾기:  : ${msg1.match("ja")}`);  //찾은 문자열 반환
console.log(`문자열 찾기 :  : ${msg1.match("body")}`); //없다면  => null. 정규식 할 때 유용

console.log(`문자열 찾기(search - 시작위치)) :  : ${msg1.search("ja")}`); //6번째 시작
console.log(`문자열 대문자로 변경 :  : ${msg1.toUpperCase()}`);
console.log(`문자열 소문자로 변경 :  : ${msg1.toLowerCase()}`);
console.log(`문자열 공백 제거 : ${"  hello   ".trim()}`);