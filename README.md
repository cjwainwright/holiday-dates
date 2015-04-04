# holiday-dates
Retrieve the dates of special holidays or occasions

Usage
-----

```js
var hols = require('holiday-dates');

var easter = hols.easter(2015);

// methods return an object with year, month and day integers
console.log(easter.year); // year is a full 4 digit year
console.log(easter.month); // month is in range 1-12
console.log(easter.day); // day 1 is the first day in the month
```

Note, the return type is not a native JavaScript Date object, as we are not interested in the time and also do not want timezone complications.
This also allows us to use 1-based values for months.
Note, we can convert to a Date object using either one of the following two methods.

```js
// get native js date object as if from midnight UTC
console.log(easter.toUTCDate());

// get native js date object as if from midnight in the current time zone
console.log(easter.toLocalDate());
```

Currently supported occasions
-----------------------------

* `christmas`
* `easter`
* `fathersDay`
* `halloween`
* `motheringSunday`
* `mothersDay`
* `thanksgiving`
* `thanksgivingCanada`
* `valentines`

Please feel free to contribute any other special dates for which an algorithm can be written.