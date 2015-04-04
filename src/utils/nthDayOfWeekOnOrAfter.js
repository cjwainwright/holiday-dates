var isDateWrapper = require('./isDateWrapper');
var isInteger = require('./isInteger');
var addDays = require('./addDays');

module.exports = function nthDayOfWeekOnOrAfter (n, dayOfWeek, date) {

    if (!isInteger(n)) {
        throw new Error('Invalid n');
    }

    if (!isInteger(dayOfWeek)) {
        throw new Error('Invalid dayOfWeek');
    }

    if (!isDateWrapper(date)) {
        throw new Error('Invalid date');
    }
    
    var startDay = date.weekDay;
    var deltaFirst = (dayOfWeek + 7 - startDay) % 7;
    var delta = deltaFirst + 7 * (n - 1);
    
    return addDays(date, delta);
};