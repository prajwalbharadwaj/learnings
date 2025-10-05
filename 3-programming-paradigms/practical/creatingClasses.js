class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
}

var myTrain1 = new Train();
console.log("🚀 ~ myTrain1:", myTrain1);

myTrain1.toggleLights(); // undefined
myTrain1.lightsStatus(); // Lights on? true
myTrain1.getSelf(); // Train {color: 'red', lightsOn: true}
myTrain1.getPrototype(); // {constructor: f, toggleLights: f, lightsStatus: f, getSelf: f, getPrototype: f}
