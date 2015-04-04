var DateWrapper = require('./DateWrapper');

module.exports = function (date) {
    return date instanceof DateWrapper;
};
