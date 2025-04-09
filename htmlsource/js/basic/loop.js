// //반복문

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// //자바 '->'
// <배열>할 때 편함
// array.forEach(element => {
// });

//<객체>할 때 편함
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//     }

//     for (const element of object) {
//     }
// }

// for (const element of object) {
// }

//1-10 출력
for (let index = 1; index < 11; index++) {
    console.log(index);
    
}

//1-100까지의 합
// let sum = 0;
// for (let index = 1; index < 101; index++) {
//     sum += index;
// }
// console.log("1 ~ 100Rk 합: ", sum);

//--while 버전
// let i =1;
// while (i < 11 ) {
//     console.log(i);
//     i++;
// }

let sum = 0;
i = 1;
while (i < 101) {
    sum += i;
    i++;
}
console.log("while에서 1~100까지 합", sum);

// i =0;
// do {
// console.log(i);
// i++;    
// } while (i<3);


// `${변수명}` : 변수 + 문자열 출력
//for..in :  객체 출력 시 편함
// console.log("\n---- for in : 객체 출력");
// const myCar = {make: "BMW", model: "X5", year: 2013};
// let txt = "";
// for (const key in myCar ) {
// txt += myCar[key] + " ";    
// }
// console.log("myCar", txt);

// const music = {singer : "아델", time : 15, title: "hello"};
// for (const key in music) {
//     console.log( `${key} : ${music[key]}`)    
// } 
//원래라면? key + music([key])

//break, continue
// console.log("\n--- break");
// for (let index = 0; index < 101; index++) {
//     if (index == 50) break;
//     console.log(index);   
// }

// console.log("\n--- continue");
// for (let index = 0; index < 40; index += 2) {
//     if (index == 0) continue;
//     console.log(index);   
// }