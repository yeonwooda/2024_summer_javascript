// 유저에게 그리드 갯수를 물어보고, 그 갯수에 따라사ㅓ
// a-z 까지 각각 내용이 담긴 box 나열하기

const use = Number(prompt("그리드 갯수"));

const section = document.createElement("section");
section.style.display = "grid";
section.style.gridTemplateColumns = `repeat(${use},1fr)`;

// const ap = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
// ap.forEach((v) => {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.boxShadow = "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px";
//   div.innerText = v;
//   section.appendChild(div);
// });
// document.body.appendChild(section);

[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].forEach((v) => {
  const div = document.createElement("div");
  div.style.boxShadow = `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`;
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  div.style.padding = "20px";
  div.innerText = v;
  section.appendChild(div);
});

document.body.appendChild(section);
