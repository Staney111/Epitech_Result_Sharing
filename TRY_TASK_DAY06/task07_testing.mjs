import { objectsDeeplyEqual } from './task07.mjs'
const obj = {here: {is: "an"}, object: 2};
const obj2 = {here: {is: "an"}, object: 2, yaa: 4};
console.log(objectsDeeplyEqual(obj, obj));
console.log(objectsDeeplyEqual(obj, {here: 1, object: 2}));
console.log(objectsDeeplyEqual(obj, {here: {is: "an"}, object: 2}));
console.log(objectsDeeplyEqual(obj2, obj));
console.log(objectsDeeplyEqual(obj2, {here: {is: "an"}, object: 2, yaa: 4}));
console.log(objectsDeeplyEqual(obj2, {here: {is: "an"}, object: 2}));