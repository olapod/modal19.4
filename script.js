//Task One
const str1 ='Hello';
const str2 ='World';
const strings= `${str1} ${str2}`

console.log('Łączenie stringów: ' + strings);

//Task Two

var multiply = (x, y = 1) => { return x * y; }; 
console.log('Mnożenie: ' + multiply(2));

//Task Three
let average = (...numbers) => numbers.reduce((a, b) => a + b) / numbers.length;
console.log('Średnia: ' + average(1,2,3,99)); 


//Task four
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const average =  grades.reduce((a, b) => a + b) / grades.length;
console.log('Średnia ocen: ' + average); 
 
//Task five
const data =  [1, 4, 'Iwona', false, 'Nowak']
const [ , , firstName, ,secondName] = data
console.log('Imię: ' + firstName + ' Nazwisko: ' + secondName);