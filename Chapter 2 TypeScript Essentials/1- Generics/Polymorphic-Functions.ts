//! Function Overloads
type Filter = {
  (array: number[], predicate: (item: number) => boolean): number[];
  (array: string[], predicate: (item: string) => boolean): string[];
  (array: object[], predicate: (item: object) => boolean): object[];
};

function filter(array: any[], predicate: Function) {
  //! Predicate is a function which either returns true or false

  let result: [] = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
}

//* Since By Using Function Overloading when we have multiple arguments we have to define multiple times to solve this we have Generics
//!  Converting Above Call Signatures into Generics
type FilterGeneric = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
};

const filterGeneric: FilterGeneric = (array, predicate) => {
  //! Predicate is a function which either returns true or false

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let numbers = [1, 3, 4, 6, 9, 7, 10, 12];
function predicate(item: number) {
  return item < 7;
}

let strings = ['cat', 'bat', 'rat', 'mat'];
function filterCats(item: string) {
  return item === 'cat';
}

console.log(filter(numbers, predicate));
console.log(filter(strings, filterCats));

//? Short Hand Form For Generic
type ShortHand = <T>(array: T[], predicate: (item: T) => boolean) => T[];
type ShortHand2<T> = (array: T[], predicate: (item: T) => boolean) => T[];
//* For Short Hand 2 Typw we need to also define the type when calling it is not that flexible

const shorthand: ShortHand2<string> = (array, predicate) => {
  //! Predicate is a function which either returns true or false

  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};
