var easter = require('../../src/dates/easter');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');
var notAnInteger = require('../helpers/testData').notAnInteger;

describe('easter', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be on the 1st Sunday after the 1st full moon after the vernal equinox', function () {
        var dates = [
            new DateWrapper(1761, months.mar, 22),
            new DateWrapper(1848, months.apr, 23),
            new DateWrapper(1916, months.apr, 23),
            new DateWrapper(2015, months.apr, 5),
            new DateWrapper(2001, months.apr, 15),
            new DateWrapper(2010, months.apr, 4),
            new DateWrapper(2011, months.apr, 24),
            new DateWrapper(2012, months.apr, 8),
            new DateWrapper(2013, months.mar, 31),
            new DateWrapper(2014, months.apr, 20),
            new DateWrapper(2015, months.apr, 5),
            new DateWrapper(2016, months.mar, 27),
            new DateWrapper(2017, months.apr, 16),
            new DateWrapper(2018, months.apr, 1),
            new DateWrapper(2019, months.apr, 21),
            new DateWrapper(2020, months.apr, 12),
            new DateWrapper(2030, months.apr, 21),
            new DateWrapper(2038, months.apr, 25),
            new DateWrapper(3000, months.apr, 13),
            new DateWrapper(9999, months.mar, 28)
        ];
        
        dates.forEach(function (date) {
            expect(easter(date.year)).toEqual(date);
        });
    });
    
    it('should throw an error if year is not an integer', function () {
        notAnInteger.forEach(function (value) {
            expect(function () { easter(value); }).toThrow(new Error('Invalid year'));
        });
    });
});