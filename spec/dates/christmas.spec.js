var christmas = require('../../src/dates/christmas');
var someYears = require('../helpers/testData').someYears;
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('christmas', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 25th of December', function () {
        someYears.forEach(function (year) {
            expect(christmas(year)).toEqual(new DateWrapper(year, months.dec, 25));
        });
    });
});