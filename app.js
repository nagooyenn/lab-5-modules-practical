import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

console.log('Add:', add(5, 3));
console.log('Uppercase:', toUpperCase('hello'));
console.log('Multiply:', multiply(4, 5));
console.log('Max:', findMax([1, 2, 3, 4, 5]));
console.log('Reversed:', reverseArray([1, 2, 3]));

addAndLogUpper(10, 20);