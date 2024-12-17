# 자바스크립트 원시 데이터 타입 설명
자바스크립트의 **원시 데이터 타입**은 변경 불가능(immutable)하며, 하나의 값만을 가질 수 있습니다.
원시 타입은 메모리에서 **값 자체를 저장**하며 다음과 같은 7가지 종류가 있습니다.

### 1. Number(숫자)
- 숫자형 데이터 타입으로 정수와 실수를 모두 표현합니다.
- 자바스크립트는 **하나의 숫자 타입**만 존재하며, IEEE-754 부동 소수점 형식으로 값을 지원합니다.
- ```NaN``` (Not-a-Number), ```Infinity```, ```-Infinity```도 Number 타입에 속합니다.
예시 : 

```javascript
let integer = 42;             // 정수
let float = 3.14;             // 실수
let negative = -100;          // 음수
console.log(typeof integer);  // "number"

let nanValue = NaN;           // 숫자가 아님
console.log(typeof nanValue); // "number"

let infinity = Infinity;      // 무한대
console.log(typeof infinity); // "number"
```

### 2. String(문자열)
- 문자열 데이터를 표현합니다.
- 작은따옴표(```'```), 큰따옴표(```"```),백틱(```)을 사용해서 문자열을 정의할 수 있습니다.
- **백틱 (Template Literal)** 을 사용하면 문자열 안에 변수를 쉽게 삽입하거나 여러 줄의 문자열을 표현할 수 있습니다 

예시 :

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${singleQuote}!`;  // 템플릿 리터럴
console.log(templateLiteral);                   // "Hello, Hello!"
console.log(typeof templateLiteral);            // "string"
```

### 3. Boolean (불리언)
- 논리적 참(```true```)과 거짓(```false```)을 나타내는 데이터 타입입니다.
- 조건문이나 논리 연산에 주로 사용됩니다.

예시 :

```javascript
let isTrue = true;
let isFalse = false;

console.log(typeof isTrue);  // "boolean"
console.log(5 > 3);          // true
console.log(5 < 3);          // false
```

### 4. Undefined
- 변수가 선언되었지만 **값이 할당되지 않은 상태**를 나타냅니다.
- 자바스크립트 엔진이 자동으로 부여하는 초기 상태의 값입니다.

예시 :

```javascript
let value;
console.log(value);           // undefined
console.log(typeof value);    // "undefined"

function example() {
    return;                    // 반환값이 없으므로 undefined
}
console.log(example());       // undefined
```

### 5. Null
- ```null```은 값이 **비어있음을 명시적으로 나타내는 값**입니다.
- 개발자가 의도적으로 "값이 비어있다"라고 설정할 때 사용합니다.
- 주의: ```typeof null```은 ```object```타입을 반환하는데, 이는 자바스크립트의 오래된 버그입니다.

예시 :

```javascript
let empty = null;            // 값이 비어있음을 명시
console.log(empty);          // null
console.log(typeof empty);   // "object" (버그지만 수정되지 않음)
```

### 6. Symbol (ES6 추가)
- ```Symbol```은 **유일무이한 값**을 생성할 때 사용되는 데이터 타입입니다.
- 주로 객체의 고유한 키를 만들 때 활용됩니다.
- 심볼 값은 ```Symbol()``` 함수를 통해 생성되며, 각 심볼은 서로 다릅니다.

예시 :

```javascript
let symbol1 = Symbol();
let symbol2 = Symbol("desc"); // 설명이 있는 심볼
console.log(symbol1 === symbol2); // false (서로 다른 심볼)

let obj = {
    [symbol1]: "value"
};
console.log(obj[symbol1]);   // "value"
console.log(typeof symbol1); // "symbol"
```

### 7. BigInt (ES2020 추가)
- **매우 큰 정수**를 표현하기 위한 데이터 타입입니다.
- ```BigInt```는 숫자 뒤에 ```n```을 붙여서 생성합니다.
- 일반 숫자(Number) 타입과는 호환되지 않으므로 연산 시 주의해야 합니다.

예시 :

```javascript
let bigInt = 9999999999999999n;  // BigInt 타입
console.log(bigInt);             // 9999999999999999n
console.log(typeof bigInt);      // "bigint"

let result = bigInt + 1n;
console.log(result);             // 10000000000000000n
```
## 원시 데이터 타입의 특징
1) **값 자체를 저장** : 원시 타입은 메모리에 값 자체가 저장되므로 불변입니다.
2) **독립적** : 원시 타입의 변수는 서로 독립적이며 값을 복사하면, 새로운 메모리에 복사됩니다.
3) ```typeof``` **연산** : 대부분의 원시 타입은  ```typeof```를 통해 정확한 타입을 확인할 수 있습니다.

## 원시 타입 요약
|타입	|설명	|예시|
|----|----|---|
|Number	|숫자형 데이터를 표현합니다.	|10, 3.14, -5, Infinity|
|String	|문자 데이터를 표현합니다.	|"Hello", 'World', `Hi`|
|Boolean	|논리적 참/거짓을 표현합니다.	|true, false|
|Undefined	|값이 할당되지 않은 상태를 나타냅니다.	|		let a; → a === undefined|
|Null	|값이 비어있음을 명시적으로 표현합니다.	|		let b = null;|
|Symbol	|유일무이한 값을 생성할 때 사용됩니다.	|Symbol("desc")|
|BigInt	|매우 큰 정수를 표현합니다.	|9007199254740991n|
		
		


		
		