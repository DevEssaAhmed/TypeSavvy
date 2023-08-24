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

interface CommercialVehicle {
  capacity: string;
  licenseRenewalDate: Date;
}

class Car implements Automobile<string, AutomobileBrands, AutomobileColors> {
  public type: string = 'car';
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}
}

const ferrari: Car = new Car(
  AutomobileBrands.bmw,
  [AutomobileColors.red],
  'This is BMW'
);

class Truck
  implements
    Automobile<string, AutomobileBrands, AutomobileColors>,
    CommercialVehicle
{
  public type: string = 'truck';
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: string,
    public licenseRenewalDate: Date
  ) {}
}
const toyotaTruck: Truck = new Truck(
  AutomobileBrands.bmw,
  [AutomobileColors.red],
  'This is BMW',
  '5 tons',
  new Date
);
