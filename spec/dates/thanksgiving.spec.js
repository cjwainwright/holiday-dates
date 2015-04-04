var thanksgiving = require('../../src/dates/thanksgiving');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('thanksgiving', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 4th Thursday in November', function () {
        var dates = [
            new DateWrapper(1960, months.nov, 24),
            new DateWrapper(1999, months.nov, 25),
            new DateWrapper(2014, months.nov, 27),
            new DateWrapper(2015, months.nov, 26),
            new DateWrapper(2016, months.nov, 24),
            new DateWrapper(2017, months.nov, 23),
            new DateWrapper(2018, months.nov, 22),
            new DateWrapper(2019, months.nov, 28),
            new DateWrapper(2020, months.nov, 26),
            new DateWrapper(2030, months.nov, 28),
            new DateWrapper(2050, months.nov, 24)
        ];
        
        dates.forEach(function (date) {
            expect(thanksgiving(date.year)).toEqual(date);
        });
    });
});