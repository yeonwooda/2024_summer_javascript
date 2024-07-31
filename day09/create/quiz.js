// // 1. 세로
const box = document.createElement("div");
document.body.appendChild(box);

const colors = ["#55efc4", "#00b894", "#ffeaa7", "#fdcb6e"];

colors.forEach((v) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = v;
  document.body.appendChild(div);
});

document.body.appendChild(box);

// 2. 가로
const box1 = document.createElement("div");
box1.style.display = "flex";

const colors1 = ["#81ecec", "#00cec9", "#fab1a0", "#e17055"];

colors1.forEach((v) => {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = v;
  box1.appendChild(div);
});

document.body.appendChild(box1);
