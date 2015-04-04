var DateWrapper = require('../../src/utils/DateWrapper');

exports.notAnInteger = [
    undefined,
    null,
    'Jan',
    'not a month',
    {},
    [],
    /\.*/,
    new DateWrapper(2015, 3, 4),
    new Date(2015, 2, 4),
    1.5
];

exports.notADateWrapper = [
    undefined,
    null,
    'Jan',
    'not a month',
    {},
    [],
    /\.*/,
    1.5,
    new Date(2015, 2, 4),
    3
];

exports.someYears = [0, 100, 1000, 1999, 2000, 2010, 2090, 3000, 9999];
exports.someYears.concat(Array.apply(null, Array(20)).map(function (e, i) {
    return 2011 + i;
}));
