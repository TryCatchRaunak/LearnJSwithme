let a, b, rest;
[a, b] = [10, 30];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 30, 40, 20, 50, 70];

console.log(rest);