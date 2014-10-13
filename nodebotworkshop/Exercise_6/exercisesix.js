// EXERCISE SIX: PING BELL
// TODO: Create a UDP server that plays a sound when a message is received

// Attach a piezo to pin 8
// Use the "dgram" mode to create a "udp4" socket
// Bind your server to port "1337" and listen for messages
// When a message is received, have the piezo play a tune

// Require the johnny-five module
var five = require("johnny-five");

// Require "dgram" to work with datagram sockets for udp
var dgram = require("dgram");

// Instantiate a new board
var board = new five.Board();

board.on("ready", function() {
    // Creating a udp4 socket
    // TODO: What is dgram and a udp socket?
    var s = dgram.createSocket("udp4");

    // Attach the piezo to pin 8
    var piezo = new five.Piezo(8);

    // When server receives a message, play tune
    s.on("message", function() {
        piezo.tone(five.Piezo.Notes.c4, 1000);
        console.log("played");
    });

    // Bind to port "1337"
    s.bind(1337);
});
