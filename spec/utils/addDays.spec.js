var addDays = require('../../src/utils/addDays');
var testData = require('../helpers/testData');
var months = require('../../src/utils/months');
var DateWrapper = require('../../src/utils/DateWrapper');

describe('addDays', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));
    
    it('should throw an error if date is not a Date', function () {
        testData.notADateWrapper.forEach(function (value) {
            expect(function () { addDays(value, 1); }).toThrow(new Error('Invalid date'));
        });
    });
    
    it('should throw an error if days is not an integer', function () {
        testData.notAnInteger.forEach(function (value) {
            expect(function () { addDays(new DateWrapper(2015, months.apr, 4), value); }).toThrow(new Error('Invalid days'));
        });
    });
   
    it('should leave the date unchanged if days is zero', function () {
        var testCases = [
            new DateWrapper(2015, months.apr, 4),
            new DateWrapper(2000, months.jan, 1)
        ];
        
        testCases.forEach(function (testCase) {
            expect(addDays(testCase, 0)).toEqual(testCase);
        });
    });
    
    it('should change the date correctly if days is non-zero', function () {
        var testCases = [
            [new DateWrapper(2015, months.apr, 4), 1, new DateWrapper(2015, months.apr, 5)],
            [new DateWrapper(2015, months.apr, 4), -1, new DateWrapper(2015, months.apr, 3)],
            [new DateWrapper(2012, months.feb, 28), 1, new DateWrapper(2012, months.feb, 29)], // leap year
            [new DateWrapper(2012, months.mar, 1), -1, new DateWrapper(2012, months.feb, 29)], // leap year
            [new DateWrapper(2015, months.mar, 28), 2, new DateWrapper(2015, months.mar, 30)], // gmt-> bst 
            [new DateWrapper(2015, months.mar, 30), -2, new DateWrapper(2015, months.mar, 28)] // bst-> gmt 
        ];
        
        testCases.forEach(function (testCase) {
            expect(addDays(testCase[0], testCase[1])).toEqual(testCase[2]);
        });
    });
});