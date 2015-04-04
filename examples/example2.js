var dates = require('../index.js');

var thisYear = new Date().getFullYear();

console.log('\n\n============');
console.log('Differences between local and UTC dates');
console.log('============\n');

console.log('Easter (Local):', dates.easter(thisYear).toLocalDate());
console.log('Easter (UTC):', dates.easter(thisYear).toUTCDate());
