const five = require('johnny-five');

const PIN_LED1  = 3;
const PIN_LED2  = 4;
const PIN_LED3  = 5;

const MS_500    = 500;
const MS_1000   = 1000;

let board = new five.Board();
board.on('ready', function() {
    let ledPort3 = new five.Led(PIN_LED1);
    let ledPort4 = new five.Led(PIN_LED2);
    let ledPort5 = new five.Led(PIN_LED3);
    
    ledPort3.blink(MS_500/2);
    ledPort4.blink(MS_500);
    ledPort5.blink(MS_1000 + MS_500);
});