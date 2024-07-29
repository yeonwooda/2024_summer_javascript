// cook recipe 요리시작! recipe() 요리 끝
// taco 함수 1. 타코준비 2. 재료 넣기 3. 감싸기
// ramen 함수 1. 물끓이기 2. 면넣기 3. 스프넣기 4. 물끄기

const taco = (v) => {
  console.log("1. 타코준비");
  console.log(`2. ${v}넣기`);
  console.log("3. 감싸기");
};

const ramen = (v) => {
  console.log("1. 타코준비");
  console.log("2. 면넣기");
  console.log("3. 스프넣기");
  console.log("4. 물끄기");
};

const cook = (recipe) => {
  console.log("요리시작");
  recipe();
  console.log("요리 끝!");
};

// cook(taco);
cook(ramen);

cook((V) => taco("새우"));
cook((V) => taco("치즈"));
cook((V) => taco("아보카도"));

cook(() => {
  console.log("1. 물끓이기");
  console.log("2. 소금 넣기");
  console.log("3. 고기 넣기");
  console.log("4. 음식물 쓰레기에 버리기");
});
