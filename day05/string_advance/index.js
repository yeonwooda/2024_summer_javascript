console.log("americano".toUpperCase());
console.log("americano".repeat(3).toUpperCase()); // repeat 반복 (몇번)

console.log("AMERICANO".toLowerCase().repeat(10));

// 단어 입력받고 대문자화 시키고, 숫자 입력 받고 그 만큼 반복

const word = prompt("단어입력");
const num = Number(prompt("숫자입력"));
const result = word.toUpperCase().repeat(num);
console.log(result);

console.log("abcdef".replace("a", "😀")); // 바꿔주다
