// 스코프
'strict mode'


// 나이 계산 함수
function calcAge(birthYear) {
    const age = 2025 - birthYear; // 현재 연도에서 태어난 연도를 뺀 값으로 나이 계산

    function printAge() {
        const output = `${firstName}님, 당신은 ${age}살이고 ${birthYear}년도에 태어났습니다.`;
        console.log(output); // 계산된 나이 출력

        if (birthYear >= 1981 && birthYear <= 1996) { // 밀레니얼 세대 여부 확인
            var millenial = true; // 밀레니얼 여부를 저장하는 변수 (var로 선언)

            const firstName = "Kevin"; // if 블록 내 지역 변수
            const str = `${firstName}, 당신은 밀레니얼입니다.`;

            // console.log(str); // 밀레니얼 여부 메시지 출력

            // 블록 내 함수 선언
            function add(a, b) {
                return a + b; // 두 값을 더하는 함수
            }
        }
        // console.log(millenial); // var는 함수 스코프이므로 접근 가능
        // console.log(add(2, 3)); // add 함수 호출 가능 여부 확인
    }

    printAge(); // printAge 함수 호출
    return age; // 계산된 나이를 반환
}

const firstName = 'Owen'; // 글로벌 스코프 변수

calcAge(1990); // 나이 계산 함수 호출


// 변수 선언 방식의 차이
var me = 'Owen'; // var로 선언한 글로벌 변수
let job = 'engineer'; // let으로 선언한 글로벌 변수
const year = 1993; // const로 선언한 글로벌 변수


// 함수 선언 방식
function addDecl(a, b) {
    return a + b; // 함수 선언식 (호이스팅 적용)
}

const addExpr = function (a, b) {
    return a + b; // 함수 표현식 (호이스팅 적용되지 않음)
};

const addAwwor = (a, b) => a + b; // 화살표 함수

if (!numProducts) { // numProducts 값이 falsy면 실행
    deleteShoppingCart(); // 쇼핑카트 삭제 함수 호출
}

var numProducts = 10; // var로 선언된 변수 (호이스팅됨)

function deleteShoppingCart() {
    console.log("모든 상품 삭제"); // 메시지 출력
}
