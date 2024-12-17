// const buttonA = document.querySelector("#button_A");
// const headingA = document.querySelector("#heading_A");

// let count = 1;

// buttonA.onclick = () => {
//     buttonA.textContent = "Try again!";
//     headingA.textContent = `${count} clicks so far`;
//     count += 1;
// };

// 자바 스크립트 원시 타입 데이터 정리

// 1, Number
console.log(10);
let number = 12;
console.log(number);
console.log(typeof number);

// 2. String
console.log("Kevin");
let name = "Kevin";
console.log(name);
console.log(typeof name);

let myName = 'Kim';
let templateLiteral = `hello ${myName}`;
console.log(templateLiteral); // hello Kim


// 3. Boolean
console.log(true);
let isFun = true;
console.log(isFun);
console.log(typeof isFun);


// 4. Undefined
// Undefined은 값이 아직 정해지지 않은 데이터 타입
let apple;
console.log(apple);
console.log(typeof apple);

// 5. Null
let time = null;
console.log(time);
console.log(typeof time);


// 6. Symbol(ES6 = ES2015)
let symbol = Symbol();
console.log(symbol);
console.log(typeof symbol);

// 7. BigInt(ES2020)
let theBiggestInt = 9999999999999999n;
console.log(theBiggestInt);
console.log(typeof theBiggestInt);

// 자바스크립트의 동적 타이핑

