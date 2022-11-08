// const myHull = 20;
// const myFirepower = 5;
// const myAccuracy = .7;
// const myIsAlive = true;
// const myAttack = "hit";

// const alianHullHigh = 6;
// const alianHullLow = 3;
// const alianFirepowerHigh = 4;
// const alianFirepowerLow = 2;
// const alianAccuracyHigh = .8;
// const alianAccuracyLow = .6;
// const alianIsAlive = true;
// const alianAttack = "hit";

class SpaceShip {
    constructor(hull, firepower, accuracy, isAlive, attack) {
    this.hull =  20;
    this.firepower = 5;
    this.accuracy = .7;
    this.isAlive = true;
    //this.attack = hit;
  }
 }
 const SpaceShipOne = new SpaceShip()
 console.log(SpaceShipOne)


class AlienShip {
    constructor(hull, firepower, accuracy, isAlive, attack) {
    //Math.random() * (max - min) + min --  //it says to use this for a range(max is less than (and not equal)max)
    // A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
    this.hull = (Math.random() * (6 - 3) + 3);
    this.firepower = (Math.random() * (4 - 2) + 2);
    this.accuracy = (Math.random() * (.8 - .6) + .6);
    this.isAlive = true;
    //this.attack = hit;
 }
}
// const alienShipOne = new AlienShip()

// console.log(alienShipOne)

let alienShips = [];
for( let i=1;i<=6;i++) {
 alienShips[i] = new AlienShip();
console.log("AlianShip Number", i," :", alienShips[i])
 }

// for( let i=0;i<6;i++) {
// console.log( alienShips[i])
//  }





