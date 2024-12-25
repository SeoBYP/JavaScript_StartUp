# **JavaScript의 값과 참조, 객체 복사**

자바스크립트에서 원시 타입과 객체 타입은 복사 및 동작 방식이 다릅니다.
이 문서에서는 **값 복사**, **참조 복사**, 그리고 객체의 **깊은 복사**와 **얕은 복사**를 다룹니다.

---

## **1. 원시 타입과 참조 타입의 복사**

### **1-1. 원시 타입의 복사**

- **원시 타입(Primitive Type)**: `string`,`number`,`boolean`,`null`,`undefined`,`symbol`,`bigint`
- 원시 타입을 복사하면 **값 자체가 복사**됩니다.
- 두 변수는 서로 독립적입니다.

#### **예제**

```javascript
let myAddress = 'Seoul';
let OldMyAddress = myAddress; // myAddress의 값을 복사
myAddress = 'Busan';

console.log(myAddress, OldMyAddress); // Busan, Seoul
```

- `myAddress`를 변경해도 `OldMyAddress`는 영향을 받지 않습니다.

---

### **1-2. 참조 타입의 복사**

- **참조 타입(Reference Type)**: 객체, 배열, 함수
- 객체를 복사하면 **참조(Reference)**가 복사됩니다.
- 두 변수는 같은 메모리 주소를 참조하므로, 하나를 변경하면 다른 하나도 영향을 받습니다.

#### **예제**

```javascript
const profile = {
    address: 'Seoul'
};
const afterProfile = profile; // profile의 참조를 복사
afterProfile.address = 'Busan';

console.log(profile); // { address: 'Busan' }
console.log(afterProfile); // { address: 'Busan' }
```

- `afterProfile`에서 `address`를 변경하면 `profile`도 변경됩니다.

---

## **2. 객체 복사(깊은 복사와 얕은 복사)**

### **2-1. 얕은 복사(Shallow Copy)**

- 얕은 복사는 객체의 **1단계 속성**만 복사합니다.
- **원시 타입**의 프로퍼티는 복사되지만, **객체 타입**(배열, 객체 등)의 프로퍼티는 **참조만 복사**됩니다.

#### **얕은 복사 예제: `Object.assign`**

```javascript
const profile2 = {
    address: 'Seoul',
    family: ['Tony', 'Chris']
};

// 얕은 복사
const profile2Copy = Object.assign({}, profile2);
profile2Copy.address = 'Daegu';
profile2Copy.family.push('Levin');
profile2Copy.family.push('Roy');

console.log(profile2);
// { address: 'Seoul', family: [ 'Tony', 'Chris', 'Levin', 'Roy' ] }
console.log(profile2Copy);
// { address: 'Daegu', family: [ 'Tony', 'Chris', 'Levin', 'Roy' ] }
```

- `family` 배열은 참조만 복사되었으므로, `profile2Copy.family`를 변경하면 `profile2.family`도 변경됩니다.

---

### **2-2. 깊은 복사(Deep Copy)**

- 깊은 복사는 객체는 모든 중첩 구조를 새로운 메모리 공간에 복사합니다.
- 원시적으로 **재귀적 복사**가 필요하며, 일반적으로 외부 라이브러리(`lodash`)를 사용합니다.

#### **깊은 복사 예제: JSON 방법**

```javascript
const profile3 = {
    address: 'Seoul',
    family: ['Tony', 'Chris']
};

const profile3Copy = JSON.parse(JSON.stringify(profile3));
profile3Copy.address = 'Busan';
profile3Copy.family.push('Levin');

console.log(profile3);
// { address: 'Seoul', family: [ 'Tony', 'Chris' ] }
console.log(profile3Copy);
// { address: 'Busan', family: [ 'Tony', 'Chris', 'Levin' ] }
```

- JSON 방식을 사용하면 **중첩된 객체나 배열도 복사**됩니다.
- 단, JSON 방식은 **함수, `undefined`, `symbol`**과 같은 데이터는 복사되지 않는 제한이 있습니다.

---

## **3. 요약**

| **복사 유형** | **설명**                                     | **영향**                 |
|-----------|--------------------------------------------|------------------------|
| **값 복사**  | 원시 타입의 값을 복사, 두 변수는 독립적임                   | 원본과 복사본은 서로 영향을 주지 않음  |
| **참조 복사** | 참조 타입(객체, 배열)의 참조를 복사, 두 변수는 같은 메모리 주소를 참조 | 하나를 변경하면 다른 하나도 영향을 받음 |
| **얕은 복사** | 1단계 속성만 복사, 객체 타입 속성은 참조만 복사               | 중첩된 객체나 배열은 여전히 참조를 공유 |
| **깊은 복사** | 객체의 모든 중첩 구조를 복사, 새로운 메모리 공간 생성            | 원본과 복사본은 완전히 독립적       |

- **얕은 복사**는 `Object.assign`이나 스프레드 연산자(`...`)를 사용합니다.
- **깊은 복사**는 `JSON.parse(JSON.stringify())` 또는 외부 라이브러리(`lodash`)를 사용합니다.

---

JavaScript에서 객체를 복사할 때는 **복사 방식(값 복사, 참조 복사, 얕은 복사, 깊은 복사)**을 잘 이해하고, 상황에 맞는 방법을 선택하세요.