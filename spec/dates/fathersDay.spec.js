var fathersDay = require('../../src/dates/fathersDay');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('fathersDay', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 3rd Sunday in June', function () {
        var dates = [
            new DateWrapper(1960, months.jun, 19),
            new DateWrapper(1999, months.jun, 20),
            new DateWrapper(2014, months.jun, 15),
            new DateWrapper(2015, months.jun, 21),
            new DateWrapper(2016, months.jun, 19),
            new DateWrapper(2017, months.jun, 18),
            new DateWrapper(2018, months.jun, 17),
            new DateWrapper(2019, months.jun, 16),
            new DateWrapper(2020, months.jun, 21),
            new DateWrapper(2030, months.jun, 16),
            new DateWrapper(2050, months.jun, 19)
        ];
        
        dates.forEach(function (date) {
            expect(fathersDay(date.year)).toEqual(date);
        });
    });
});