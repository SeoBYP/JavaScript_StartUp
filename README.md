# JavaScript 소개 및 주요 개념 정리
---
## 1. JavaScript란 무엇인가?

#### 1.1 JavaScript란?
JavaScript는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 언어로, 다음과 같은 작업에 주로 사용됩니다:  
- 실시간 콘텐츠 업데이트
- 대화형 지도, 애니메이션, 2D/3D 그래픽 처리
- 비디오, 오디오 컨트롤 및 데이터 처리  

JavaScript는 HTML, CSS와 함께 웹 개발의 3대 표준 기술 중 하나로, 클라이언트 사이드와 서버 사이드 모두에서 사용 가능합니다.

#### 1.2 HTML과 JavaScript의 상호작용
JavaScript는 웹 페이지의 **DOM(Document Object Model)**을 통해 HTML 요소를 조작하고 사용자와 상호작용을 처리합니다.

예제 코드:
```javascript
// querySelector를 통해서 "p" 태그를 가져옵니다.
const para = document.querySelector("p");

// 해당 객체에 click 이벤트를 추가합니다.
para.addEventListener("click", updateName);

// 현재 이름을 입력받은 이름으로 갱신하는 함수입니다.
function updateName() {
    // prompt를 통해서 사용자에서 입력을 받습니다.
    const name = prompt("Enter your name");
    // 이름을 입력받으면 'Player 1: 입력한 이름' 으로 갱신합니다.
    para.textContent = `Player 1: ${name}`;
}
```
- querySelector: 특정 HTML 요소를 선택합니다.
- addEventListener: 특정 이벤트(예: 클릭, 입력 등)에 반응하는 동작을 정의합니다.
- prompt: 사용자 입력을 받아 처리합니다.

#### 1.3. JavaScript의 주요 프로그래밍 기능

1) **변수 관리:**
   - 값을 저장하고 필요할 때 불러와 재사용합니다.
   - 예: 사용자 이름을 name 변수에 저장.
2) **문자열 조작:**
   - 문자열 결합을 통해 동적인 텍스트를 생성합니다.
   - 예: "Player 1: " + name 또는 템플릿 리터럴 `` `Player 1: ${name}```.
3) **이벤트 기반 코드 실행:**
   - 특정 이벤트(클릭, 입력 등)가 발생했을 때 코드를 실행합니다.
   - 예: 사용자가 버튼을 클릭하면 텍스트를 업데이트.

#### 1.4. JavaScript API
API(Application Programing Interface)는 개발자가 복잡한 작업을 쉽게 처리할 수 있도록 제공하는 미리 작성된 기능들입니다.  
JavaScript는 다양한 API를 제공하며, 크게 두 가지로 나뉩니다:  

1) **Browser API: 브라우저 내장 API**
   - DOM API: HTML 요소 생성/삭제 및 동적 스타일 적용.
   - Geolocation API: 사용자의 위치 데이터를 가져옴.
   - Canvas/WebGL API: 2D 및 3D 그래픽 처리.
   - HTMLMediaElement & WebRTC: 오디오, 비디오 처리 및 웹캠 제어.
2) **Third-party API: 외부에서 제공하는 API**
   - Twitter API: 최신 트윗 표시.
   - Google Maps API: 웹 페이지에 지도를 삽입.

#### 1.5. JavaScript의 실행 환경
- 브라우저는 HTML, CSS, JavaScript를 기반으로 페이지를 렌더링합니다.
- 브라우저의 각 탭은 독립된 실행 환경(샌드박스)을 가집니다. 이는 보안을 강화하고, 한 탭의 코드가 다른 탭에 영향을 미치는 것을 방지합니다.

#### 1.6. JavaScript 실행 순서
- JavaScript는 기본적으로 위에서 아래로 순차적으로 실행됩니다.
- DOM 조작이 필요하다면, HTML이 로드된 후에 실행되도록 코드를 작성해야 합니다.

**해결 방법:**
1) **DOMContentLoaded 이벤트:**
```javascript
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM이 로드되었습니다.");
});
```
2) **```defer``` 속성:**
```html
<script src="script.js" defer></script>
```
3) **스크립트를 ```<body>``` 태그 끝에 배치:** HTML 로드가 끝난 후 스크립트가 실행되도록 합니다.

#### 1.7. 비동기 로딩: async와 defer
JavaScript 로딩 문제를 해결하기 위해 다음과 같은 속성을 사용합니다:

| **속성**    | **특징** |
|-----------|--------|
| **async** |스크립트를 비동기로 로드하며 다운로드가 완료되면 바로 실행. 다른 스크립트 간 순서는 보장되지 않음.|
| **defer** |스크립트를 비동기로 로드하되, HTML 파싱이 끝난 후 로드된 순서대로 실행.|

**비교:**
- ```async```는 독립적인 스크립트를 빠르게 실행할 때 사용.
- ```defer```는 다른 스크립트나 DOM 요소에 의존하는 경우 유용.

```html
<script async src="script1.js"></script>
<script defer src="script2.js"></script>
```

#### 1.8. JavaScript의 인터프리터와 컴파일러
- **인터프리터:** 코드가 작성된 순서대로 실행됩니다.
  - JavaScript는 인터프리터 언어로 분류되며, 즉시 실행됩니다.
- **JIT(Just In Time) 컴파일러:**
  - 최신 JavaScript 엔진은 JIT 기술을 사용하여 실행 중 코드를 최적화하고 빠르게 처리합니다.
#### 1.9. 서버 사이드와 클라이언트 사이드 JavaScript
1) **클라이언트 사이드:**
   - 브라우저에서 실행되며 사용자 인터페이스를 조작.
   - 예: 버튼 클릭 이벤트, DOM 업데이트.
2) **서버 사이드:**
   - 서버에서 실행되며 데이터베이스 처리, 동적 콘텐츠 생성에 사용.
   - 예: Node.js 환경에서 서버 로직 처리.

#### 1.10. JavaScript와 스크립트 로딩 전략
JavaScript를 HTML에 통합하는 방법:
1) **내부 스크립트:**
```html
<script>
    console.log("Hello, JavaScript!");
</script>
```
2) **외부 스크립트:**
```html
<script src="script.js"></script>
```
**주의사항:**
- DOM 조작이 필요한 경우 HTML 로드 이후 실행되도록 해야 함.
- 성능 문제를 고려해 ```async```나 ```defer```를 적절히 활용.

#### 요약
JavaScript는 웹 페이지를 동적으로 만들고 사용자와 상호작용을 처리하는 핵심 기술입니다. 
DOM API와 다양한 브라우저/서드파티 API를 통해 복잡한 작업도 쉽게 구현할 수 있습니다. 
올바른 실행 순서를 고려하고 비동기 로딩 전략을 활용하면 효율적이고 성능이 높은 웹 애플리케이션을 개발할 수 있습니다.
















































































