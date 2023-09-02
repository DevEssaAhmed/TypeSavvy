function ParameterDecorator(
  classPrototype: Object,
  methodName: string,
  index: number
) {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);
}

class User {
  constructor(public _userName: string) {}
  public userAge(@ParameterDecorator age: string) {
    console.log(age);
  }
}
