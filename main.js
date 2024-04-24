function get(array, index, defaultValue = null) {
    if(array.at(index) !== undefined ){
       console.log(  array.at(index) );
    }
    else {
        console.log(  defaultValue);
    }
  }
  const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined]; 

console.log(get(cities, 1)); // 'london'
console.log(get(cities, 4)); // ''
console.log(get(cities, 10, 'paris')); // 'paris'
console.log(get(cities, -1, 'oops')); // 'oops'
console.log(get(cities, 5, 'oops')); // null
console.log(get(cities, 6, 'oops')); // undefined
console.log(get(cities, 7)); // null