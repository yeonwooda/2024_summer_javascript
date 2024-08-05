import { data } from "./data.js";

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(2,1fr)";
data.forEach(({ name, gymAddress, profileImage }) => {
  const box = document.createElement("div");
  box.className = "trainer";
  box.innerHTML = `
      <div class="imageBox">
        <img
          src="${profileImage}" alt=""/>
      </div>
      <div class="info">
        <span>${name}선생님</span>
        <span>${gymAddress}</span>
      </div>
    </div>
    `;
  container.appendChild(box);
});

document.body.appendChild(container);
