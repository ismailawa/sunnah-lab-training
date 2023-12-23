// let a = 3;
// let b = 5;
// let c = a + b;

// // integer   eg. 2, -4, 6999
// // string    eg. "aliyu", "sunnah"

// /**
//  *  @param {}
//  * hhdhdhdhdh
//  *   hdhdhhhfjjf
//  */
// console.log(c);

// let name;
// name = 'khalid';

// console.log(name);

// let second = 'kasim';

// console.log(second);

// console.log(name == name);

// let answer = true;
// let noAnswer = false;

// let age = 6;

// if (age > 18) {
//   console.log(age);
// }
// if (age > 11) {
//   console.log(age);
// }

// if (age > 18) {
//   console.log(age);
// } else {
//   console.log('You Are not of to 18 years');
// }

// switch (age) {
//   case 4:
//     console.log(4);
//     break;
//   case 5:
//     console.log(5);
//     break;
//   case 18:
//     console.log(18);
//     break;

//   default:
//     console.log('You are not q');
//     break;
// }

// if (age == 5) {
//   console.log(5);
// } else if (age == 6) {
//   console.log(6);
// } else if (age == 7) {
//   console.log(7);
// } else {
//   console.log('not');
// }

// let sentinel = 100;
// let increase = 1;

// while (increase <= sentinel) {
//   console.log(increase);
//   increase = increase + 1;
// }

// do {
//   console.log(increase);
// } while (increase <= sentinel);

// for (let increase = 1; increase < sentinel; increase++) {
//   console.log(increase);
// }

let ages = [12, 45, 67, 89];

ages.push(35);

console.log('After push');
console.log(ages);

let last = ages.pop();
console.log('last number', last);
console.log('After pop');
console.log(ages);
let lastNum = ages.pop();
console.log('second last number', lastNum);
console.log(ages);

let indexOfLastNumber = ages.length - 1;
