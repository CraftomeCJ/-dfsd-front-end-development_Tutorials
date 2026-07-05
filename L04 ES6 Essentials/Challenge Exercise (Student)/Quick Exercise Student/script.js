const numbers = [5, 10, 15, 20];

// 1. Create a new array with numbers tripled
const tripled = numbers.map(n => n * 3);
console.log('Tripled:', tripled); // [15, 30, 45, 60]

// 2. Filter numbers greater than 10
const greaterThan10 = numbers.filter(n => n > 10);
console.log('Greater than 10:', greaterThan10); // [15, 20]

// 3. Sum all numbers using reduce
const total = numbers.reduce((sum, n) => sum + n, 0);
console.log('Sum:', total); // 50
