var isDateWrapper = require('../../src/utils/isDateWrapper');
var DateWrapper = require('../../src/utils/DateWrapper');

var customEqualityDateWrapper = function (d1, d2) {
    if (isDateWrapper(d1) && isDateWrapper(d2)) {
        return d1.year === d2.year &&
               d1.month === d2.month &&
               d1.day === d2.day;
    }
}

module.exports = function addCustomEqualityDateWrapper() {
    jasmine.addCustomEqualityTester(customEqualityDateWrapper);
};
