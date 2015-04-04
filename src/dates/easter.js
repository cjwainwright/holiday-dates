var DateWrapper = require('../../src/utils/DateWrapper');
var isInteger = require('../utils/isInteger');
var floor = Math.floor;

module.exports = function easter(year) {

    if (!isInteger(year)) {
        throw new Error('Invalid year');
    }

    // using the "Anonymous Gregorian Algorithm", see http://en.wikipedia.org/wiki/Computus#Algorithms
    var a = year % 19;
    var b = floor(year / 100);
    var c = year % 100;
    var d = floor(b / 4);
    var e = b % 4;
    var f = floor((b + 8) / 25);
    var g = floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = floor(c / 4);
    var k = c % 4;
    var L = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = floor((a + 11 * h + 22 * L) / 451);
    var n = h + L - 7 * m + 114;
    var month = floor(n / 31);
    var day = (n % 31) + 1;
    
    return new DateWrapper(year, month, day);
};
