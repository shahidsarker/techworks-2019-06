// let userOne = {
//   name: 'Oscar',
//   age: 34,
//   sayHello() {
//     return this.name + ' says Hello'
//   }
// }

// console.log(userOne)

class User {
  constructor(passedInName, passedInAge) {
    this.name = passedInName;
    this.age = passedInAge;
    this.counter = 0;
  }

  login() {
    console.log(this.name + " has logged in.");
    return this;
  }

  logout() {
    console.log(this.name + " has logged out.");
    return this;
  }

  sayHello() {
    console.log("Hello, I am " + this.name);
    return this;
  }

  countUp() {
    this.counter++;
    return this;
  }
}

let userOne = new User("Oscar", 24);
let userTwo = new User("Roger", 24);

console.log(userOne);

class Admin extends User {
  deleteUser(user) {
    usersArray = usersArray.filter(u => u.name !== user.name);
  }
}

let usersArray = [userOne, userTwo];

function doThis() {
  console.log("Did this!");
}

let doThat = () => {
  console.log("Did that!");
};
