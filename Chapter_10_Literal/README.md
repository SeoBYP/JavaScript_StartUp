# **JavaScript의 객체 리터럴, Optional Chaining, Map, Set**

JavaScript에서 객체 리터럴(Object Literal), Optional Chaining, Map, 그리고 Set은 데이터를 표현하고 다루는 데 매우 유용합니다. 이 문서에서는 각 개념의 주요 특징과 예제를 다룹니다.

---

## **1. 객체 리터럴(Object Literal)**

객체 리터럴은 JavaScript에서 객체를 정의하는 가장 간단한 방식입니다.

### **1-1. 객체 리터럴의 기본**
```javascript
const objectName = {
    a: 1,
    b: 'bb'
};
console.log(objectName.a); // 1
console.log(objectName.b); // 'bb'
```

### **1-2. ES6 축약 문법**
ES6부터 객체 리터럴에서 프로퍼티 이름과 변수 이름이 동일한 경우, 축약 문법을 사용할 수 있습니다.

```javascript
const a = 1;
const b = 'bb';

const es6Object = {
    a,
    b
};
console.log(es6Object); // { a: 1, b: 'bb' }
```

### **1-3. 메서드 정의**
객체의 메서드를 정의할 때, ES6부터 `function` 키워드를 생략할 수 있습니다.

```javascript
const objectMethods = {
    method1: function () {
        console.log("this is method1");
    },
    method2() {
        console.log("this is method2");
    }
};

objectMethods.method1(); // this is method1
objectMethods.method2(); // this is method2
```

### **1-4. 계산된 프로퍼티 이름**
배열이나 표현식을 사용하여 동적으로 프로퍼티 이름을 생성할 수 있습니다.

```javascript
const arr = ['a', 'b', 'c'];
const dynamicObject = {
    [arr[0]]: 'this is a',
    [`${1 + 3 + 'ha'}`]: 'this is 4ha'
};

console.log(dynamicObject); // { a: 'this is a', '4ha': 'this is 4ha' }
```

---

## **2. Optional Chaining**

Optional Chaining은 객체나 배열의 깊은 속성을 접근할 때 존재 여부를 안전하게 확인할 수 있는 문법입니다. **`?.`** 연산자를 사용하여 에러 없이 안전하게 속성을 접근합니다.

### **2-1. 기본 사용**
```javascript
const weekdays = {
    mon: {
        open: 10,
        close: 22
    },
    tue: {
        open: 11,
        close: 20
    }
};

console.log(weekdays.mon?.open); // 10
console.log(weekdays.wed?.open); // undefined
```

### **2-2. 함수 호출과 Optional Chaining**
메서드가 존재하지 않을 경우에도 에러 없이 처리할 수 있습니다.

```javascript
const objectMethods = {
    method1() {
        console.log("this is method1");
    }
};

objectMethods.method1?.(); // this is method1
objectMethods.method2?.() ?? console.log("no method"); // no method
```

### **2-3. Null 병합 연산자와 함께 사용**
Optional Chaining과 Null 병합 연산자(`??`)를 함께 사용하여 기본값을 설정할 수 있습니다.

```javascript
const thisIsNull = null;
console.log(thisIsNull?.a ?? "default value"); // default value
```

---

## **3. Map**

Map은 JavaScript에서 키-값 쌍을 저장하는 데이터 구조로, 객체와 달리 **모든 데이터 타입**을 키로 사용할 수 있습니다.

### **3-1. Map 생성과 값 추가**
```javascript
const thisIsMap = new Map();
thisIsMap.set(1, 'this is 1');
thisIsMap.set(true, 'this is true');
thisIsMap.set('aa', 'this is aa');

console.log(thisIsMap.get(1)); // this is 1
console.log(thisIsMap.get(true)); // this is true
```

### **3-2. Map의 반복**
Map은 `for...of` 루프를 사용하여 순회할 수 있습니다.

```javascript
for (const [key, value] of thisIsMap) {
    console.log(key, value);
}
```

### **3-3. 값 삭제**
```javascript
thisIsMap.delete(1);
console.log(thisIsMap); // Map(2) { true => 'this is true', 'aa' => 'this is aa' }
```

---

## **4. Set**

Set은 **고유한 값**만 저장하는 데이터 구조입니다. 중복된 값은 자동으로 제거됩니다.

### **4-1. Set 생성과 값 추가**
```javascript
const thisIsSet = new Set();
thisIsSet.add('pizza');
thisIsSet.add('pasta');
thisIsSet.add(1);
thisIsSet.add(true);
thisIsSet.add('pasta'); // 중복 값은 무시

console.log(thisIsSet); // Set(4) { 'pizza', 'pasta', 1, true }
```

### **4-2. 값 확인**
```javascript
console.log(thisIsSet.has('pizza')); // true
console.log(thisIsSet.has('risotto')); // false
```

### **4-3. Set의 반복**
```javascript
for (const element of thisIsSet) {
    console.log(element);
}
```

---

## **요약**

| **개념**            | **설명**                                                                 | **예시**                                        |
|---------------------|------------------------------------------------------------------------|----------------------------------------------|
| **객체 리터럴**        | 객체를 정의하는 간단한 방식으로, ES6부터 축약 문법과 동적 프로퍼티 이름 가능.              | `{ a, b }`, `{ [key]: value }`               |
| **Optional Chaining** | 존재하지 않는 속성을 안전하게 접근.                                       | `object?.property`                            |
| **Map**              | 키-값 쌍을 저장하며, 모든 데이터 타입을 키로 사용 가능.                     | `map.set(key, value)`                         |
| **Set**              | 고유한 값만 저장하며, 중복을 허용하지 않음.                                | `set.add(value)`                              |

JavaScript에서 객체와 데이터를 다루는 위 기능들은 안전성과 효율성을 높이는 데 매우 유용합니다. 상황에 맞게 활용해보세요!
