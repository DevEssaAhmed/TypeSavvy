// Void Type is assigned to function which does not return a value
const addNumbers = (): void => {
  console.log(2 + 4);
};
addNumbers();

// Never Type is assigned to function which never completes
const throwError = (): never => {
  throw new Error('This is of never type');
};
