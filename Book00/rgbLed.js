const five = require('johnny-five');

const PIN_LED_RED       = 3;
const PIN_LED_GREEN     = 4;
const PIN_LED_BLUE      = 5;

const MS_100    = 100;

let board = new five.Board();
board.on("ready", function () {
    let red = new five.Led(PIN_LED_RED);
    let green = new five.Led(PIN_LED_GREEN);
    let blue = new five.Led(PIN_LED_BLUE);
    
    red.blink(MS_100);
    green.blink(MS_100 * 3);
    blue.blink(MS_100 * 2);
});
