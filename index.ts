import { rmSync } from "fs";

abstract class Animal {
  constructor() {}
  abstract makeSound(): void;
}

class Dog extends Animal {
  constructor() {
    super();
  }
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  constructor() {
    super();
  }
  makeSound(): void {
    console.log("Meow");
  }
}

const animals: Animal[] = [new Dog(), new Cat(), new Cat(), new Dog()];

animals.forEach((el) => el.makeSound());

abstract class Shape {
  abstract name: string;
  abstract calculateArea(): number;
}

class Circle extends Shape {
  name: string = "Circle";
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Rectangle extends Shape {
  name: string = "Rectangle";
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  name: string = "Circle";
  color: string = "blue";
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  calculateArea(): number {
    console.log(this.color);
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class ColoredRectangle extends ColoredShape {
  name: string = "Rectangle";
  color: string = "red";
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea(): number {
    console.log(this.color);
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(10, 20);
const circle = new Circle(4);

console.log(rectangle.calculateArea());
console.log(circle.calculateArea());

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  constructor() {
    super();
  }
  turnOn(): void {
    console.log("Washing maschine started");
  }
  turnOff(): void {
    console.log("Wasching machine finished");
  }
}

class Refrigerator extends Appliance {
  constructor() {
    super();
  }
  turnOn(): void {
    console.log("Refrigerator started");
  }
  turnOff(): void {
    console.log("Refrigerator finished");
  }
}

const appliance: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliance.forEach((el) => {
  el.turnOn(), el.turnOff();
});

abstract class Account {
  protected balance: number = 0;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }
  abstract deposit(amount: number): number;
  abstract withdraw(amount: number): number | string;
}

class SavingsAccount extends Account {
  percentage: number;
  constructor(percentage: number, initialBalance: number) {
    super(initialBalance);
    this.percentage = percentage;
  }
  deposit(amount: number): number {
    this.balance += amount;
    this.balance += (this.balance * this.percentage) / 100;
    return this.balance;
  }
  withdraw(amount: number): number | string {
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      return "Insufficient funds in the account";
    }
  }
}

class CheckingAccount extends Account {
  commission: number;
  constructor(commission: number, initialBalance: number) {
    super(initialBalance);
    this.commission = commission;
  }
  deposit(amount: number): number {
    this.balance += amount;
    return this.balance;
  }
  withdraw(amount: number): number | string {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.balance -= (amount * this.commission) / 100;
      return this.balance;
    } else {
      return "Insufficient funds in the account";
    }
  }
}

const savingsAccount = new SavingsAccount(10, 1000);
const checkingAccount = new CheckingAccount(2, 3000);
console.log(savingsAccount.deposit(1000));
console.log(savingsAccount.withdraw(1000));
console.log(checkingAccount.deposit(1000));
console.log(checkingAccount.withdraw(1000));

abstract class Media {
  abstract play(): void;
}

class Audio extends Media {
  constructor() {
    super();
  }
  play(): void {
    console.log("Playing audio");
  }
}

class Video extends Media {
  constructor() {
    super();
  }
  play(): void {
    console.log("Playing video");
  }
}
const media: Media[] = [new Audio(), new Video()];

media.forEach((el) => el.play());
