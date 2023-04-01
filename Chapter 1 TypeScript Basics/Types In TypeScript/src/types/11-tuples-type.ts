let person: [string, string, number?];

person = ['john', 'Doe', 12];

type listOfStudents = [number, boolean, ...string[]];

const passingStudnets: listOfStudents = [1, true, 'John'];
const failingStudnets: listOfStudents = [1, false, 'John'];
