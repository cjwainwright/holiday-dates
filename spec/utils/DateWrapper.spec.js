var DateWrapper = require('../../src/utils/DateWrapper');
var months = require('../../src/utils/months');
var days = require('../../src/utils/days');
var testData = require('../helpers/testData');

describe('DateWrapper', function () {

    beforeEach(require('../helpers/addCustomEqualityDateWrapper'));
    
    describe('constructor', function () {
        it('should throw an error if year is not an integer', function () {
            testData.notAnInteger.forEach(function (value) {
                expect(function () { new DateWrapper(value, months.jan, 1); }).toThrow(new Error('Invalid year'));
            });
        });

        it('should throw an error if month is not an integer', function () {
            testData.notAnInteger.forEach(function (value) {
                expect(function () { new DateWrapper(2000, value, 1); }).toThrow(new Error('Invalid month'));
            });
        });

        it('should throw an error if day is not an integer', function () {
            testData.notAnInteger.forEach(function (value) {
                expect(function () { new DateWrapper(2000, months.jan, value); }).toThrow(new Error('Invalid day'));
            });
        });
        
        it('should return the correct year, month and day for valid dates', function () {
            var testCases = [
                [2000, months.jan, 1],
                [1456, months.apr, 30],
                [3000, months.dec, 25],
                [1970, months.jan, 1],
                [2015, months.apr, 5]
            ];
            
            testCases.forEach(function (testCase) {
                var date = new DateWrapper(testCase[0], testCase[1], testCase[2]);
                expect(date.year).toEqual(testCase[0]);
                expect(date.month).toEqual(testCase[1]);
                expect(date.day).toEqual(testCase[2]);
            });
        });
        
        it('should normalize the date if month or day are out of range', function () {
            var testCases = [
                [2000, 0, 1, 1999, 12, 1],
                [2000, 13, 1, 2001, 1, 1], 
                [2000, months.jul, 32, 2000, months.aug, 1],
                [2000, months.jul, 0, 2000, months.jun, 30],
            ];
            
            testCases.forEach(function (testCase) {
                var date = new DateWrapper(testCase[0], testCase[1], testCase[2]);
                expect(date.year).toEqual(testCase[3]);
                expect(date.month).toEqual(testCase[4]);
                expect(date.day).toEqual(testCase[5]);
            });
        });
    });
    
    describe('editing', function () {
        
        var date;
        
        beforeEach(function () {
            date = new DateWrapper(2000, months.jan, 1);
        });

        it('should update the year correctly', function () {
            var cases = [
                1456,
                3000,
                1970,
                2015
            ];
            
            cases.forEach(function (year) {
                date.year = year;
                expect(date.year).toEqual(year);
            });
        });
        
        it('should update the month correctly', function () {
            var cases = [
                months.apr,
                months.jun,
                months.jul,
                months.dec
            ];
            
            cases.forEach(function (month) {
                date.month = month;
                expect(date.month).toEqual(month);
            });
        });
        
        it('should update the day correctly', function () {
            var cases = [
                31,
                2,
                5,
                16
            ];
            
            cases.forEach(function (day) {
                date.day = day;
                expect(date.day).toEqual(day);
            });
        });

        it('should normalize the date if month is out of range', function () {
            var year = date.year;
            date.month = 0;
            expect(date.month).toEqual(months.dec);
            expect(date.year).toEqual(year - 1);
        });
        
        it('should normalize the date if day is out of range', function () {
            date.day = 32;
            expect(date.month).toEqual(months.feb);
            expect(date.day).toEqual(1);
        });
    });
    
    it('should return the correct week day', function () {
        expect(new DateWrapper(2015, months.apr, 4).weekDay).toEqual(days.sat);
        expect(new DateWrapper(2000, months.feb, 29).weekDay).toEqual(days.tue);
    });
    
    describe('toDate', function () {
        
        var date;
        
        beforeEach(function () {
            date = new DateWrapper(2000, months.jul, 2);
        });
        
        it('should return the correct local date', function () {
            var localDate = date.toLocalDate();
            expect(localDate.getFullYear()).toEqual(date.year);
            expect(localDate.getMonth()).toEqual(date.month - 1);
            expect(localDate.getDate()).toEqual(date.day);
        });

        it('should return the correct UTC date', function () {
            var utcDate = date.toUTCDate();
            expect(utcDate.getFullYear()).toEqual(date.year);
            expect(utcDate.getMonth()).toEqual(date.month - 1);
            expect(utcDate.getDate()).toEqual(date.day);
        });

    });
});