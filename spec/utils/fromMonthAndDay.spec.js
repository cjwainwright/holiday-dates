var fromMonthAndDay = require('../../src/utils/fromMonthAndDay');
var notAnInteger = require('../helpers/testData').notAnInteger;
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('fromMonthAndDay', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));
 
    it('should throw an error if month is not a integer', function () {
        notAnInteger.forEach(function (value) {
            expect(function () { fromMonthAndDay(value, 1); }).toThrow(new Error('Invalid month'));
        });
    });
    
    
    it('should throw an error if day is not a integer', function () {
        notAnInteger.forEach(function (value) {
            expect(function () { fromMonthAndDay(0, value); }).toThrow(new Error('Invalid day'));
        });
    });

    it('should return a function for a valid month and day', function () {
        var testCases = [
            [months.jan, 1],
            [months.jun, 1],
            [months.jan, 15]
        ]
        
        testCases.forEach(function (testCase) {
            var func = fromMonthAndDay(testCase[0], testCase[1]);
            expect(typeof func).toBe('function');
        });
    });
    
    it('should return a function that throws an error for a non integer year', function () {
        notAnInteger.forEach(function (value) {
            var func = fromMonthAndDay(0, 1);
            expect(function () { func (value) }).toThrow(new Error('Invalid year'));
        });
    });

    it('should return the correct function for a valid month and day', function () {
        var testCases = [
            [2000, months.jan, 1],
            [2000, months.dec, 31],
            [1899, months.dec, 31],
            [1900, months.jan, 1],
            [3000, months.dec, 31]
        ];
        
        testCases.forEach(function (testCase) {
            var year = testCase[0],
                month = testCase[1],
                day = testCase[2];
                
            expect(fromMonthAndDay(month, day)(year)).toEqual(new DateWrapper(year, month, day));
        });
    });
    
    it('should handle out of range integer values as the js Date object does', function () {
        var testCases = [
            [2000, 0, 31, new DateWrapper(1999, months.dec, 31)],
            [2000, 13, 31, new DateWrapper(2001, months.jan, 31)],
            [2000, months.feb, 30, new DateWrapper(2000, months.mar, 1)],
            [2000, months.feb, 57, new DateWrapper(2000, months.mar, 28)]
        ];
        
        testCases.forEach(function (testCase) {
            var year = testCase[0],
                month = testCase[1],
                day = testCase[2];
                
            expect(fromMonthAndDay(month, day)(year)).toEqual(testCase[3]);
        });
    });
});