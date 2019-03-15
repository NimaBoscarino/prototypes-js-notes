// Excerpt From: https://gist.github.com/donburks/756de4293c645c9164407a06dc1a9156
// By Don Burks

//Singleton - An object or function(function object) defined for a single use
var literal = {key: "value"};

let num = 2;

function Cat() {
  this.paws = 4;
  this.colour = "orange";
}

const garfield = new Cat();

console.log(garfield.paws); //4

function Dog(colour) {
  this.colour = colour;
  this.paws = 4;
  this.tail = "waggy";
}

const lassie = new Dog("brown and white");
const spuds = new Dog("white");

Object.create(prototype);

let gecko = {
  type: 'lizard',
  legs: 4,
  tail: true,
  savings: "20%"
};

let geico = Object.create(gecko);

//__proto__ is the prototype property, but you can write directly to geico.prototype

//////////////////////

class CatClass {
  constructor() {
    this.paws = 4;
    this.colour = "orange";
  }

  meow() {
    console.log('meow!')
  }
}

//Function constructor
function CatFC() {
  this.paws = 4;
  this.colour = "orange";
  // this.meow = () => {
  //   console.log('meow!')
  // }
}

CatFC.prototype.meow = function () {
  console.log('meow!')
}

const garfield = new CatClass();
const heathcliff = new CatFC();