type User = {
  name: string;
};

type AdminUser = {
  isAdmin: boolean;
};

//  Intersection
const userAndAdmin: User & AdminUser = {
  name: 'Essa',
  isAdmin: true,
};

// Union Type
const userOrAdmin: User | AdminUser = {
  name: 'Essa',
};

// Tuples
type ResponseTuple = [string, number];

interface Person {
  name: string;
}

interface Person {
  age: number;
}
