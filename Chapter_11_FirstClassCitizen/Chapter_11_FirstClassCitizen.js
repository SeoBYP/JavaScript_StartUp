// 일급 함수
const passengerBooking = function (){
    let passengerCount = 0;
    return function (){
        passengerCount++;
        console.log('passengerCount : ', passengerCount);
    }
}

const booker = passengerBooking();
booker();
booker();
booker();
// 고차 함수