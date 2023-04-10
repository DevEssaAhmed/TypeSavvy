// Default Parameters are given ()
function intro(name: string, age: number, country?:string): string {
    if (country) {
  return `My name is  ${name} and age  is ${age} and country is ${country}`;

    }
  return `My name is  ${name} and age  is ${age}`;
}

const intro2 = function intro(name: string, age: number): string {
  return `My name is  ${name} and age  is ${age}`;
};

const intro3 = (name: string, age: number): string => {
  return `My name is  ${name} and age  is ${age}`;
};

console.log(intro('essa', 20));
