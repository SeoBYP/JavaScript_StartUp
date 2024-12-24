// Array
const fruit1 = 'apple';
const fruit2 = 'banana';
const fruit3 = 'kiwi';

const fruits = [fruit1, fruit2, fruit3];
console.log(fruits);
const differentTypeArray = ['hello', 23, true, null];
console.log(differentTypeArray);

console.log(fruits[2]);
console.log(fruits.length);
fruits[2] = 'mango';
console.log(fruits);

const birthYearArray = [1990, 1993, 1998];
const agesArray = birthYearArray.map(birthYear =>
    2023 - birthYear);
console.log(agesArray);

// methods
const cars = ['hyundai', 'bmw', 'audi'];
cars.push('toyota');
console.log(cars);
cars.unshift('kia');
console.log(cars);

cars.pop();
console.log(cars);
cars.shift();
console.log(cars);

console.log(cars.indexOf('bmw'));
console.log(cars.includes('audi'));
console.log(cars.includes('volvo'));

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);


// Object, key-value pair
const profile = {
    firstName: 'Kevin',
    lastName: 'Kim',
    age : 30,
    job : 'engineer',
    isMarried : false,
}

console.log(profile);
console.log(profile.firstName);
console.log(profile['lastName']);

profile.age = 31;

console.log(profile);

const obj1 = {
    name : 'Owen',
    age : 35
};

const obj2 = {
    address : 'Seoul',
    job: 'teacher',
}

const combinedObject = {
    ...obj1,
    ...obj2,
}

console.log(combinedObject);
console.log(Object.keys(combinedObject));
console.log(Object.keys(combinedObject).map(key => combinedObject[key]));




