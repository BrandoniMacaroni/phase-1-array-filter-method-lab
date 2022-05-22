// Code your solution here
function findMatching(driverNames, string1) {
    let match = driverNames.filter(match => match.toLowerCase() === string1.toLowerCase());
    return match;
}

function fuzzyMatch(driverNames, string1) {
    let startsWithLetters = driverNames.filter((driver) => driver.startsWith(string1));
    return startsWithLetters;
}

function matchName(driverNames, string1) {
    let matchEverything = driverNames.filter(match => match.name === string1);
    return matchEverything;
}