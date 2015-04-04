var thanksgivingCanada = require('../../src/dates/thanksgivingCanada');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('thanksgivingCanada', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 2nd Monday in October', function () {
        var dates = [
            new DateWrapper(1960, months.oct, 10),
            new DateWrapper(1999, months.oct, 11),
            new DateWrapper(2014, months.oct, 13),
            new DateWrapper(2015, months.oct, 12),
            new DateWrapper(2016, months.oct, 10),
            new DateWrapper(2017, months.oct, 9),
            new DateWrapper(2018, months.oct, 8),
            new DateWrapper(2019, months.oct, 14),
            new DateWrapper(2020, months.oct, 12),
            new DateWrapper(2030, months.oct, 14),
            new DateWrapper(2050, months.oct, 10)
        ];
        
        dates.forEach(function (date) {
            expect(thanksgivingCanada(date.year)).toEqual(date);
        });
    });
});