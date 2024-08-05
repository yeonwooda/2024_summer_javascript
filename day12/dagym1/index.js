import { data } from "./data.js";

const section = document.createElement("section");
section.style.display = "grid";
section.style.gridTemplateColumns = "repeat(2,1fr)";
section.style.gap = "10px";
section.style.width = "768px";
section.style.height = "1144px";
data.forEach(({ name, gymName, gymAddress, profileImage, exerciseTypes }) => {
  const box = document.createElement("div");
  box.innerHTML = `
  <div>
      <div style="width: 100px; height: 100px; object-fit: contain" >
        <img
          style="width: 100%; height: 100%; border-radius: 10px"
          src=${profileImage}/>
      </div>
      <div>
        <div "display: flex; flex-direction: column">
          <span style= "font-weight: bold">${name}</span>
          <span style="color: #bdbdbd">${gymName}</span>
        </div>
        <span style="display: flex; padding-bottom:40px">${gymAddress}</span>
        <button>${exerciseTypes}</button>
      </div>
  </div>

  `;
  section.appendChild(box);
});
document.body.appendChild(section);
