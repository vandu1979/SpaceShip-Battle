
class SpaceShip {
    constructor(name, hull, firepower, accuracy, isAlive) {
    this.name = "Millenium Falcon"
    this.hull =  20;
    this.firepower = 5;
    this.accuracy = .7;
    this.isAlive = true;
   
  }
 }
 const EarthShip = new SpaceShip()
 console.log(EarthShip)


class AlienShip {
    constructor(name, hull, firepower, accuracy, isAlive) {
    //Math.random() * (max - min) + min --  //it says to use this for a range(max is less than (and not equal)max)
    // A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
    this.name = name;
    this.hull = Math.round((Math.random() * (6 - 3) + 3));
    this.firepower = Math.round((Math.random() * (4 - 2) + 2));
    this.accuracy = (Math.random() * (.8 - .6) + .6);
    this.isAlive = true;
 }
}
// const alienShipOne = new AlienShip()

// console.log(alienShipOne)

let alienArray = [];
for( let i=0;i<6;i++) {
  let alien = new AlienShip("Alien"+i,"","","","","");
  alienArray[i]=alien
  console.log("AlienShip :",alienArray[i])
}

function attack(AttackerShip,TargetShip) 
{
     //accuracy is the chance between 0 and 1 that the ship will hit its target 
  if (Math.random()<AttackerShip.accuracy)     
  {
    let TargetHull = TargetShip.hull - AttackerShip.firepower
    if(TargetHull <= 0) 
    {
      console.log(TargetShip.name, 'is destroyed');
      TargetShip.hull=0
      TargetShip.isAlive=false
    } 
    else 
    { 
      TargetShip.hull = TargetShip.hull - AttackerShip.firepower
      console.log(AttackerShip.name,' successfully hit', TargetShip.name, ", still alive with hull", TargetShip.hull );
    } 
  }
  else {
    console.log(AttackerShip.name,'could not hit', TargetShip.name );
  }
}
 
//attack(SpaceShipOne,alienArray[0])

//Logic for the battle
// 1. Get the Alienship, check if it is alive if yes go to step 2 elese get the next ship and repeat step1
// 2. the Earthship will attack it, if it is destroyed, 
// get the next alienship
// else now its turn for the alienship to hit earth ship, if the earthship survies go to step1

function game()
{
  // Get the Alien spaceship
  for (let i=0;i<6;i++)
  {
    while (alienArray[i].isAlive && EarthShip.isAlive)
    {
      //Earthship to attack thr alianship
      attack(EarthShip, alienArray[i])
      if (alienArray[i].isAlive)
      {
        //if Alianship is alive, alianship attacks
        attack(alienArray[i], EarthShip)
      }
    }
    if (!EarthShip.isAlive)
    {
      console.log("The", EarthShip.name, "is dead......") 
      console.log("End of Game")
      break;
    }

  }

}

//call the function
const button = document.querySelector("#button");
// add an event listener to the button
button.addEventListener("click", game)






