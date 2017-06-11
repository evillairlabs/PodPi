const five = require('johnny-five');

const PIN_LED1  = 3;

const BLINK_INTERVAL_LED1   = 500;

let board = new five.Board();
board.on("ready", function () {
    let led = new five.Led(PIN_LED1);
    led.blink(BLINK_INTERVAL_LED1);
});

