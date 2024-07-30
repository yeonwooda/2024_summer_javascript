const box = document.createElement("div");
box.className = "box";

const area = ["서울", "경기", "춘천/강원", "제주", "인천/부천", "대구"];
// foreach는 둘러보기
area.forEach((v) => {
  const div = document.createElement("div");
  div.innerText = v;
  div.className = "button";
  document.body.appendChild(div);
  box.appendChild(div);
});
document.body.appendChild(box);
