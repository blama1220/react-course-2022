class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class PersonES6 extends Human {
  //ES6
  constructor() {
    super();
    this.name = "Maz";
  }
  //ES6
  printMyName() {
    console.log(this.name);
  }
}

class PersonES7 extends Human {
  //ES7
  name = "Maz";
  //ES7
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new PersonES6();
person.printMyName;
person.printGender;
