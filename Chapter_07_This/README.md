# **JavaScript에서의 `this` 키워드**

`this`는 JavaScript에서 매우 중요한 키워드로, **함수가 호출된 방식에 따라 달라지는 실행 문맥(context)**을 나타냅니다.
이 문서에서는 `this`의 기본 개념과 동작 방식을 다양한 예제를 통해 정리합니다.

---

## **1. `this`의 기본 개념**
- `this`는 현재 실행 중인 코드의 **실행 문맥(context)**을 참조합니다.
- **`this`의 값은 함수가 호출된 방식**에 따라 런타임 시점에서 결정됩니다.
- `this`의 값은 다음과 같은 경우에 따라 달라집니다.

---

## **2. `this`의 동작 방식**

### **1. 전역 문맥(Global Context)**
- 전역 문맥에서 `this`는 **전역 객체**를 참조합니다.
    - 브라우저 환경: `window`
    - Node.js 환경: `global`

```javascript
console.log(this); // 브라우저에서는 window 출력
```
---

### **2. 함수 문맥(Function Context)**
- 일반 함수에서 호출된 `this`는 **전역 객체**를 참조합니다.
- **엄격 모드(`use strict`)**에서는 `undefined`를 참조합니다.

```javascript
const calcAge = function (birthYear) {
    console.log(this);
};
calcAge(1990); // 브라우저: window, 'use strict': undefined
```

#### **화살표 함수(Arrow Function)**
- 화살표 함수는 `this`는 **상위 스코프의 `this`를 유지**합니다.

```javascript
const calcAgeArrow = (birthYear) => {
    console.log(this);
};
calcAgeArrow(1990); // 전역 객체 (window)
```

---

### **3. 메서드 호출**
- 객체의 메서드에서 호출된 `this`는 **메서드를 호출한 객체**를 참조합니다.

```javascript
const profile = {
    firstName: 'Kevin',
    birthYear: 1992,
    calcAge: function () {
        console.log(this); // profile 객체
        
        // 화살표 함수는 상위 스코프의 `this`를 유지
        const isMillennial = () => {
            console.log(this); // profile 객체
        };
        isMillennial();

        return 2025 - this.birthYear;
    },
    greet: () => console.log(`안녕, ${this.firstName}`), // 화살표 함수: this는 전역 객체
    greet2: function () {
        console.log(`안녕, ${this.firstName}`); // profile 객체
    }
};

profile.greet();  // "안녕, undefined" (화살표 함수: 전역 객체)
profile.greet2(); // "안녕, Kevin"
profile.calcAge();
// {
// firstName: 'Kevin',
//     birthYear: 1992,
//     calcAge: [Function: calcAge],
// greet: [Function: greet],
// greet2: [Function: greet2]
// }
```

#### **메서드 복사 후 호출**
- 메서드를 다른 객체에 복사하면, 호출 시 해당 객체가 `this`로 설정됩니다.

```javascript
const anotherProfile = {
    firstName: 'Sara',
    birthYear: 1986,
};

anotherProfile.calcAge = profile.calcAge;
console.log(anotherProfile.calcAge()); // anotherProfile 객체
```

#### **함수 할당 후 호출**
- 메서드를 변수에 할당하면, `this`는 전역 객체(엄격 모드에서는 `undefined`)를 참조합니다.

```javascript
const foo = profile.calcAge;
console.log(foo()); // 전역 객체
```

---

## **3. `call`, `apply`, `bind` 메서드**

### **1. `call`**
- 함수를 호출하며, **첫 번째 인자로 `this`를 지정**하고 나머지 인자를 개별적으로 전달합니다.

```javascript
const koreanAir = {
    airline: 'KoreanAir',
    iataCode: 'KAL',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum}를 예약`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
};

const asiana = {
    airline: 'Asiana',
    iataCode: 'ASA',
    bookings: []
};

const book = koreanAir.book;
book.call(asiana, 23, 'Sara'); // asiana 객체를 this로 설정
console.log(asiana.bookings);
```

### **2. `apply`**
- `call`과 동일하지만, 인자를 **배열 형태**로 전달합니다.

```javascript
const flightData = [222, 'George'];
book.apply(asiana, flightData);
console.log(asiana.bookings);

// ES6 스프레드 연산자를 사용하여 동일하게 호출 가능
book.call(asiana, ...flightData);
```

### **3. `bind`**
- `bind`는 함수를 호출하지 않고, **`this`가 고정된 새 함수를 반환**합니다.

```javascript
const bookASA = book.bind(asiana);
bookASA(66, 'Rebecca'); // asiana 객체의 bookings에 추가

const bookASA55 = book.bind(asiana, 55);
bookASA55('Micheal'); // asiana 객체의 bookings에 추가
```

---

## **4. 요약**
### **`this`의 값은 다음과 같은 경우에 따라 달라집니다:**
1. **전역 문맥**: 전역 객체(`window` or `global`)
2. **일반 함수 호출**: 전역 객체 (엄격 모드에서는 `undefined`)
3. **메서드 호출**: 메서드를 호출한 객체
4. **화살표 함수**: 상위 스코프의 `this`
5. **생성자 함수**: 생성된 새 객체
6. **`call`,`apply`,`bind`**: 명시적으로 설정된 `this`

`this`를 이해하고 상황에 맞게 사용하는 것은 JavaScript의 핵심 개념 중 하나입니다. 다양한 함수 호출 방식을 활용하면 더 효율적이고 명확한 코드를 작성할 수 있습니다.
