let car = {
  name: "Civic",
  company: "Honda",
};

//! In the above the example type is infered automatically as object by TypeScript based on the value provided

let cart: {
  fruits: Array<string>;
  vegetable: string;
} = {
  fruits: ["Apple"],
  vegetable: "Carrots",
};

//! To define Types like this is tidy process so  we can use it like this
type Article = {
  author: string;
  content: string;
};

// ! Index Signature

type Airplane = {
  flightNumber: string;
  seats: {
    [key: string]: string;
  };
};

