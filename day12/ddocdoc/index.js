// 병원 이름
// 병원 주소
// 전화번호

import { data } from "./data.js";

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

data.forEach(({ title, roadAddress, tel }) => {
  const box = document.createElement("div");
  box.innerHTML = `
    <div style="width: fit-contents; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
      <h1>${title}</h1>
      <h5>${roadAddress}</h5>
      <span>${tel}</span>
    </div>
    `;
  container.appendChild(box);
});

document.body.appendChild(container);
