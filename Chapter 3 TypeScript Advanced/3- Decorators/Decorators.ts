function FirstDecorator() {
  return function (constructor: Function) {
    //! Decorator Factory
    console.log(constructor);
  };
}

@FirstDecorator()
class Aircaft {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const aircraft = new Aircaft('A380', 'John');

enum Manufacturers {
  boeing = 'boeing',
  airbus = 'airbus',
}

interface AircraftInterface {
  _aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function AircaftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = 'United States of America';
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = 'Jet';
      target.prototype.airbusMethod = () => {
        console.log('Function performed by airbus');
      };
    } else {
      target.prototype.origin = 'France';
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = 'Airbus';
      target.prototype.boeingMethod = () => {
        console.log('Function performed by boeing');
      };
    }
  };
}

@AircaftManufacturer(Manufacturers.airbus)
class Airplane implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const airplane: AircraftInterface = new Airplane('A380', 'John');
console.log(airplane.manufacturer);

airplane.airbusMethod
  ? airplane.airbusMethod()
  : console.log('Method Does Not Exist');

@AircaftManufacturer(Manufacturers.boeing)
class Helicopter implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  public pilotName() {
    console.log(this.pilot);
  }
  public get aircraftModel() {
    return this._aircraftModel;
  }
}

const helicopter: AircraftInterface = new Airplane('B126', 'John');

function MethodDecorator(
  classPrototype: Object,
  methodName: string,
  descriptor: PropertyDecorator
){
  
};
