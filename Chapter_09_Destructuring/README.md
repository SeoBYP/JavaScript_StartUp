# **JavaScript의 구조 분해와 스프레드 연산자**

JavaScript에서 구조 분해(Destructuring)와 스프레드 연산자(Spread Operator)는 데이터를 효율적으로 다루는 데 도움을 줍니다. 이 문서에서는 **구조 분해**와 **스프레드 연산자**의 다양한 활용 사례를 다룹니다.

---

## **1. 구조 분해 할당(Destructuring)**

### **1-1. 배열 구조 분해**
배열의 값을 변수로 쉽게 할당할 수 있습니다.

#### **예제**
```javascript
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z); // 1, 2, 3
```

#### **특정 값 건너뛰기**
```javascript
const arr = [1, 2, 3];
const [first, , third] = arr;
console.log(first, third); // 1, 3
```

#### **중첩 배열 구조 분해**
```javascript
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2, 5, 6
```

---

### **1-2. 객체 구조 분해**
객체의 값을 변수로 추출할 수 있습니다.

#### **예제**
```javascript
const restaurant = {
    name: 'Super Pizza',
    location: 'Rome, Italy',
    opening: {
        mon: { open: 11, close: 22 },
        tue: { open: 10, close: 23 }
    }
};

const { name, location } = restaurant;
console.log(name, location); // Super Pizza, Rome, Italy
```

#### **중첩된 객체 구조 분해**
```javascript
const { mon: { open, close } } = restaurant.opening;
console.log(open, close); // 11, 22
```

---

## **2. 스프레드 연산자와 나머지 매개변수**

### **2-1. 스프레드 연산자**
- **스프레드 연산자**는 배열이나 객체를 복사하거나, 요소를 펼쳐서 사용합니다.

#### **예제**
```javascript
const arr = [1, 2, 3];
const newArray = [5, 6, ...arr];
console.log(newArray); // [5, 6, 1, 2, 3]

const str = 'Owen';
console.log([...str]); // ['O', 'w', 'e', 'n']
```

---

### **2-2. 나머지 매개변수(Rest Parameter)**
- **나머지 매개변수**는 함수 호출 시 전달된 인자를 배열로 수집합니다.

#### **예제**
```javascript
const add = function (...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    return sum;
};

console.log(add(2, 3)); // 5
console.log(add(2, 3, 4, 5)); // 14
```

---

## **3. 활용 예제**

### **배열 및 객체의 구조 분해 활용**
```javascript
const [Pizza, , Risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.startMenus];
console.log(Pizza, Risotto, otherFoods);
// Pizza, Risotto, ['Focaccia', 'Bruschetta', 'Garlic Bread']
```

### **객체 나머지 연산**
```javascript
const { mon, ...weekdays } = restaurant.opening;
console.log(weekdays);
// { tue: { open: 10, close: 23 } }
```

---


## **4. 요약**

| **기능**            | **설명**                                                                 | **예시**                                        |
|---------------------|------------------------------------------------------------------------|----------------------------------------------|
| **구조 분해**        | 배열/객체 데이터를 쉽게 추출.                                                   | `const { a } = obj;` / `const [x] = arr;`   |
| **스프레드 연산자**   | 배열/객체 요소를 펼치거나 복사.                                                | `[...arr]` / `{ ...obj }`                   |
| **나머지 매개변수**   | 함수 호출 시 전달된 인자를 배열로 수집.                                          | `function(...args) {}`                      |

JavaScript에서 데이터를 다루는 위 기능들은 가독성과 효율성을 높이는 데 매우 유용합니다. 상황에 맞게 활용해보세요!
