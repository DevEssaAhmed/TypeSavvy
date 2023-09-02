enum Manufacturers {
  boeing1 = 'boeing',
  airbus1= 'airbus',
}

interface AircraftInterface {
  _aircraftModel: string;
  pilotName: () => void;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
  airbusMethod?: () => void;
  boeingMethod?: () => void;
}

function StaticMethodDecorator(
  // classPrototype: Object,
  constructor: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(constructor);
  console.log(methodName);
  console.log(descriptor);
  descriptor.writable = true;
}

class Airplane5 implements AircraftInterface {
  constructor(public _aircraftModel: string, private pilot: string) {}

  @StaticMethodDecorator
  public static seatCount(): void {
    console.log('250 Seats');
  }

  // @MethodDecorator
  public pilotName() {
    console.log(this.pilot);
  }

  public get aircraftModel() {
    return this._aircraftModel;
  }
}
const airplane5: AircraftInterface = new Airplane('Airbus A380', 'John');

airplane.pilotName = () => console.log('Function Changed');

airplane.pilotName();
