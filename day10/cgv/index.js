//1.컨테이너 만들기
const theater = document.createElement("div");
theater.style.display = "grid";
theater.style.gridTemplateColumns = `repeat(14,1fr)`;

const makeSeat = (alphabet) => {
  return Array(14)
    .fill(alphabet)
    .map((x, i) => {
      return x + (i + 1);
    });
};

[..."ABCDEFGHIJKL"].forEach((x) => {
  makeSeat(x).forEach((x) => {
    const seat = document.createElement("div");
    seat.style.width = "100px";
    seat.style.height = "100px";
    seat.style.border = "1px solid black";
    seat.innerText = x;
    theater.appendChild(seat);
  });
});

document.body.appendChild(theater);
