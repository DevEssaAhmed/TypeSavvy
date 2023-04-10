type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

//! Short End Form For Declaring Function Call Signature
type Reserve = (
  departureDate: Date,
  returnDate: Date,
  departingFrom: string,
  destination: string
) => Reservation;

//! Using Full Form. We can't use arrow syntax. We can have multiple call signatures

type Reserve1 = {
  (
    departureDate: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string
  ): Reservation | never;
  (departureDate: Date, departingFrom: string, destination: string):
    | Reservation
    | never;
};

const reserve: Reserve = (
  departureDate, //: Date,

  returnDateOrDepartingFrom, //: Date | string,
  departingFromOrDestination, //: string,
  destination? //: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departureDate: departureDate,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartingFrom === 'string') {
    return {
      departureDate: departureDate,

      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error('Please provide valid details to reserve a ticket');
};

console.log(reserve(new Date(), new Date(), 'New York', 'Turkey'));
