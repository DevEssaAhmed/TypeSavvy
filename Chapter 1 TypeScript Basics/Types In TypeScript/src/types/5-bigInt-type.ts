let bigInt1 = BigInt(9458845);

let bigInt2 = 1245648n;
let safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt + 1);
console.log(safeInt + 2);

let a: bigint = BigInt(12345678);
//! Literal Syntax
let b: bigint = 123445678n;

let c: bigint = a - b;

//! BigInt does not allow decimal or float number
//! Math object also does not work with bigInt
