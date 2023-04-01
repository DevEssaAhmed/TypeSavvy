type Car = {
  name: string;
  automatic: boolean;
  color: string;
};

type Bike = {
  name: string;
  automatic: boolean;
};

type CarAndBikeIntersection = Car & Bike;

let honda: CarAndBikeIntersection = {
  name: "Buddy",
  automatic: true,
  color: "white",
};
