type readOnlyTuple = readonly [number, boolean, ...string[]];

type readOnlyStringArray = readonly string[];
// Or it can also be defined as
type readOnlyStringArray1 = Readonly<string[]>;
// And tuple can also be done using this syntax
type readOnlyTuple1 = Readonly<[number, boolean, ...string[]]>;
