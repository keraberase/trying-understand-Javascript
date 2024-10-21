// const a = "42";
// const b = Number(a);

// console.log(a); // "42"
// console.log(b); // 42

// var create = 200;

// create = create * 2;

// console.log (create);
// // преобразует `amount` в строку и
// // добавляет "$" в начало

// create = "$" + String(create);

// console.log(create);

// const TAX_RATE = 0.08;

// var create = 220;

// create = create * 2;

// create = create + (create * TAX_RATE);

// console.log(create);

// const number_1 = 99;
// const number_2 = 123;

// const number = number_1 * number_2;
//  console.log(number);

//  const text = "Всем привет, меня зовут Кирил" .slice(0,11);
//   console.log(text);

//   const bool = true && false;
//    console.log(bool);


// const blowBaloon = (15 + 9) * 2;
// console.log(blowBaloon);

// let age = 33; 

// const secondInMinutes =  60;
// const minutesInHours = 60;
// const secondInHours = secondInMinutes * minutesInHours;
// const hoursInDay = 24; 
// const secondInDay = secondInHours * hoursInDay;
// const dayInYear = 365;
// const secondInYear = dayInYear * secondInDay;
// let secondOfAge = age * secondInYear;


// console.log (secondInHours);
// console.log(secondInDay);
// console.log(secondInYear);
// console.log(secondOfAge);



var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

console.log(uniqueInOrder);


let num = 0;
num++;
num++;
num++;
console.log(num);

let animals = 100;
animals *= 2; 
console.log(animals);

var myThing = 5;
myThing = "это строка";
console.log(myThing);


function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));

function checkEvenOdd(num) {
if (num % 2 === 0){ return "Четные";
} 
else{return "Нечетные";

}
}
console.log(checkEvenOdd(11));


var java = "Java";
java.length;
var script = "Script";
script.length;
var javascript = java + script;
console.log(javascript.length);