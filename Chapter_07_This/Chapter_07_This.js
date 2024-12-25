// JavaScript에서의 this
// this는 JavaScript에서 매우 중요한 키워드로, **함수가 호출된 방식에 따라 달라지는 실행 문맥(context)**을 나타냅니다.
//
// 1. this의 기본 개념
// this는 현재 실행 중인 코드의 실행 문맥(Context)을 참조합니다.
// 실행 문맥은 어디서 함수가 호출되었는지에 따라 달라집니다.
// this의 값은 런타임에 결정되며, 기본적으로 다음과 같은 경우에 따라 달라집니다
// 2. this의 동작 방식


// 1. 전역 문맥(Global Context)
// 전역 문맥에서 this는 전역 객체를 참조합니다.
//     브라우저 환경에서는 window 객체.
//     Node.js 환경에서는 global 객체.
// console.log(this); // 브라우저에서는 window 출력

// 2. 함수 문맥(Function Context)
// 일반 함수 호출
// 일반 함수에서 호출된 this는 전역 객체를 참조합니다.
// 엄격 모드('use strict')에서는 undefined를 참조합니다.
const calcAge = function (birthYear){
    console.log(this);
}
//
// calcAge(1000);


const calcAgeArrow =  (birthYear) =>{
    console.log(this);
}

// calcAgeArrow(1000);

// 메서드 호출
// 객체의 메서드에서 호출된 this는 그 메서드를 호출한 객체를 참조합니다.
const profile = {
    firstName: 'Kevin',
    birthYear: 1992,
    calcAge: function (){

        // console.log(this);
        const  isMillennial = () => {
            console.log(this);
        }
        isMillennial();

        return 2033 - this.birthYear;
    },
    greet: () => console.log(`안녕, ${this.firstName}`),
    greet2: function () {
        console.log(`안녕, ${this.firstName}`);
    }
}

profile.greet();
profile.greet2();
profile.calcAge();

// const anotherProfile = {
//     firstName: 'Sara',
//     birthYear: 1986,
// }
//
// anotherProfile.calcAge = profile.calcAge;
// console.log(anotherProfile.calcAge());
//
// const foo = profile.calcAge;
// console.log(foo());

// Call, Apply, Bind

// Call
// 함수를 호출하는 함수
// 첫 번쨰 인자에 this로 세팅하고 싶은 객체를 넘김
// 나머지 인자를 입력

// Apply
// 함수를 호출하는 함수
// 첫 번쨰 인자에 this로 세팅하고 싶은 객체를 넘김
// 나버지 인자를 배열로 입력

// Bind
// 함수를 실행하지 않고 리턴
// 나머지 인자는 Call, Apply와 동일

const koreanAir ={
    airline :"KoreanAir",
    iataCode : "KAL",
    bookings : [],
    book(flightNum,name){
        console.log(`${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum}를 예약`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }
}

koreanAir.book(123, 'Owen');
koreanAir.book(456, 'Kim');

const asiana = {
    airline: 'Asiana',
    iataCode: 'ASA',
    bookings: [],
    // 여기에 book 메서드를 어떻게 중복 코드 없이 추가?
};

const book = koreanAir.book;
// book(23, 'Sara'); // NOT Work
book.call(asiana, 23, 'Sara');
console.log(asiana);
book.call(koreanAir, 455, 'John');
console.log(koreanAir);

const flightData = [222, 'George'];
book.apply(asiana,flightData);
console.log(asiana);

book.call(asiana, ...flightData); // 정확히 동일

const bookASA = book.bind(asiana);
bookASA.call(66,'Rebecca');

const bookASA55 = book.bind(asiana,55);
bookASA55('Micheal');