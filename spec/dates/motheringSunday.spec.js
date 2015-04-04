var motheringSunday = require('../../src/dates/motheringSunday');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');
var notAnInteger = require('../helpers/testData').notAnInteger;

describe('motheringSunday', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should always be 3 weeks before Easter', function () {
        var dates = [
            new DateWrapper(1761, months.mar, 1),
            new DateWrapper(1848, months.apr, 2),
            new DateWrapper(1916, months.apr, 2),
            new DateWrapper(2015, months.mar, 15),
            new DateWrapper(2001, months.mar, 25),
            new DateWrapper(2010, months.mar, 14),
            new DateWrapper(2011, months.apr, 3),
            new DateWrapper(2012, months.mar, 18),
            new DateWrapper(2013, months.mar, 10),
            new DateWrapper(2014, months.mar, 30),
            new DateWrapper(2015, months.mar, 15),
            new DateWrapper(2016, months.mar, 6),
            new DateWrapper(2017, months.mar, 26),
            new DateWrapper(2018, months.mar, 11),
            new DateWrapper(2019, months.mar, 31),
            new DateWrapper(2020, months.mar, 22),
            new DateWrapper(2030, months.mar, 31),
            new DateWrapper(2038, months.apr, 4),
            new DateWrapper(3000, months.mar, 23),
            new DateWrapper(9999, months.mar, 7)

        ];
        
        dates.forEach(function (date) {
            expect(motheringSunday(date.year)).toEqual(date);
        });
    });
        
    it('should throw an error if year is not an integer', function () {
        notAnInteger.forEach(function (value) {
            expect(function () { motheringSunday(value); }).toThrow(new Error('Invalid year'));
        });
    });
});