var valentines = require('../../src/dates/valentines');
var someYears = require('../helpers/testData').someYears;
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('valentines', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 14th of February', function () {
        someYears.forEach(function (year) {
            expect(valentines(year)).toEqual(new DateWrapper(year, months.feb, 14));
        });
    });
});