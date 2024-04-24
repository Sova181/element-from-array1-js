# element-from-array1-js
Реализуйте и экспортируйте по умолчанию функцию get(), которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Исходный массив меняться не должен. Функция принимает на вход три аргумента:
 - Массив
 - Индекс
 - Значение по умолчанию (равно null)

Пример:
const cities = ['moscow', 'london', 'berlin', 'porto', '', null, undefined];

get(cities, 1); // 'london'
get(cities, 4); // ''
get(cities, 10, 'paris'); // 'paris'
get(cities, -1, 'oops'); // 'oops'
get(cities, 5, 'oops'); // null
get(cities, 6, 'oops'); // undefined
get(cities, 7); // null
