// EXERCISE FOUR: LIGHT SWITHC
// TODO: Write a program that acts like a light switch to turn an LED on and off
// Attach a button to pn 5 and an LED to pin 9
// Use the "Button" cless to detect "press" events and toggle the LED on/off

// Load the johnny-five module
var five = require("johnny-five");

// Instantiate a new board to work with
var board = new five.Board();

board.on("ready", function() {
    var button = new five.Button(5);
    var led = new five.Led(9);

    button.on("press", function() {
        led.toggle();
        console.log("Button Pressed!");
    });

    button.on("release", function() {
        console.log("Button released!");
    })
});
