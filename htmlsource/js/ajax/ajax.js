// console.log("시작")

// setTimeout(() => {
//     console.log("중간")

// }, 3000);
// console.log("마무리")

// fetch
// fetch("서버주소")// 서버에 요청 들어감
// .then("응답도착" => 적절한 타입으로 변환 후 리턴)// 서버 응답 시
// .then("도착한 응답 처리");



// 실행순서 : 1번만. 2,3번은 그 이후에 실행됨.


// https://jsonplaceholder.typeicode.com/todos/1 사이트에 요청


console.log("시작");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log(data));

  console.log("마무리");


