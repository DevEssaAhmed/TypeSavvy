type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  
  protected constructor(protected name: string) {}

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  // public printHolidays() {
  //   if (this.holidays.length === 0) {
  //     return console.log('No holidays');
  //   } else {
  //     console.log('Here is the list of holidays');
  //     this.holidays.forEach((holiday, index) => {
  //       console.log(`${index + 1}, ${holiday.reason}, ${holiday.date}`);
  //     });
  //   }
  // }
  //? Using Abstract Method to short the code abstract methods are only defintions they don't have a body
  public abstract printHolidays(): void
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('IT Department');
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log('No holidays');
    } else {
      console.log(`Here is the list of holidays ${this.name}`);
      this.holidays.forEach((holiday, index) => {
        console.log(`${index + 1}, ${holiday.reason}, ${holiday.date}`);
      });
    }
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('Admin Department');
  }
  public printHolidays() {
    if (this.holidays.length === 0) {
      return console.log('No holidays');
    } else {
      console.log('Here is the list of holidays  ${this.name}');
      this.holidays.forEach((holiday, index) => {
        console.log(`${index + 1}, ${holiday.reason}, ${holiday.date}`);
      });
    }
  }
}

const itHolidays: Holidays = [
  {
    date: new Date(20022, 12, 25),
    reason: 'IT Department Day',
  },
  {
    date: new Date(20022, 12, 25),
    reason: 'Christmas Day',
  },
];

const adminHolidays: Holidays = [
  {
    date: new Date(20022, 12, 1),
    reason: 'Admin Department Day',
  },
  {
    date: new Date(20022, 12, 25),
    reason: 'Christmas Day',
  },
];

const itDepart: ItDepartment = new ItDepartment();
const adminDepart: AdminDepartment = new AdminDepartment();

itDepart.addHolidays(itHolidays);
adminDepart.addHolidays(adminHolidays);

itDepart.printHolidays();
adminDepart.printHolidays();
