enum AgeUnit {
  years = 'years',
  months = 'months',
}
type greetingFunction = (greeting: string) => string;
type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country: string;
  greet: greetingFunction;
};

const person: Person = {
  name: 'Essa',
  age: 20,
  ageUnit: AgeUnit.years,
  country: 'Pakistan',
  greet: (greeting) => {
    return `Good Moring`;
  },
};

function convertAgeToMonths(person: Person): Person {
  person.age = person.age * 12;
  person.ageUnit = AgeUnit.months;
  return person;
}
