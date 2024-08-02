const starbucks = [
  {
    name: "americano",
    price: 3000,
    shots: 2,
    ingredients: ["water", "bean"],
  },
  {
    name: "latte",
    price: 4000,
    shots: 2,
    ingredients: ["water", "bean", "milk"],
  },
  {
    name: "frappuccino",
    price: 4500,
    shots: 2,
    ingredients: ["water", "bean", "milk", "shake"],
  },
  {
    name: "mocha",
    price: 4500,
    shots: 2,
    ingredients: ["water", "bean", "milk", "chocolate"],
  },
];

// 1. 메뉴들의 이름과 가격을 콘솔로 출력하기

// const a = starbucks(({ name, price }) => {
//   return console.log(name, price);
// });

// starbucks.forEach((v) => {
//   console.log(v.name);
//   console.log(v.price);
// });

// // 2. 메뉴들의 이름을 대문자로 출력하기
// starbucks.forEach((v) => {
//   console.log(v.name.toUpperCase());
// });

// // 3. 가격이 4천원인 메뉴만 콘솔로 나타내기
// starbucks.forEach((v) => {
//   if (v.price == 4000) {
//     console.log(v);
//   }
// });

// 4. 이름을 대문자화 하고, 가격은 2000원 더하고, 성분은 ice 추가해서
// 바꾸기

// const coffee = starbucks.forEach((v) => {
//   v.name.toUpperCase;
//   v.price + 2000;
//   v.ingredients.push("ice");
// });

// const coffee = starbucks.map((v) => {
//   const name = v.name.toUpperCase();
//   const price = v.price + 2000;
//   // const ingredients = v.ingredients.push("ice");
//   v.ingredients.push("ice");
//   return { name, price, ingredients: v.ingredients, shot: v.shot };
// });
// console.log(coffee);
// starbucks.forEach((v) => {
//   v.map(name.toUpperCase);
//   toUpperCase, v.price + 2000, v.ingredients.push("ice");
//   console.log(v);
// });

// 5. 이름의 길이가 6글자 이상이면 대문자화, 우유가 포함되면 가격은 천원추가
// 바꾸고 배열로 나타내기

// const arr = starbucks.map((v) => {
//   const name = v.name >= 6 ? v.name.toUpperCase : v;
//   v.ingredients.includes("mlik") ? v.price + 1000 : v.price;
//   return { name, price: v.price, ingredients: v.ingredients, shot: v.shot };
// });
// console.log(arr);

// const arr = starbucks.map((v) => {
//   const name = v.name.length >= 6 ? v.name.toUpperCase() : v.name;
//   const price = v.ingredients.includes("milk") ? v.price + 1000 : v.price;
//   return { name, price, ingredients: v.ingredients, shot: v.shot };
// });
// console.log(arr);

// 6. 가격을 10%할인된 가격으로 바꾸고, 이름 뒤에다가 🧊
// shot은 우유가 포함되면 하나 더  추가하기, 성분은 빼버리기

const arr1 = starbucks.map((v) => {
  const price = v.price * 0.9;
  const name = v.name + "🧊";
  const shot = v.ingredients.includes("milk") ? v.shots + 1 : v.shots;

  return { price, name, shot };
});

console.log(arr1);
