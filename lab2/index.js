`use strict`;
// 1.2.3
let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 180; 
car1.driver = new Object(); 
car1.driver.name = "Ruslan Kurman";
car1.driver.category = "B";
car1.driver.personalLimitations = null;
car1.tuning = true;
car1.numberOfAccidents = 0;
// 1.2.4
let car2 = {
  color: "yellow",
  maxSpeed: 240, 
  driver: driver = {
    name: "Ruslan Kurman",
    category: "B",
    personalLimitations: null,
  },
  tuning: false, 
  numberOfAccidents: 2,
}
// 1.2.5
car1.driver = () => {
  console.log("I am not driving at night");
};
// 1.2.6
car2.driver = () => {
  console.log("I can drive anytime");
};
// 1.2.7
function Truck(color, weight, avgSpeed, brand, model) {
  this.color = color;
  this.weight = weight;
  this.avgSpeed = avgSpeed;
  this.brand = brand;
  this.model = model;
// 1.2.9
  this.trip = function () {
    if (!this.driver) {
      console.log("No driver assigned");
    } else {
      let message = "Driver " + this.driver.name;
      if (this.driver.nightDriving) {
        message += " drives at night";
      } else {
        message += " does not drive at night";
      }
      message += " and has " + this.driver.experience + " years of experience.";
      console.log(message);
    }``
  };
}
// 1.2.8
Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
  this.driver = {
    name: name,
    nightDriving: nightDriving,
    experience: experience,
  };
};
// 1.2.10
let truck1 = new Truck("red", 10000, 80.5, "Volvo", "FH16");
let truck2 = new Truck("blue", 12000, 75.0, "Scania", "R500");
// 1.2.12
class Square {
  constructor(a) {
      this.a = a;
  }

  static help() {
      console.log("Square: four equal sides and four right angles.");
  }

  get side() {
      return this.a;
  }

  set side(value) {
      this.a = value;
  }

  length() {
      console.log(`Perimeter: ${this.a * 4}`);
  }

  square() {
      console.log(`Area: ${this.a ** 2}`);
  }

  info() {
      console.log(`Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
      console.log("Angles: 90, 90, 90, 90");
      this.length();
      this.square();
  }
}
// 1.2.13
class Rectangle extends Square {
  constructor(a, b) {
      super(a);
      this.b = b;
  }

  static help() {
      console.log("Rectangle: opposite sides are equal, four right angles.");
  }

  get width() {
      return this.b;
  }

  set width(value) {
      this.b = value;
  }

  length() {
      console.log(`Perimeter: ${2 * (this.a + this.b)}`);
  }

  square() {
      console.log(`Area: ${this.a * this.b}`);
  }

  info() {
      console.log(`Sides: ${this.a}, ${this.b}, ${this.a}, ${this.b}`);
      console.log("Angles: 90, 90, 90, 90");
      this.length();
      this.square();
  }
}
// 1.2.14
class Rhombus extends Square {
  constructor(a, alpha, beta) {
      super(a);
      this.alpha = alpha;
      this.beta = beta;
  }

  static help() {
      console.log("Rhombus: four equal sides, opposite angles are equal.");
  }

  get alphaAngle() {
      return this.alpha;
  }

  set alphaAngle(value) {
      this.alpha = value;
  }

  get betaAngle() {
      return this.beta;
  }

  set betaAngle(value) {
      this.beta = value;
  }

  square() {
      let radAlpha = (this.alpha * Math.PI) / 180;
      console.log(`Area: ${this.a ** 2 * Math.sin(radAlpha)}`);
  }

  info() {
      console.log(`Sides: ${this.a}, ${this.a}, ${this.a}, ${this.a}`);
      console.log(`Angles: ${this.alpha}, ${this.beta}, ${this.alpha}, ${this.beta}`);
      this.length();
      this.square();
  }
}
// 1.2.20
class Parallelogram extends Rectangle {
  constructor(a, b, alpha, beta) {
    super(a, b);
    this.alpha = alpha;
    this.beta = beta;
  }

  static help() {
    console.log(
      "Parallelogram - це геометрична фігура-чотирикутник, у якої протилежні сторони паралельні та протилежні кути рівні."
    );
  }

  square() {
    const area = this.a * this.b * Math.sin((this.alpha * Math.PI) / 180);
    console.log("Площа паралелограма: " + area);
  }

  info() {
    console.log("Характеристика паралелограма:");
    console.log("Довжина: " + this.a);
    console.log("Ширина: " + this.b);
    console.log("Тупий кут: " + this.alpha + " градусів");
    console.log("Гострий кут: " + this.beta + " градусів");
    this.length();
    this.square();
  }
}
// 1.2.23
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24
const mySquare = new Square(5);
mySquare.info();

const myRectangle = new Rectangle(5, 10);
myRectangle.info();

const myRhombus = new Rhombus(5, 120, 60);
myRhombus.info();

const myParallelogram = new Parallelogram(5, 10, 120, 60);
myParallelogram.info();
// 1.2.25
function Triangular(a = 3, b = 4, c = 5) {
  const triangle = { a, b, c };
  return triangle;
}
// 1.2.26
const triangle1 = Triangular();
const triangle2 = Triangular(6, 8, 10);
const triangle3 = Triangular(9, 12, 15);

console.log(triangle1);
console.log(triangle2);
console.log(triangle3);

// 1.2.27
function PiMultiplier(multiplier) {
  return function () {
    return Math.PI * multiplier;
  };
}
// 1.2.28
const multiplyBy2 = PiMultiplier(2);
const multiplyBy1_5 = PiMultiplier(2 / 3);
const divideBy2 = PiMultiplier(1 / 2);

console.log(multiplyBy2());
console.log(multiplyBy1_5());
console.log(divideBy2());
// 1.2.29
function Painter(color) {
  return function (obj) {
    if (obj && obj.type) {
      console.log(color + " " + obj.type);
    } else {
      console.log("No 'type' property occurred!");
    }
  };
}
// 1.2.30
const PaintBlue = Painter("blue");
const PaintRed = Painter("red");
const PaintYellow = Painter("yellow");


const obj1 = { type: "car" };
const obj2 = { type: "house" };
const obj3 = {};

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
// 1.2.31
const obj4 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
const obj5 = { type: "Truck", maxSpeed: 180, loadCapacity: 2400 };
const obj6 = { avgSpeed: 90, color: "purple", isCar: true };

PaintBlue(obj4);
PaintBlue(obj5);
PaintBlue(obj6);

PaintRed(obj4);
PaintRed(obj5);
PaintRed(obj6);

PaintYellow(obj4);
PaintYellow(obj5);
PaintYellow(obj6);