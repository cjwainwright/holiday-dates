var nthDayOfWeekOnOrAfter = require('../utils/nthDayOfWeekOnOrAfter');
var months = require('../utils/months');
var days = require('../utils/days');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function thanksgiving(year) {
    // fourth Thursday in November
    var base = new DateWrapper(year, months.nov, 1);
    
    return nthDayOfWeekOnOrAfter(4, days.thu, base);
};