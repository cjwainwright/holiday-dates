var nthDayOfWeekOnOrAfter = require('../utils/nthDayOfWeekOnOrAfter');
var months = require('../utils/months');
var days = require('../utils/days');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function fathersDay(year) {
    // third Sunday in June
    var base = new DateWrapper(year, months.jun, 1);
    
    return nthDayOfWeekOnOrAfter(3, days.sun, base);
};