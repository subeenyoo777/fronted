//tab-content 보여주기 : show 클래스명
//메뉴 선택 : orange

//products 클릭 + 첫번째 tab-content
//  = information, shipping : ornage 제거 / show 제거

//information 클릭 + 두번째 tab-content
//  = products, shipping : ornage 제거 / show 제거

//shipping 클릭 + 세번째 tab-content
//  = products, information : ornage 제거 / show 제거

//클릭 요소
const tabBtns = document.querySelectorAll(".tab-button");

//변화가 일어나야 되는 요소
const tabContents = document.querySelectorAll(".tab-content");

//첫번째 (product)클릭 시
// tabBtns[1].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// tabContents[1].classList.remove("show");
// tabContents[2].classList.remove("show");
// tabBtns[0].classList.add("orange");
// tabContents[0].classList.add("orange");

// //첫번째 (information)클릭 시
// tabBtns[0].classList.remove("orange");
// tabBtns[2].classList.remove("orange");
// tabContents[0].classList.remove("show");
// tabContents[2].classList.remove("show");
// tabBtns[1].classList.add("orange");
// tabContents[1].classList.add("show");

tabBtns.forEach((btn,idx) => {
 
 
  btn.addEventListener("click", (e) => {
    //모든 li의 orange 제거
    tabBtns.forEach((item) => item.classList.remove("orange"));

    //현재 눌러진 li에는 orange 추가
    e.target.classList.add("orange");

    //모든 div의 show  제거
    tabContents.forEach((element) => element.classList.remove("show"));

    //현재 눌러진 li와 같은 순서인 div에 show 추가
    tabContents[idx].classList.add("show");
    console.log(tabContents[idx]);
  });
});
