import { arraysAreEqual } from './task02.mjs';
console.log(arraysAreEqual([1, 2], [1, 4]) ? 'True' : 'False');
console.log(arraysAreEqual([1, 4], [1, 4]) ? 'True' : 'False');
console.log(arraysAreEqual([1, 2], [1, 4, 5]) ? 'True' : 'False');