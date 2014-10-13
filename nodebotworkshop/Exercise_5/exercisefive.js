// EXERCISE FIVE: STREET LAMP
// TODO: Build a street lamp that turns on as it gets dark
// Use photoresistor and an LED
// Photoresistor on A0, LED on Pin 9
// Make the LED turn on when the photo resistor value is greater than 600

// Load the johnny-five moduke
var five = require("johnny-five");

// Instantiate a new board
var board = new five.Board();

board.on("ready", function() {
    // Connect light to Pin 9
    var led = new five.Led(9);
    // Connect the photoresistor to A0
    var sensor = new five.Sensor("A0");

    sensor.on("data", function() {
        if (this.value < 600 ) {
            led.on();
            // console.log("Light on");
        } else {
            led.off();
            // console.log("Light off");
        }
    })

});
