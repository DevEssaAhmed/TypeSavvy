enum AutomobileTypes {
  car = 'car',
  bus = 'bus',
  bike = 'bike',
  truck = 'truck',
}

enum AutomobileBrands {
  ferrari = 'ferrari',
  honda = 'honda',
  bmw = 'bmw',
  toyota = 'toyota',
}

enum AutomobileColors {
  red = 'red',
  blue = 'blue',
  white = 'white',
  black = 'black',
  silver = 'silver',
}

interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description?: string;
}

const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> =
  {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: 'This is a ferrari',
  };

const honda: Automobile<string, string, string> = {
  type: 'car',
  brand: 'toyota',
  colors: ['red'],
  description: 'This is a Honda',
};

const toyota: Automobile<string, AutomobileBrands, number> = {
  type: 'car',
  brand: AutomobileBrands.toyota,
  colors: [66343.34354],
  description: 'This is a Toyota',
};
