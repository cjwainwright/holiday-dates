var easter = require('./easter');
var addDays = require('../utils/addDays');

module.exports = function motheringSunday(year) {
    var easterDate = easter(year);
    
    return addDays(easterDate, -3 * 7);
};