// method => object
//  function => windonw, global

const book = {
  title: 'The title',
  authors: ['john', 'mark', 'rob'],
  read() {
    console.log(this);
  },
  printAuthors() {
    this.authors.forEach(function (author) {
      console.log(this.author, this.title);
    }, this);
  },
};

book.read();

book.stopreading = function () {
  console.log(this);
};

function watchmovie() {
  console.log(this);
}

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//     this.points = 0;
//   }
//   login() {
//     console.log(this.name, 'Has logged in');
//   }
//   logout() {
//     console.log(this.name, 'Has logged out');
//   }
//   addPoints() {
//     this.points++;
//     console.log('Total Points', this.points);
//   }
// }

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;
}

User.prototype.login = function () {
  console.log(this.name, 'Has logged in');
};

function AdminUser(name, email, peopleReporting) {
  User.apply(this, [name, email]);
  this.peopleReporting = peopleReporting;
}

AdminUser.prototype = Object.create(User.prototype);

AdminUser.prototype.updatePeopleReporting = function (newNumber) {
  this.peopleReporting = newNumber;
};

const user = new User('John', 'john@email.com');
const admin = new AdminUser('Mark', 'mark@email.com');

const book = {
  title: 'The tile',
};

const book2 = new Object();
book2.title = 'Book 2 Title';
