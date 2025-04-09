//배열생성

// 1.  [].. 생성
const fruits = ["사과","망고","바나나","수박","자두","포도"];
const others = ["과일",1, 3.14, new Date(), true, {}]; // 서로 다른 타입을 담을 수 있다.(자바는 같은 타입만 담아야 한다.)

// 2.  new Array().. 생성
const array1 = new Array("자전거","자동차","기차","트럭","오토바이");
const planet = new Array("수성","금성","지구","화성","목성","천왕성");


///배열 조회
//전체
console.log("\n--- for i 사용");
for (let i = 0; i < fruits.length ; i++ ) {
    console.log(fruits[i]);    
}

// 향상된 for와 같음.
console.log("\n--- for of 사용");
for (const element of others) {
    console.log(element);
}

console.log("\n--- for each 사용");
array1.forEach(item => {
    console.log(item);
});

console.log("\n--- 확인용");
console.log(planet);
console.log(planet.toString()); // 배열 => 문자열