const a = "42";
const b = Number(a);

console.log(a); // "42"
console.log(b); // 42

var create = 200;

create = create * 2;

console.log (create);
// преобразует `amount` в строку и
// добавляет "$" в начало

create = "$" + String(create);

console.log(create);

const TAX_RATE = 0.08;

var create = 220;

create = create * 2;

create = create + (create * TAX_RATE);

console.log(create);
