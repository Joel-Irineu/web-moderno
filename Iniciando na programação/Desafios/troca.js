let a = 7;
let b = 94;
// A = 7 e B = 94
console.log(`A = ${a} e B = ${b}`);

let c = a;
a = b;
b = c;

// A = 94 e B = 7
console.log(`A = ${a} e B = ${b}`);