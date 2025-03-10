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
// 1.2.12 Створення класу Square
class Square {
  constructor(a) {
    // 1.2.13
    this.a = a;
  }
  // 1.2.14
  static help() {
    console.log(
      "Square - це геометрична фігура-чотирикутник, у якої всі сторони рівні та всі кути прямі (90 градусів)."
    );
  }
  // 1.2.15
  length() {
    const perimeter = this.a * 4;
    console.log("Сума довжин сторін квадрата: " + perimeter);
  }

  square() {
    const area = this.a * this.a;
    console.log("Площа квадрата: " + area);
  }

  info() {
    console.log("Характеристика квадрата:");
    console.log("Довжина кожної сторони: " + this.a);
    console.log("Величина кожного кута: 90 градусів");
    this.length();
    this.square();
  }
}
// 1.2.16 
class Rectangle extends Square {
  constructor(a, b) {
    // 1.2.17
    super(a);
    this.b = b;
  }

  // 1.2.17
  static help() {
    console.log(
      "Rectangle - це геометрична фігура-чотирикутник, у якої протилежні сторони рівні та всі кути прямі (90 градусів)."
    );
  }

  // 1.2.17
  length() {
    const perimeter = (this.a + this.b) * 2;
    console.log("Сума довжин сторін прямокутника: " + perimeter);
  }

  // 1.2.17
  square() {
    const area = this.a * this.b;
    console.log("Площа прямокутника: " + area);
  }

  // 1.2.17
  info() {
    console.log("Характеристика прямокутника:");
    console.log("Довжина: " + this.a);
    console.log("Ширина: " + this.b);
    console.log("Величина кожного кута: 90 градусів");
    this.length();
    this.square();
  }
}
// 1.2.18
class Rhombus extends Square {
  constructor(a, alpha, beta) {
    // 1.2.19
    super(a);
    this.alpha = alpha;
    this.beta = beta;
  }

  // 1.2.19
  static help() {
    console.log(
      "Rhombus - це геометрична фігура-чотирикутник, у якої всі сторони рівні, а протилежні кути рівні."
    );
  }

  // 1.2.19
  length() {
    const perimeter = this.a * 4;
    console.log("Сума довжин сторін ромба: " + perimeter);
  }

  // 1.2.19
  square() {
    const area = this.a * this.a * Math.sin((this.alpha * Math.PI) / 180);
    console.log("Площа ромба: " + area);
  }

  // 1.2.19
  info() {
    console.log("Характеристика ромба:");
    console.log("Довжина кожної сторони: " + this.a);
    console.log("Тупий кут: " + this.alpha + " градусів");
    console.log("Гострий кут: " + this.beta + " градусів");
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