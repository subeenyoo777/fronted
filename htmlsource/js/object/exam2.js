//2개의 주사위 던졌을 때 나오는 눈을 (5,3) 출력
//눈의 합이 5가 아니면 계속 주사위 던지고 눈의 합이 5인 경우 실행 중단
// while, Math.random floor.. 

while (true) {
  let dice1 = Math.floor(Math.random()* 6)+1;
  let dice2 = Math.floor(Math.random()* 6)+1;

  console.log(`${dice1}, ${dice2}`);
  if(dice1 + dice2 == 5)
    break;
}
console.log("합이 5이므로 종료합니다!");

//로또 번호 6개를 추출하여 배열에 담은 후 출력(1~45)
let lottoArr = [];

while (true) {
  let lotto = Math.floor(Math.random() * 45 ) +1;

  // indexOf(lotto)는 해당 숫자가 배열에 있는지 확인
  if (lottoArr.indexOf(lotto) == -1) {
    lottoArr.push(lotto); //중복이 아니므로 배열에 추가
  }

  if (lottoArr.length > 5) break;
}
console.log("이번주 로또 번호 : " + lottoArr);


