const valueBd = prompt("Enter your birthday Ex:01-01-2003 ");
const getDate = new Date(valueBd);
const data = new Date();
const timeTest = getDate - data;

const secondsTest = timeTest / 1000;
const minutesTest = timeTest / (1000 * 60);
const hoursTest = timeTest / (1000 * 60 * 60);
const daysTest = timeTest / (1000 * 60 * 60 * 24);
const monthsTest = timeTest / (1000 * 60 * 60 * 24 * 31);
const yearsTest = timeTest / (1000 * 60 * 60 * 24 * 365);
const heartSpeedMinute = 70;

console.log("Passed seconds:"(secondsTest.toFixed(0)));
console.log("Passed minutes:"(minutesTest.toFixed(0)));
console.log("Passed hours: "(hoursTest.toFixed(0)));
console.log("Passed Days: "(daysTest.toFixed(0)));
console.log("Passed mouth: "(monthsTest.toFixed(0)));
console.log("Passed years:"(yearsTest.toFixed(0)));
