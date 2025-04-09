//자바스크립트 객체
let tv = new Object();

console.log(tv);

// 프롬퍼티(맴버변수) 생성
tv.color = "red";
tv.power = true;
tv.volume = 13;

//info 메서드(함수) 정의
tv.info = function() {
    console.log("색상 : ", this.color);
    console.log("볼륨 : ", this.volume);
    console.log("전원 : ", this.power);
};

tv.info();
// 화살표 함수에서는 this 사용 불가.

console.log("\n--- 객체 리터럴로 생성");

let person = {
    name : ["bob", "smith"],
    age : 32,
    gender : "male",
    interests : ["music","skiing"],
    greeting : function(){
        console.log("Hi I'm " + this.name[0] + ".");
    },
};

console.log(person);
console.log(person.age);
console.log(person["age"]);
console.log(person["name"][0]); //이름 첫번째만

person.greeting();

//age 값 변경
person.age = 20;

//함수 추가
person.farewell = function(){
    console.log("bye!!");
};

console.log(person);


//for..in : 객체 출력
let output = "";

for (const key in person) {
// output += "▶" + key + " : " + person[key] + "\n";
    output += `▶ ${key} " ${person[key]} \n`;

}

console.log(output);