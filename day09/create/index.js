// js에 html/css 모두 담당햇을 때
// - 코드가 길어짐
// - 그래서 각각 담당하는 역할을 코드 분배하는게 best

// 엘리먼트 타입
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const btn = document.createElement("button");
btn.innerText = "버튼";

div.appendChild(btn);
document.body.appendChild(div);
