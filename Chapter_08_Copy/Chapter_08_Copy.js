let myAddress = 'Seoul';
let OldMyAddress = myAddress;
myAddress = 'Busan';

console.log(myAddress, OldMyAddress);

const profile = {
    address: 'Seoul'
};
const afterProfile = profile;
afterProfile.address = 'Busan';
console.log(profile);
console.log(afterProfile);

//2, 객체 복사(깊은 복사),
const profile2 = {
    address: 'Seoul',
    family: ['Tony','Chris']
}

//  얕은 복사. 프로퍼티가 원시 타입이면 복사 O, 객체 타입이면 X
const profile2Copy = Object.assign({},profile2);
profile2Copy.address = 'Deagu';

profile2Copy.family.push('Levin');
profile2Copy.family.push('Roy');

console.log(profile2);
console.log(profile2Copy);

