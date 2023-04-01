// Infers as Array of Numbers
let arr1 = [1, 2, 4];
// Infers as Array of String
let arr2 = ["a", "b", "c"];
// Infers as Union of Number and String
let arr3 = ["a", "b", 1, 2];

// Official syntax of declaring an number

let arr4: number[] = [1, 2, 3];

// To declare array of strings
let arr5: Array<string> = ["a"];

// To declare an array of object

type Airplane1 = {
  flightNumber: string;
  seats: {
    [key: string]: string;
  };
};

type Airplanes = Airplane1[];

let arr6: Airplanes = [
  {
    flightNumber: "1",
    seats: {
      PK01: "Essa",
    },
  },
  {
    flightNumber: "2",
    seats: {
      PK01: "John",
    },
  },
];
