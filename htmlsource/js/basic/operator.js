//연산자
//산술, 비교, 연결

let a = 4,
  b = 5;

console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b); // a/b= 0.8 |소수점까지 나옴!| 자바에선 몫 값만 나옴.
console.log("a%b=", a % b);

// a+b= 9
// a-b= -1
// a*b= 20
// a/b= 0.8
// a%b= 4

// + : 연결 연산자, 숫자 + 문자
// ≠ 숫자 계산 부호(자바와 같지 않음)
let c = "3";
console.log("a+c = ", a + c);

// -, *, /, % : 문자와 숫자의 산술 연산
console.log("\n--문자와 숫자의 산술 연산");
console.log("a - c = ", a - c);
console.log("a * c = ", a * c);
console.log("a / c = ", a / c);
console.log("a % c = ", a % c);

// a - c =  1
// a * c =  12
// a / c =  1.3333333333333333
// a % c =  1

// 비교연산자 ==(값 비교), !=(값 비교), ===(값과 타입까지 비교), !==(값, 타입 비교)
let d = "4";
console.log("a == d", a == d); //true
console.log("a === d", a === d);
console.log("a != d", a != d);
console.log("a !== d", a !== d); //true


//단항 연산자 ++, --