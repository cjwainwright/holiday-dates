var isDateWrapper = require('./isDateWrapper');
var isInteger = require('./isInteger');
var DateWrapper = require('../../src/utils/DateWrapper');

module.exports = function fromMonthAndDay(month, day) {
    
    if (!isInteger(month)) {
        throw new Error('Invalid month');
    }

    if (!isInteger(day)) {
        throw new Error('Invalid day');
    }

    return function getDate(year) {
        if (!isInteger(year)) {
            throw new Error('Invalid year');
        }
        
        return new DateWrapper(year, month, day);
    };
}