//조건문
//true :. true 자료들, 0 제외 숫자, '문자', [], {}
//false :  false 자료들, 0, '', null, undefined, NaN

const date = new Date();
console.log(date); //2025-04-07T01:07:23.151Z(날짜 표준 표현 방법, ,ISO 8601)_국제 표준화 기구(ISO)

const hour = date.getHours();

//오전
if (hour < 12) {
  console.log("오전");
} else {
  console.log("오후");
}

//NaN(Not a Number; 숫자가 아닌 값이 숫자처럼 처리될 때 생김)
console.log("\n=== isNaN()"); //isNaN : 숫자가 아닌 값이 숫자처럼 처리될 때 생김
console.log(isNaN("12")); //false
console.log(isNaN("abc")); //true

//"12" ==> 12
//Number() : 문자 숫자 => 숫자
console.log("\n=== Number()");
const num1 = Number("23");
console.log("type", typeof num1);//number
console.log(Number("abc")); //NaN
console.log(Number(78.45),Number(78.45) ); 
console.log(Number("78 45 55"), Number("78 45 55") ); 


//parseInt() : 문자 숫자 => 숫자
console.log("\n=== parseInt()");
const num2 = parseInt("33");
console.log("type", typeof num2);  //number
console.log(parseInt("abc")); //NaN

console.log(78.45 ,parseInt(78.45) ); 
console.log("parseInt('78 45 55')" ,parseInt("78 45 55") ); //78


if (isNaN(Number("123"))) { //숫자
  console.log("문자");
} else {
  console.log("숫자");
}

// // switch
// console.log("\n === switch");

// let day = "";

// switch (date.getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Modday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wendesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log("오늘은 " + day);
