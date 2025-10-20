import { arrayFiltering } from './task06.mjs'
const toFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = arrayFiltering(toFilter, function (value) {
return value % 3 === 0;
});
console.log(res);

const toFilter1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const res1 = arrayFiltering(toFilter1, function (value) {
return value % 8 === 0;
});
console.log(res1);

const toFilter2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const res2 = arrayFiltering(toFilter2, function (value) {
return value % 1 === 0;
});
console.log(res2);