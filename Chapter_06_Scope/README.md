# **자바스크립트의 스코프와 호이스팅**

JavaScript를 깊이 이해하기 위해서는 **스코프(Scope)** 와 **호이스팅(Hoisting)** 의 개념을 명확히 이해하는 것이 중요합니다. 이 문서에서는 변수의 접근 범위를 정의하는 스코프와 JavaScript의 독특한 변수 처리 방식인 호이스팅에 대해 상세히 설명합니다.

---

## 1, 스코프

**스코프**는 변수나 함수가 정의되고 접근할 수 있는 범위를 의미합니다. 특정 코드에서 변수에 접근할 수 있는지는 그 변수의 스코프에 의해 결정됩니다.

### 스코프의 종류

#### 1. 글로벌 스코프
- **정의**: 함수나 블록 외부에서 선언된 변수는 글로벌 스코프를 가집니다.
- **특징**: 
  - 애플리케이션의 모든 코드에서 접근 가능합니다.
  - 글로벌 변수는 어디에서나 접근할 수 있지만, 지나치게 사용하면 다른 코드와 충돌할 가능성이 높아 권장되지 않습니다.
- **예시**:
```javascript
var globalVar = "I am global";

function printGlobalVar() {
  console.log(globalVar); // "I am global"
}
printGlobalVar();
```

#### 2. 함수 스코프
- **정의**: 함수 내부에서 선언된 변수는 함수 스코프를 가집니다.
- **특징**: 
  - 해당 함수 내부에서만 접근 가능하며, 함수 외부에서는 접근할 수 없습니다.
  - **지역 변수(Local Variable)** 라고도 불립니다.
- **예시**:
```javascript
function myFunction() {
  var localVar = "I am local";
  console.log(localVar); // "I am local"
}
myFunction();
console.log(localVar); // ReferenceError: localVar is not defined
```

#### 3. 블록 스코프 (ES6 이후)
- **정의**: `{}`로 묶인 블록 안에서 선언된 변수는 블록 스코프를 가집니다.
- **특징**:
  - `let`과 `const` 키워드로 선언된 변수에만 적용됩니다.
  - 블록 내부에서만 접근할 수 있으며, 블록 외부에서는 접근할 수 없습니다.
  - 함수 또한 블록 스코프를 따릅니다.
- **예시**:
```javascript
if (true) {
  let blockVar = "I am block scoped";
  console.log(blockVar); // "I am block scoped"
}
console.log(blockVar); // ReferenceError: blockVar is not defined
```

## 스코프 체인

**스코프 체인**은 특정 변수를 찾기 위해 자바스크립트가 스코프 계층을 탐색하는 과정을 말합니다.

- **작동 원리**:
  - 변수를 참조할 때, 현재 스코프에서 변수를 찾습니다.
  - 만약 현재 스코프에 변수가 없다면, 상위 스코프를 순차적으로 탐색합니다.
  - 글로벌 스코프까지 탐색해도 변수를 찾지 못하면 `ReferenceError`가 발생합니다.
- **예시**:
```javascript
var globalVar = "Global";

function outerFunction() {
  var outerVar = "Outer";
  function innerFunction() {
      var innerVar = "Inner";
      console.log(innerVar); // "Inner"
      console.log(outerVar); // "Outer"
      console.log(globalVar); // "Global"
  }
  innerFunction();
}
outerFunction();
```
## 호이스팅

**호이스팅**은 자바스크립트에서 변수와 함수 선언이 실행 컨텍스트의 최상단으로 끌어올려지는 동작을 말합니다.

**호이스팅이란?**  
변수나 함수의 **선언**이 실행 전에 스코프의 최상단으로 끌어올려지는 것처럼 동작합니다.
다만, 실제로 코드를 이동시키는 것은 아니며, 인터프리터가 이를 미리 처리합니다.

### **호이스팅의 작동 방식**

1. **var 변수**:  
`var`로 선언된 변수는 선언과 초기화가 함께 호이스팅됩니다.
초기 값은 `undefined`로 설정되며, 이후 코드에서 재할당됩니다.

예시:
```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

2. **let, const 변수**:  
`let`과 `const`로 선언된 변수는 선언과 초기화가 **분리**되어 처리됩니다.
초기화가 이루어지기 전에 변수를 참조하면 **`ReferenceError`**가 발생합니다.
이는 **일시적 사각지대(TDZ, Temporal Dead Zone)** 때문입니다.

예시:
```javascript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
```

3. **함수 선언**:  
함수 선언문은 전체가 호이스팅됩니다. 따라서 선언된 함수는 선언 위치와 상관없이 호출할 수 있습니다.

예시:
```javascript
greet(); // "Hello!"
function greet() {
   console.log("Hello!");
}
```
   
4. **함수 표현식**:  
함수 표현식은 호이스팅되지 않습니다. 선언 전에 호출하면 오류가 발생합니다.

예시:
```javascript
console.log(greet); // undefined
var greet = function() {
   console.log("Hi!");
};
greet(); // "Hi!"
```

---

## **4. 일시적 사각지대(TDZ)**

**일시적 사각지대**는 변수 선언이 호이스팅되었지만 초기화가 이루어지기 전까지의 구간을 의미합니다.

- **특징**:
  - TDZ에서는 변수를 참조할 수 없으며, 이를 시도하면 **ReferenceError**가 발생합니다.
  - 변수 선언이 스코프의 시작 지점에서 이루어지더라도 초기화가 이루어지기 전까지는 접근할 수 없습니다.

- **예시**:
```javascript
{
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 10;
    console.log(x); // 10
}
```

---

## **호이스팅이 일어나는 경우와 그렇지 않은 경우**

### **호이스팅이 일어나는 경우**
- `var` 키워드로 선언된 변수.
- 함수 선언문.

### **호이스팅이 일어나지 않는 경우**
- `let`과 `const` 키워드로 선언된 변수.
- 함수 표현식.

---

## **결론**

- **스코프**는 변수가 접근할 수 있는 범위를 결정하며, 글로벌, 함수, 블록 스코프로 나뉩니다.
- **스코프 체인**은 변수를 찾기 위해 상위 스코프를 탐색하는 과정입니다.
- **호이스팅**은 선언문을 스코프의 최상단으로 끌어올리는 동작처럼 보이게 만듭니다.  
  하지만 초기화 시점과 TDZ의 개념을 이해해야 관련 오류를 방지할 수 있습니다.

JavaScript의 스코프와 호이스팅은 코드의 작동 방식을 이해하는 데 핵심적인 역할을 합니다. 이를 명확히 이해하면 오류를 예방하고 더 효율적인 코드를 작성할 수 있습니다.


