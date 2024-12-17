# **JavaScript 기본 개념 정리**

## **JavaScript란 무엇인가?**

- **JavaScript**는 웹 페이지에서 복잡한 기능을 구현할 수 있는 **스크립팅 언어**입니다.
- 단순한 정적 웹 페이지를 넘어 **대화형 콘텐츠**(지도, 애니메이션, 2D/3D 그래픽 등)를 제공하는 데 사용됩니다.
- 웹 기술의 **세 번째 층**으로, **HTML**과 **CSS**와 함께 동작합니다.

---

## **간단한 JavaScript 예제**

HTML에서 글자를 바꾸는 간단한 JavaScript 코드:

```javascript
// "p" 태그를 가져옵니다.
const para = document.querySelector("p");

// click 이벤트 추가
para.addEventListener("click", updateName);

// 이름을 입력받아 갱신하는 함수
function updateName() {
    const name = prompt("Enter your name");
    para.textContent = `Player 1: ${name}`;
}
```

---

## **JavaScript 프로그래밍 핵심 기능**

1. **변수에 값 저장**
    - 값을 입력받아 변수에 저장할 수 있습니다.

2. **문자열 조작**
    - 텍스트와 변수의 값을 결합해 새로운 문자열을 생성합니다.

3. **이벤트에 대한 응답**
    - 특정 이벤트 발생 시 코드를 실행합니다.

---

## **API (애플리케이션 프로그래밍 인터페이스)**

JavaScript는 **API**를 통해 복잡한 기능을 제공합니다.

### **1. 브라우저 API**

웹 브라우저에 내장된 API입니다.

- **DOM API**: HTML과 CSS를 조작 (생성, 수정, 삭제 등)
- **Geolocation API**: 사용자의 위치 정보를 가져옴
- **Canvas & WebGL API**: 2D/3D 그래픽 생성
- **오디오 및 비디오 API**: 멀티미디어 콘텐츠를 다룸

### **2. 서드파티 API**

브라우저에 내장되지 않은 API로, 외부에서 코드를 가져와 사용합니다.

- **Twitter API**: 웹사이트에 트윗 표시
- **Google Maps API**: 웹페이지에 지도 삽입

---

## **JavaScript 실행 순서**

- **JavaScript**는 위에서 아래로 순차적으로 실행됩니다.
- 코드 배치 순서가 중요합니다.

### **해결 방법**

- `DOMContentLoaded` 이벤트를 사용하여 HTML 로딩 이후에 코드 실행:
    ```javascript
    document.addEventListener("DOMContentLoaded", () => {
        // 실행될 코드
    });
    ```

- `<script>` 태그에 **defer** 속성 사용:
    ```html
    <script src="script.js" defer></script>
    ```

---

## **스크립트 로딩 전략**

### **1. `async`와 `defer` 속성**

| **속성**      | **특징**                                                                 |
|---------------|-------------------------------------------------------------------------|
| `async`       | 스크립트를 **비동기적으로 다운로드**하며, **즉시 실행**합니다. 순서 보장 X |
| `defer`       | 스크립트를 비동기적으로 다운로드하지만 **순서대로 실행**되며, DOM 로딩 이후 실행됩니다. |

### **비교 예시**

```html
<!-- async 사용 -->
<script async src="js/script1.js"></script>
<script async src="js/script2.js"></script>

<!-- defer 사용 -->
<script defer src="js/script1.js"></script>
<script defer src="js/script2.js"></script>
```

---

## **JavaScript 코드 실행 환경**

### **1. 클라이언트 사이드 코드**

- 사용자의 **브라우저에서 실행**됩니다.
- **HTML, CSS, JavaScript** 파일이 다운로드된 후 실행됩니다.

### **2. 서버 사이드 코드**

- 서버에서 실행된 후 결과를 브라우저에 전달합니다.
- **Node.js**를 통해 JavaScript도 서버 사이드에서 실행할 수 있습니다.

---

## **동적 코드 vs 정적 코드**

| **종류**     | **설명**                                                                        |
|--------------|-------------------------------------------------------------------------------|
| **동적 코드** | 상황에 따라 페이지를 **업데이트**하고 새로운 콘텐츠를 생성합니다.                  |
| **정적 코드** | 항상 동일한 콘텐츠만 표시됩니다.                                               |

---

## **주석 작성 방법**

주석은 코드 설명을 추가하고, 협업자나 본인이 나중에 코드를 이해하는 데 도움을 줍니다.

### **한 줄 주석**

```javascript
// 여기에 주석을 작성합니다.
```

### **여러 줄 주석**

```javascript
/*
여러 줄에 걸쳐 작성하는 주석입니다.
여러 줄을 설명할 때 유용합니다.
*/
```

---

## **JavaScript 정리 요약**

1. JavaScript는 **웹페이지를 동적으로** 만들기 위한 스크립팅 언어입니다.
2. **브라우저 API**를 통해 웹 페이지의 기능을 확장할 수 있습니다.
3. **async**와 **defer**를 사용하여 스크립트 로딩 성능을 개선할 수 있습니다.
4. 클라이언트 사이드와 서버 사이드에서 모두 사용할 수 있습니다.
5. 코드 실행은 **위에서 아래로** 순차적으로 진행되며, DOM이 로딩된 후 실행되도록 조정할 필요가 있습니다.

---

## **관련 코드 예시**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Example</title>
    <script defer src="script.js"></script>
</head>
<body>
    <p>Click me!</p>
</body>
</html>
```

**script.js**
```javascript
const para = document.querySelector("p");
para.addEventListener("click", () => {
    const name = prompt("Enter your name");
    para.textContent = `Player 1: ${name}`;
});
```