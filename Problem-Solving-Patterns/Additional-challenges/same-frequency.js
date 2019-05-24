/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution MUST have the following complexities:
Time: O(N)

sample input:

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589587, 5879385);
sameFrequency(22, 222);
*/

function sameFrequency(num1, num2) {
    // good luck. Add any arguments you deem necessary.
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) {
        return false;
    }

    let strFreq1 = {};
    let strFreq2 = {};

    // count the frequencies of the letters and store them as properties
    for (let letter of str1) {
        strFreq1[letter] = (strFreq1[letter] || 0) + 1;
    }
    for (let letter of str2) {
        strFreq2[letter] = (strFreq2[letter] || 0) + 1;
    }

    // for each key of the object, check if the values are the same
    for (let key in strFreq1) {
        if (strFreq1[key] !== strFreq2[key]) {
            return false;
        }
    }
    return true;
}
