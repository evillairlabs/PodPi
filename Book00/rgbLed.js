const five = require('johnny-five');

const PIN_LED_RED       = 3;
const PIN_LED_GREEN     = 4;
const PIN_LED_BLUE      = 5;

const MS_500    = 500;

var board = new five.Board();

var rainbow = ["#000000", "#FF0000", "#00FF00", "#FFFF00", "#0000FF" , "#FF00FF", "#00FFFF", "#FFFFFF"];

var red,green,blue,rgb;

board.on("ready", function () {
    rgb = new five.Led.RGB([PIN_LED_RED, PIN_LED_GREEN, PIN_LED_BLUE]);
    
    red   = new five.Led(PIN_LED_RED);
    green = new five.Led(PIN_LED_GREEN);
    blue  = new five.Led(PIN_LED_BLUE);

    test2();
});

function test0(){
    red.blink(MS_500 / 1);
    green.blink(MS_500 * 2);
    blue.blink(MS_500 * 3);    
}

function test1(){
    let index = 0;
    
    board.loop(1000, function() {
        console.log(rainbow[index]);
        rgb.color(rainbow[index++]);
        if (index === rainbow.length) {
          index = 0;
        }
    });
}

function test2(){
    let index = 0;
    
    board.loop(1000, function() {
        console.log(rainbow[index]);
        myRGB(rainbow[index++]);
        if (index === rainbow.length) {
          index = 0;
        }
    });
}

function myRGB(rgbHexCode){
    let hexRed   = rgbHexCode.substr(1,2);
    let hexGreen = rgbHexCode.substr(3,2);
    let hexBlue  = rgbHexCode.substr(5,2);
    
    if(hexRed === "FF")
        red.on();
    else
        red.off();
    
    if(hexGreen === "FF")
        green.on();
    else
        green.off();

    if(hexBlue === "FF")
        blue.on();
    else
        blue.off();
    
    console.log(hexRed+","+hexGreen+","+hexBlue);
}

function wait(seconds){
    var start = new Date().getTime();
    var now = start;
    
    while(now < (start+(seconds*1000)) )
        now = new Date().getTime();
}