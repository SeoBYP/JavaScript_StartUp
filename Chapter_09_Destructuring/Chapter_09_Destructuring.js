// 1.
const restaurant = {
    name: 'Super Pizza',
    location: 'Rome, Italy',
    startMenus: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.startMenus[starterIndex],this.mainMenu[mainIndex]];
    },

    opening: {
        mon:{
            open:11,
            close: 22
        },
        tue: {
            open: 10,
            close: 23
        },
        sat: {
            open: 12,
            close: 20
        }
    },

    orderDelivery: function ({starterIndex, mainIndex,time,address})
    {
        console.log(`주문 접수 ${this.startMenus[starterIndex]} 와 ${this.mainMenu[mainIndex]}. ${time}시간에 맞춰서 ${address}로 도착 예정`);
    }
}

const arr = [1, 2, 3];
const [x, y, z] = arr;
// console.log(x,y,z);
//
// const [first, ,third] = restaurant.startMenus;
// console.log(first);
// console.log(third);
//
// console.log(restaurant.order(1,2));
// const [starterMenu, mainMenu] = restaurant.order(1,2);
// console.log(starterMenu);
// console.log(mainMenu);
//
// const nested = [2,4,[5,6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j,k]] = nested;
// console.log(i, j,k);



const {name, opening} = restaurant;
const {name: restaurantName, opening:hours } = restaurant;
// console.log(name);
// console.log(opening);
// console.log(restaurantName);
// console.log(hours);

const {mon: {open, close}} = hours;
// console.log(open,close);

restaurant.orderDelivery({
    starterIndex: 1,
    mainIndex: 2,
    time: '14:00',
    address: 'Seoul, South Korea'
});


// 스프레드 연산자
const newArray = [5,6,...arr];
console.log(newArray);
const str = 'Owen';
console.log([...str]);
console.log(...str);

const [a,b,...others] = [1,2,3,4,5];
console.log(others);

const [Pizza, ,Risotto,...otherFoods] = [...restaurant.mainMenu,...restaurant.startMenus]
console.log(Pizza)
console.log(Risotto)
console.log(otherFoods)



const {sta,...weekdays} = restaurant.opening;
console.log(weekdays);

const add = function (...numbers){
    console.log(...numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) sum += numbers[i];
    return sum;
}

console.log(add(2,3));
console.log(add(2,3,4,5));
console.log(add(9,9,9,9,9,9,9,9));

