var nthDayOfWeekOnOrAfter = require('../../src/utils/nthDayOfWeekOnOrAfter');
var testData = require('../helpers/testData');
var months = require('../../src/utils/months');
var days = require('../../src/utils/days');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('nthDayOfWeekOnOrAfter', function () {
    
    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));

    it('should throw an error if n is not an integer', function () {
        testData.notAnInteger.forEach(function (value) {
            expect(function () { nthDayOfWeekOnOrAfter(value, days.sun, new DateWrapper(2015, months.apr, 4)); }).toThrow(new Error('Invalid n'));
        });
    });
    
    it('should throw an error if dayOfWeek is not an integer', function () {
        testData.notAnInteger.forEach(function (value) {
            expect(function () { nthDayOfWeekOnOrAfter(1, value, new DateWrapper(2015, months.apr, 4)); }).toThrow(new Error('Invalid dayOfWeek'));
        });
    });
    
    it('should throw an error if date is not a Date', function () {
        testData.notADateWrapper.forEach(function (value) {
            expect(function () { nthDayOfWeekOnOrAfter(1, 0, value); }).toThrow(new Error('Invalid date'));
        });
    });
    
    it('should give the correct date', function () {
        var testCases = [
            [1, 0, new DateWrapper(2015, months.apr, 4), new DateWrapper(2015, months.apr, 5)],
            [1, 0, new DateWrapper(2015, months.apr, 5), new DateWrapper(2015, months.apr, 5)],
            [2, 0, new DateWrapper(2015, months.apr, 4), new DateWrapper(2015, months.apr, 12)],
            [2, 0, new DateWrapper(2015, months.apr, 5), new DateWrapper(2015, months.apr, 12)],
            [2, 3, new DateWrapper(2015, months.apr, 4), new DateWrapper(2015, months.apr, 15)],
            [2, 3, new DateWrapper(2015, months.apr, 5), new DateWrapper(2015, months.apr, 15)],
            [1, 3, new DateWrapper(2012, months.feb, 28), new DateWrapper(2012, months.feb, 29)],
            [1, 3, new DateWrapper(2012, months.feb, 29), new DateWrapper(2012, months.feb, 29)],
            [1, 6, new DateWrapper(2014, months.dec, 31), new DateWrapper(2015, months.jan, 3)]
        ];
        
        testCases.forEach(function (testCase) {
            expect(nthDayOfWeekOnOrAfter(testCase[0], testCase[1], testCase[2])).toEqual(testCase[3]);
        });
    });
    
    it('should also work for zero and negative values of n', function () {
        var testCases = [
            [0, 0, new DateWrapper(2015, months.apr, 4), new DateWrapper(2015, months.mar, 29)],
            [0, 0, new DateWrapper(2015, months.apr, 5), new DateWrapper(2015, months.mar, 29)],
            [-2, 0, new DateWrapper(2015, months.apr, 4), new DateWrapper(2015, months.mar, 15)],
            [-2, 0, new DateWrapper(2015, months.apr, 5), new DateWrapper(2015, months.mar, 15)]
        ];
        
        testCases.forEach(function (testCase) {
            expect(nthDayOfWeekOnOrAfter(testCase[0], testCase[1], testCase[2])).toEqual(testCase[3]);
        });
    });
});