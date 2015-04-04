var mothersDay = require('../../src/dates/mothersDay');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('mothersDay', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 2nd Sunday in May', function () {
        var dates = [
            new DateWrapper(1960, months.may, 8),
            new DateWrapper(1999, months.may, 9),
            new DateWrapper(2014, months.may, 11),
            new DateWrapper(2015, months.may, 10),
            new DateWrapper(2016, months.may, 8),
            new DateWrapper(2017, months.may, 14),
            new DateWrapper(2018, months.may, 13),
            new DateWrapper(2019, months.may, 12),
            new DateWrapper(2020, months.may, 10),
            new DateWrapper(2030, months.may, 12),
            new DateWrapper(2050, months.may, 8)
        ];
        
        dates.forEach(function (date) {
            expect(mothersDay(date.year)).toEqual(date);
        });
    });
});