const five = require('johnny-five');

let board = new five.Board();
board.on('ready', function() {
    let ledPort3 = new five.Led(3);
    let ledPort4 = new five.Led(4);
    let ledPort5 = new five.Led(5);
    
    ledPort3.blink(500);
    ledPort4.blink(250);
    ledPort5.blink(500);
});