var nthDayOfWeekOnOrAfter = require('../utils/nthDayOfWeekOnOrAfter');
var months = require('../utils/months');
var days = require('../utils/days');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function thanksgiving(year) {
    // second Monday in October
    var base = new DateWrapper(year, months.oct, 1);
    
    return nthDayOfWeekOnOrAfter(2, days.mon, base);
};