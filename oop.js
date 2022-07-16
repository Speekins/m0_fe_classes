// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class unicorn {
  constructor(name) {
    this.name = name;
    this.horn = true;
    this.color = silver;
    this.home = "Rainbow Land";
  }

  say(string) {
    console.log(`*~*${string}*~*`)
  }
}


// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false

class vampire {
  constructor(name, pet = "bat") {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
  }

  drink(){
    this.thirsty = false;
    console.log(`I no longer vant to suck your blooood!`);
  }
}


//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson
class dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.isHungry = true;
  }

  eat(numberOfTimes) {
    if (numberOfTimes > 4) {
      this.isHungry = false;
    }
  }
}


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.

class hobbit {
  constructor(name, disposition) {
    this.name = name;
    this.disposition = disposition;
    this.age = 0;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
    if (this.name === "frodo"){
      this.hasRing = "true"
    }
  }

  celebrateBirthday(times) {
    this.age += times;
    if (this.age > 32) {
      this.isAdult = true;
    }
    if (this.age > 100) {
      this.isOld = true;
    }
  }
}

let hobbit1 = new hobbit("frodo", "hesitant");
let hobbit2 = new hobbit("samwise", "brave");

console.log(hobbit1);
console.log(hobbit2);

hobbit1.celebrateBirthday(34);
hobbit1.celebrateBirthday(80);

console.log(hobbit1);
console.log(hobbit2);