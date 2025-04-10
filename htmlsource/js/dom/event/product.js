const products = [
  { id: 0, price: 700000, title: "Blossom Dress" },
  { id: 1, price: 500000, title: "Springfield Shirt" },
  { id: 2, price: 800000, title: "Black Monastery" },
];

//화면 영역 찾아보기
const cols = document.querySelectorAll(".col-sm-4");

cols.forEach((col) => {
  console.log(col);

  // h5, p
  console.log(col.querySelector("h5").textContent);
  console.log(col.querySelector("p").textContent);
});

// //배열 안의 정보를 이용해 화면에 보여주기
cols.forEach((col, idx) => {
  col.querySelector("h5").textContent = products[idx].title;
  col.querySelector("p").textContent = products[idx].price;
});

// for (let i = 0; index < products.length; i++) {
//   console.log(products[i]);
//   console.log(products[i]).title;
// }

//두번째 방법
const row = document.querySelector(".row");
let tags = "";
products.forEach((item, idx) => {
  tags += `<div class="col-sm-4">`;
  tags += `  <img src="https://placehold.co/600" alt="" class="w-100" />`;
  tags += ` <h5>${item.title}</h5>`;
  tags += `<p>가격 : ${item.price}</p>`;
  tags += `</div>`;
});

//row자식으로
row.insertAdjacentHTML("afterbegin", tags);