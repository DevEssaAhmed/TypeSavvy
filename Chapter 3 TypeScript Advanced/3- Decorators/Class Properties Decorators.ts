function PropertyDecorator(classPrototype: Object, propertyName: string) {
  console.log(classPrototype);
  console.log(propertyName);
}

function AccessorDecorator(
  classPrototype: Object,
  accessorName: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log(classPrototype);
  console.log(accessorName);
  console.log(propertyDescriptor);
}

class Airplane11 {
  @PropertyDecorator
  public _aircraftModel: string;
  constructor(aircraftModel: string) {
    this._aircraftModel = aircraftModel;
  }

  public static seatCount(): void {
    console.log('150 Seats');
  }

  public pilotName(name: string, lastName: string) {
    console.log(name);
  }

  @AccessorDecorator
  public get aircraftModel() {
    return this._aircraftModel;
  }
}
