enum Roles {
  admin = 'admnin',
  author = 'author',
  editor = 'editor',
}

enum PermissionsList {
  read = 'read',
  write = 'write',
  execute = 'execute',
}

interface Role {
  role: Roles;
}

interface UserPermissions {
  permissions: PermissionsList[];
}

interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number;
  greet?: () => void;
}

interface AdminPerson extends Person, Role, UserPermissions {
  numberOfUsersReporting: number;
}

const person: Person = {
  name: 'essa',
  email: 'essa@email.com',
  age: 21,
};

const Essa: AdminPerson = {
  name: 'Essa',
  email: 'essa@email.com',
  age: 21,
  phone: 123,
  role: Roles.admin,
  numberOfUsersReporting: 3,
  permissions: [PermissionsList.read],
};

interface Car {
  name: string;
}
//  With a structure like this we are repeating our code
interface Toyota {
  name: string;
}

interface Suzuki extends Car {
  model: string;
}

const car: Car = {
  name: 'Sedan',
};

const ciaz: Suzuki = {
  name: 'Sedan',
  model: 'Ciaz',
}; 
