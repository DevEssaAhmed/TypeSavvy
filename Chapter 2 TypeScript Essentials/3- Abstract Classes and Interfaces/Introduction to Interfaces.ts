interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

const person: Person = {
  name: 'essa',
  email: 'essa@email.com',
  age: 21,
};

interface Car {
  name: string;
}
//  With a structure like this we are repeating our code
interface Toyota {
  name: string;
}

interface Suzuki extends Car {
  model: string; 
}
 