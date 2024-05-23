const func = require('./func_get');
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; 

console.log(func(cities, 1)); // 'london'
console.log(func(cities, 4)); // ''
console.log(func(cities, 10, 'paris')); // 'paris'
console.log(func(cities, -1, 'oops')); // 'oops'
console.log(func(cities, 5, 'oops')); // null
console.log(func(cities, 6, 'oops')); // undefined 
console.log(func(cities, 7)); // null  