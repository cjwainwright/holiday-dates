var isDateWrapper = require('./isDateWrapper');
var isInteger = require('./isInteger');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function addDays(date, days) {

    if (!isDateWrapper(date)) {
        throw new Error('Invalid date');
    }
 
    if (!isInteger(days)) {
        throw new Error('Invalid days');
    }
 
    return new DateWrapper(date.year, date.month, date.day + days);
};