

const alianHullHigh = 6;
const alianHullLow = 3;
const alianFirepowerHigh = 4;
const alianFirepowerLow = 2;
const alianAccuracyHigh = .8;
const alianAccuracyLow = .6;
const alianIsAlive = true;
const alianAttack = "hit";
class alienShip {
    constructor(hull, firepower, accuracy, isAlive, attack) {
    this.hull = (Math.random() * (alianHullHigh - alianAccuracyLow)) + alianAccuracyLow;;
    this.firepower =  (Math.random() * (alianFirepowerHigh - alianFirepowerLow) + alianFirepowerLow);
    this.accuracy = (Math.random() * (alianAccuracyHigh - alianAccuracyLow) + alianAccuracyLow);
    this.isAlive = myIsAlive ;
    this.attack = myAttack;
 }
}

const alienShip = () => {
    for(let i = 0; i < 6; i++) {
        console.log(alienShip)
       
    } 
}
