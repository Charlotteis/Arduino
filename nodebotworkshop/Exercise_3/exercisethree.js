// EXERCISE THREE: SPIN MOTOR SPIN
// TODO: Attach a motor to pin 9 and start it spinning
// Spin the motor at 200mph
// Use board.wait to stop the motor spinning after 2 seconds
// Start is spinning again after another second
// Ensure the loops repeats infinitely

// Include the johnny-five module to interact with the Arduino
var five = require("johnny-five");

// Create a new Arduino board to work with
var board = new five.Board();

// When the board is ready to be worked with
board.on("ready", function() {

    // Work with the motor on the board
    var motor = new five.Motor(9);

    // Start the motor at 200mph
    motor.on("start", function() {
        board.wait(2000, function() {
            motor.stop()
        });
    });

    motor.on("stop", function() {
        board.wait(1000, function() {
            motor.start(200);
        });
    });

    motor.start(200);
});
