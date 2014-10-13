// EXERCISE ONE - BLINK BLINK
// TODO: Write a program that blinks an LED attached to pin 13, once a second.
// 1: When the board is read, create a new "Led" instance
// 2: Pass a number to the "Led" constructor to tell it which pin to use
// 3: "Led" has a "strobe" method, it takes an interval in milliseconds

// Require the "johnny-five" module to interact with the Arduino using node
var five = require("johnny-five");

// Create a new instance of the Arduino board to work with
var board = new five.Board();

// Interact with the boards "ready" event
// Blink code goes within the callback in the ready event
board.on("ready", function() {

    // Setup an LED on Pin 13
    var led = new five.Led(13);

    // Make the LED strobe continuously when the board is ready
    led.strobe(200);
});
