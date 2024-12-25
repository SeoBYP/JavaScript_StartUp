# **JavaScript의 일급 함수, 일급 시민, 고차 함수**

JavaScript는 **일급 함수(First-Class Function)**를 지원하는 언어로, 함수가 값처럼 취급됩니다. 이로 인해 고차 함수와 같은 강력한 기능을 제공합니다. 이 문서에서는 일급 함수, 일급 시민, 그리고 고차 함수의 개념과 예제를 다룹니다.

---

## **1. 일급 시민(First-Class Citizen)**

자바스크립트에서는 함수가 **일급 시민(First-Class Citizen)**으로 취급됩니다.
이는 함수가 다음과 같이 다른 값과 동일하게 취급될 수 있음을 의미합니다:
1. 변수에 할당될 수 있다.
2. 다른 함수의 인자로 전달될 수 있다.
3. 다른 함수에서 반환될 수 있다.

#### **예제**
```javascript
// 함수가 변수에 할당
const greet = function () {
    console.log('Hello, World!');
};
greet(); // Hello, World!

// 함수가 인자로 전달
const runFunction = function (fn) {
    fn();
};
runFunction(greet); // Hello, World!

// 함수가 반환값으로 사용
const createMultiplier = function (multiplier) {
    return function (value) {
        return value * multiplier;
    };
};
const double = createMultiplier(2);
console.log(double(5)); // 10
```
---

## **2. 일급 함수(First-Class Function)**
JavaScript의 함수는 **값처럼 취급**되므로, 다음과 같은 특징을 가집니다:

1. 함수는 다른 함수의 **인자로 전달**될 수 있다.
2. 함수는 다른 함수의 **반환값**으로 사용될 수 있다.

### **2-1. 클로저를 활용한 상태 유지**
```javascript
const passengerBooking = function () {
    let passengerCount = 0; // 상태 유지
    return function () {
        passengerCount++;
        console.log('passengerCount : ', passengerCount);
    };
};

const booker = passengerBooking();
booker(); // passengerCount : 1
booker(); // passengerCount : 2
booker(); // passengerCount : 3
```
- `passengerBooking` 함수는 내부 변수를 유지하며, 반환된 함수가 이를 참조합니다. 이는 클로저(Closure)의 개념을 활용한 것입니다.

---

## **3. 고차 함수(Higher-Order Function)**

고차 함수는 다음 주 하나를 만족하는 함수입니다:
1. 함수를 **인자로 받는** 함수
2. 함수를 **반환하는** 함수

### **3-1. 함수 인자로 전달**
```javascript
const withLogging = function (fn) {
    return function (...args) {
        console.log(`Called with arguments: ${args}`);
        return fn(...args);
    };
};

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);

console.log(loggedAdd(2, 3)); // Called with arguments: 2,3 // 5
```

### **3-2. 함수 반환**
```javascript
const multiplier = function (factor) {
    return function (number) {
        return number * factor;
    };
};

const triple = multiplier(3);
console.log(triple(4)); // 12
```

---

## **4. 콜백 함수(Callback Function)**

콜백 함수는 다른 함수에 **인자로 전달되어 실행되는 함수**를 의미합니다. 이는 비동기 프로그래밍에서 특히 유용합니다.
#### **예제**
```javascript
const processUserInput = function (callback) {
    const name = 'Alice';
    callback(name);
};

processUserInput(function (name) {
    console.log(`Hello, ${name}!`);
});
// Hello, Alice!
```

---

## **5. 요약**

| **개념**          | **설명**                                                                 | **예시**                                        |
|-------------------|------------------------------------------------------------------------|----------------------------------------------|
| **일급 시민**      | 함수가 값처럼 취급되며, 변수에 할당, 인자로 전달, 반환 가능.                     | `const fn = () => {};`                       |
| **일급 함수**      | 함수가 다른 함수의 인자로 전달되거나 반환값으로 사용 가능.                          | `function outer() { return inner; }`         |
| **고차 함수**      | 함수를 인자로 받거나 함수를 반환하는 함수.                                        | `array.map(fn)`                              |
| **콜백 함수**      | 다른 함수에 인자로 전달되어 실행되는 함수.                                        | `setTimeout(() => {}, 1000)`                 |

JavaScript에서 함수는 매우 강력한 도구로, 이를 활용하여 다양한 프로그래밍 패턴을 구현할 수 있습니다. 상황에 맞게 일급 함수와 고차 함수를 활용해보세요!


