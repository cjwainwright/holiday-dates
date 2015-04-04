var dates = require('../index.js');

var thisYear = new Date().getFullYear();

console.log('\n\n============');
console.log('Occasion dates');
console.log('============');

[thisYear, thisYear + 1, thisYear + 2].forEach(function (year) {
    console.log('\n');
    console.log(year);
    console.log('----\n');
    console.log('Mothering Sunday:', format(dates.motheringSunday(year)));
    console.log('Easter:', format(dates.easter(year)));
    console.log('Mother\'s Day:', format(dates.mothersDay(year)));
    console.log('Father\'s Day:', format(dates.fathersDay(year)));
    console.log('Thanksgiving (CA):', format(dates.thanksgivingCanada(year)));
    console.log('Halloween:', format(dates.halloween(year)));
    console.log('Thanksgiving (US):', format(dates.thanksgiving(year)));
    console.log('Christmas:', format(dates.christmas(year)));
});

function format(dateWrapper) {
    return dateWrapper.toLocalDate().toDateString();
}