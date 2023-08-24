let person = {
  name: 'Essa',
};

class Person {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    name = 'John'; //! name is not called an variable but it is called property of class
    email = 'john@mail.com';
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const person1 = new Person('John', 'email');

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    (this.name = name), (this.email = email), (this.age = age);
  }
}

class AdminUser extends User {
  isAdmin: boolean = true;
  usersReporting: number;

  constructor(
    usersReporting: number,
    name: string,
    email: string,
    age: number
  ) {
    super(name, email, age);
    this.usersReporting = usersReporting;
  }
}

const user: User = new User('Essa', 'email', 20);
const admin: AdminUser = new AdminUser(10, 'Essa', 'email', 20);

// Access Modiffiers

class AccessModifier {
  public name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  private getAge() {
    return this.age;
  }
}

let person12: AccessModifier = new AccessModifier('John', 32);
person12.name = 'Mike';

// Without access modifier we can chnage the property of the class using the object instance of class
class Admin extends AccessModifier {
  public returnName() {
    return this.name;
  }
}
const admin1: Admin = new Admin('Mark', 42);

// Using a mutator

class Mutator {
  private _age: number | undefined;
  constructor(private name: string) {}

  public getNmme() {
    return this.name;
  }
  public set age(age: number) {
    if (age > 200 || age < 0) {
      throw new Error('The age must be within range of 0-200');
    }
    this._age = age;
  }
  public get age() {
    if (this._age === undefined) {
      throw new Error('The age property has not been set as yet');
    }
    return this._age;
  }
}
