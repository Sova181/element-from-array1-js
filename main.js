//import get from './func_get.js';
/*
const cities = require('./func_get');
console.log(cities.get(10, 'paris')); // 'paris'
*/

/* const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; 

console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // ''
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'
console.log(get(cities, 5, 'oops')); // null
console.log(get(cities, 6, 'oops')); // undefined
console.log(get(cities, 7)); // null  
*/

const func = require('./func_get');
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; 

console.log(func(cities, 1)); // 'london'
console.log(func(cities, 4)); // ''
console.log(func(cities, 10, 'paris')); // 'paris'
console.log(func(cities, -1, 'oops')); // 'oops'
console.log(func(cities, 5, 'oops')); // null
console.log(func(cities, 6, 'oops')); // undefined 
console.log(func(cities, 7)); // null  