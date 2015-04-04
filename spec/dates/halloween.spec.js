var halloween = require('../../src/dates/halloween');
var someYears = require('../helpers/testData').someYears;
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('halloween', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 31st of October', function () {
        someYears.forEach(function (year) {
            expect(halloween(year)).toEqual(new DateWrapper(year, months.oct, 31));
        });
    });
});