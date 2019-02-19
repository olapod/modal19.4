'use strict';

//Task One
var str1 = 'Hello';
var str2 = 'World';
var strings = str1 + ' ' + str2;

console.log('Łączenie stringów: ' + strings);

//Task Two

var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};
console.log('Mnożenie: ' + multiply(2));

//Task Three
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (a, b) {
    return a + b;
  }) / numbers.length;
};
console.log('Średnia: ' + average(1, 2, 3, 99));

//Task four
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log('Średnia ocen: ' + average.apply(undefined, grades));

//Task five
var data = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = data[2],
    secondName = data[4];

console.log('Imię: ' + firstName + ' Nazwisko: ' + secondName);
