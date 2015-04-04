var isInteger = require('./isInteger');

module.exports = DateWrapper;

function DateWrapper(year, month, day) {
    if(!isInteger(year)) {
        throw new Error('Invalid year');
    }

    if(!isInteger(month)) {
        throw new Error('Invalid month');
    }

    if(!isInteger(day)) {
        throw new Error('Invalid day');
    }
    
    // work internally in UTC to avoid local time zone complications
    this._date = new Date(Date.UTC(year, month - 1, day));
};

Object.defineProperties(DateWrapper.prototype, {
    year: {
        get: function () {
            return this._date.getUTCFullYear();
        },
        set: function (value) {
            this._date.setUTCFullYear(value);
        }
    },
    month: {
        get: function () {
            return this._date.getUTCMonth() + 1;
        },
        set: function (value) {
            this._date.setUTCMonth(value - 1);
        }
    },
    day: {
        get: function () {
            return this._date.getUTCDate();
        },
        set: function (value) {
            this._date.setUTCDate(value);
        }
    },
    weekDay: {
        get: function () {
            return this._date.getUTCDay();
        }
    }
});

DateWrapper.prototype.toLocalDate = function () {
    return new Date(this.year, this.month - 1, this.day);
};

DateWrapper.prototype.toUTCDate = function () {
    return new Date(this._date.getTime());
};