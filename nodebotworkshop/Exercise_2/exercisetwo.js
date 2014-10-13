// EXERCISE TWO: SERVO WAVE
// TODO: Make a servo wave at you for three seconds, stop and return to center
// Create a new "Servo" instance attached to pin 9
// Use "servo.sweep" to rotate between 0 and 180 degrees
// Use "board.wait" to schedule a "reset" callback after 3 seconds
// The "Reset" callback should "stop" and "center" the servo

// Load the johnny-five module to work with the Arduino
var five = require("johnny-five");

// Initiate a new Arduino Board
var board = new five.Board();

board.on("ready", function() {

    var servo = new five.Servo(9);

    // Make the servo rotate from 0-180 degrees
    servo.sweep();

    this.wait(3000, function() {
        servo.stop();
        servo.center();
    });
});
