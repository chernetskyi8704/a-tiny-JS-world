class Inhabitant {
  constructor(Species, Name, Gender, Saying) {
    this.Species = Species;
    this.Name = Name;
    this.Gender = Gender;
    this.Saying = Saying;
  }

  saying() {
    // return ` Saying: ${this.Saying}`;
    return ["Saying"].map(
      (data) =>
        ` ${
          data.bold().fontcolor("red") + ":".bold().fontcolor("red")
        } ${this.Saying.bold()}` + ";".bold().fontcolor("red")
    );
  }

  displayData() {
    return (
      ["Species", "Name", "Gender"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ".bold().fontcolor("red")) + ";".bold().fontcolor("red")
    );
  }
}
class Human extends Inhabitant {
  constructor(Species, Name, Gender, Saying) {
    super(Species, Name, Gender, Saying);
    this.Hands = "2";
    this.Legs = "2";
  }

  displayData() {
    return (
      `${super.displayData()} ` +
      ["Hands", "Legs"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ") +
      ";".bold().fontcolor("red") +
      this.saying()
    );
  }
}

class Animal extends Inhabitant {}

class Man extends Human {
  constructor(Name, Gender, Saying) {
    super("Man🤵", Name, Gender, Saying);
  }
}

class Woman extends Human {
  constructor(Name, Gender, Saying) {
    super("Woman👩", Name, Gender, Saying);
  }
}

class Dog extends Animal {
  constructor(Name, Gender, Saying) {
    super("Dog🐶", Name, Gender, Saying);
    this.Paws = "4";
    this.Tail = "1";
  }

  displayData() {
    return (
      `${super.displayData()} ` +
      ["Paws", "Tail"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ") +
      ";".bold().fontcolor("red") +
      this.saying()
    );
  }
}

class Cat extends Animal {
  constructor(Name, Gender, Saying) {
    super("Cat🐱", Name, Gender, Saying);
    this.Paws = "4";
    this.Tail = "1";
  }

  displayData() {
    return (
      `${super.displayData()} ` +
      ["Paws", "Tail"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ") +
      ";".bold().fontcolor("red") +
      this.saying()
    );
  }
}

class Hamster extends Animal {
  constructor(Name, Gender, Saying) {
    super("Hamster🐹", Name, Gender, Saying);
    this.Paws = "4";
    this.Tail = "1";
  }

  displayData() {
    return (
      `${super.displayData()} ` +
      ["Paws", "Tail"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ") +
      ";".bold().fontcolor("red") +
      this.saying()
    );
  }
}

class Snake extends Animal {
  constructor(Name, Gender, Saying) {
    super("Snake🐍", Name, Gender, Saying);
    this.Tail = "1";
  }
  displayData() {
    return (
      `${super.displayData()} ` +
      ["Tail"]
        .map(
          (data) =>
            `${
              data.bold().fontcolor("red") + ":".bold().fontcolor("red")
            } ${this[data].bold()}`
        )
        .join("; ") +
      ";".bold().fontcolor("red") +
      this.saying()
    );
  }
}

const man = new Man("Dimitrij", "Male", "Nice to meet you👋");
const woman = new Woman("Kate", "Female", "Have a good day🤗");
const dog = new Dog("Molly", "Female", "Bring me more food🍗 WOOF-woof!");
const cat = new Cat("Whiskey", "Male", "Meeow... I'm tired of Molly😑");
const hamster = new Hamster("Zhuzha", "Female", "Here is so cold🤧");
const snake = new Snake("Nagini", "Female", "Ssssssss");

// ======== OUTPUT ========
const allInhabitants = [man, woman, dog, cat, hamster, snake];

allInhabitants.map((inhabitan) => {
  print(inhabitan.displayData());
});
