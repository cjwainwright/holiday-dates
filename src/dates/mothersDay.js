var nthDayOfWeekOnOrAfter = require('../utils/nthDayOfWeekOnOrAfter');
var months = require('../utils/months');
var days = require('../utils/days');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function mothersDay(year) {
    // second sunday in May
    var base = new DateWrapper(year, months.may, 1);
    
    return nthDayOfWeekOnOrAfter(2, days.sun, base);
};