// 객체 리터럴

const objectName = {
    a: 1,
    b : 'bb'
}

const outsideObject = {
    objectName : objectName,
}

console.log(outsideObject.objectName);

const es6OutsideObject = {
    objectName
}

console.log(es6OutsideObject.objectName);

const objectMethods = {
    method1 : function (){
        console.log("this is method1");
    }
}

objectMethods.method1();

const es6ObjectMethods = {
    method1 (){
        console.log("this is method1 es6");
    }
}

es6ObjectMethods.method1();


const arr = ['a', 'b', 'c'];
const objectWithOperation = {
    [arr[0]]: 'this is a',
    [`${1+3+'ha'}`]: 'this is 4ha',
}
console.log(objectWithOperation);

// optional chaining

const weekdays ={
    mon :{
        open:10,
        close:22,
    },
    tue : {
        open:11,
        close:20,
    }
}

console.log(weekdays.mon);
console.log(weekdays.mon.open);
console.log(weekdays.wed);

if(weekdays.wed) console.log(weekdays.wed.open);
console.log(weekdays.wed?.open);

const thisIsNull = null;
// console.log(thisIsNull.a);
console.log(thisIsNull?.a);
//
// objectMethods.method1();
objectMethods.method2?.() ?? console.log('no method');

// Map
const thisIsMap = new Map();
thisIsMap.set(1, 'this is 1');
thisIsMap.set(true, 'this is true');
thisIsMap.set('aa','this is aa');
console.log(thisIsMap);
console.log(thisIsMap.get(1));
console.log(thisIsMap.get(true));
console.log(thisIsMap.get(2));

for (const element of thisIsMap) {
    console.log(element);
}

thisIsMap.delete(1);

// set
const thisIsSet = new Set();
thisIsSet.add('pizza');
thisIsSet.add('pasta');
thisIsSet.add(1);
thisIsSet.add(true);
console.log(thisIsSet);
thisIsSet.add('pasta');
console.log(thisIsSet.has('pizza'));
console.log(thisIsSet.has('risotto'));

for (const element of thisIsSet) {
    console.log(element);
}

