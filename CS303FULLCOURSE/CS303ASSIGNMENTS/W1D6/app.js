"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary, getDateAgo, getWeekDay, getLocalDay, getLastDayOfMonth, formatDate, getSecondsToday };
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} salaries to
 * @return {number} maxName
 */
function topSalary(salaries) {

    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}
console.log(topSalary());

/**
 * 
 * @param {number} date 
 * @param {number} days 
 * @return {number}
 */
function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.lo(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365));
/**
 * Write a function getWeekDay(date) to show the weekday in short format:
 *  ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 * @param {number} date 
 * @return {number} date
 */
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date1 = new Date(2014, 0, 3); // 3 Jan 2014
console.log(getWeekDay(date1));
/**
 * 
 * @param {number} date 
 * @returns {numkber}
 */
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}
getLocalDay();
/**
 * 
 * @param {number} year 
 * @param {number} month 
 * @return {number} month and year
 */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1));
/**
 * 
 * @param {number} date 
 * @return {number} date 
 */
function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds

    if (diff < 1000) { // less than 1 second
        return 'right now';
    }

    let sec = Math.floor(diff / 1000); // convert diff to seconds

    if (sec < 60) {
        return sec + ' sec. ago';
    }

    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
        return min + ' min. ago';
    }

    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component

    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date - 1))); // "right now"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.2016 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
/**
 * 
 * @returns {number} second day
 */
function getSecondsToday() {
    let now = new Date();

    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
}

console.log(getSecondsToday());
