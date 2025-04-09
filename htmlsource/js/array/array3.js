const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 3.14, new Date(), true, {}]; // 서로 다른 타입을 담을 수 있다.(자바는 같은 타입만 담아야 한다.)
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array("수성", "금성", "지구", "화성", "목성", "천왕성");

//배열 메서드
// join() : 배열을 string으로 반환하며(toString처럼)
//원하는 걸로 배열 요소를 연결한다.
console.log("배열 요소 연결 : " + fruits.join("-"));
console.log("배열 요소 연결 : " + fruits.toString());
// 배열 요소 연결 : 사과-망과-바나나-수박-자두-포도

console.log("배열 연결 : " + fruits.concat(array1));
// 사과,망과,바나나,수박,자두,포도,자전거,자동차,기차,트럭,오토바이

console.log("배열 분할 : " + fruits.slice(1, 3));
// 배열 분할 : 망과,바나나

//sort -  숫자 정렬 안 해줌.
console.log("배열 분할 : " + fruits.sort());

const array2 = [22, 35, 1, 3, 7, 88, 92];
console.log("배열 정렬 1 : " + array2.sort());
// 배열 정렬1,22,3,35,7,88,92

console.log("배열 오름차순 정렬 2 : " + array2.sort((a, b) => a - b));
// : 1,3,7,22,35,88,92

console.log("배열 내림차순 정렬 3 : " + array2.sort((a, b) => b - a));
// 92,88,35,22,7,3,1

//--reverse
console.log("배열 거꾸로 출력 : " + fruits.reverse());
// 포도,자두,수박,사과,바나나,망과

//--index of
console.log("망고의 index 찾기 : " + fruits.indexOf("망고")); //찾으면 알려주고
console.log("딸기의 index 찾기 : " + fruits.indexOf("딸기")); //못찾으면 -1

//--includes
console.log("망고의 포함 여부 includes : " + fruits.includes("망고"));  //true
console.log("딸기의 포함 여부 includes : " + fruits.includes("딸기"));  //false

//--find
// 30보다 큰 배열: 92
console.log("30보다 큰 배열:",
   array2.find((item) => item > 30) 
);  

//--findIndex
// 30보다 큰 배열: 0
console.log("30보다 큰 배열 요소의 인덱스:",
  array2.findIndex((item) => item > 30) 
)

//--map() : 새 배열로 리턴
// 184,176,70,44,14,6,2
const result = array2.map((item) => item *2);
console.log("map : " + result);


//--filter()  : 새 배열로 리턴
// 92,88,35,22
console.log("filter : " + array2.filter((item) => item > 10));

//얕은 복사(주소가 복사됨)와 깊은 복사(값 복사 - 서로 다른 주소값)
//★react에서 많이 사용
let fruits2 = fruits; //얕은 복사(동일한 주소값)

// ...  은 spread
let shallowCopy = [...fruits];

fruits.push("딸기");
console.log("추가 후 => ", fruits.toString());
console.log("추가 후 => ", fruits2.toString());
console.log("추가 후 => ", shallowCopy.toString());

//동일한 값으로 배열 생성
const array3 = [1, 1, 1, 1, 1]; //이랑 동일한 방식 아래
const array4 = new Array(5).fill(1);
console.log("동일한 값으로 배열 생성 : " + array4);

//fruits => array5 복사
const array5 = [];
fruits.forEach((item) => array5.push(item));
console.log("fruits 값 복사: ", array5);

let array6 = [
  [1, 2, 3],
  [4, 5, 6],
];

//flat() : 2차원 => 1차원
console.log(array6.flat());

array6 = [
  [1, 2, 3],
  [4, 5, 6, [9, 10, 11]],
];

console.log(array6.flat(2));
console.log(array6.flat(3));


// flat() 또는 flat(1)	=> 기본 1단계 평탄화
// flat(2)	            => 2단계까지 평탄화
// flat(Infinity)	    => 모든 중첩 완전 평탄화

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];
//varArr1, varArr2 합친 후 새 배열 생성

let newArr = varArr1.concat(varArr2);
console.log("합친 후 newArr : ",newArr);

// let toArr = [varArr1, varArr2];
// console.log(toArr);

let toArr = [ varArr1, varArr2]; //주소를 복사  // [ [ 'num1', 'num2' ], [ 'num3', 'num4' ] ]
let toArr2 = [ ...varArr1, ...varArr2]; //값을 복사
console.log(toArr);

varArr1[0] = "num5";
console.log("varArr1[0] 변경 후", varArr1);
console.log("varArr1[0] 변경 후", toArr);
console.log("varArr1[0[ 변경 후", toArr2);


