class Automobile {
  public static color: string = 'red';
  public static calculateMileage(miles: number, liters: number) {
    return miles / liters;
  }
}
console.log(Automobile.color);
console.log(Automobile.calculateMileage(50, 10));
