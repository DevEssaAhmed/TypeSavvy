const sum = (a:number, b:number):number => a + b;

console.log(sum(4, 8));

// ! In JS we can call it like this but this should not be allowed so we use TypeScript

console.log(sum(4, 8));


//! To Compile This Into JavaScript we run npx tsc index.ts