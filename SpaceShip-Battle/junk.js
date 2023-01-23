

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



// for( let i=0;i<=6;i++) {
// console.log( alienShips[i])
//  }
// function attack(){
//   let i = Math.floor(Math.random() * (5.9 - 0));
//   //while (alienArray[i].isAlive = true) {
//     if (SpaceShipOne.accuracy < 0.8 && SpaceShipOne.accuracy > 0.6 && SpaceShipOne.firepower >= alienArray[i].hull) {
//       console.log(`you destroyed an alien ship!`)
//       alienArray[i].isAlive = false
//     } else if (SpaceShipOne.accuracy < 0.8 && SpaceShipOne.accuracy > 0.6 && SpaceShipOne.firepower < alienArray[i].hull) {
//       console.log(`you hit an alien ship!`)
//       alienArray[i].hull - SpaceShipOne.firepower
//     } else if (SpaceShipOne.accuracy < 0.6 || SpaceShipOne.accuracy > 0.8) {
//     console.log('you missed the ship!')
//     }
//     if (alienArray[i].accuracy = SpaceShipOne.accuracy) {

//     }
//   }
// //};