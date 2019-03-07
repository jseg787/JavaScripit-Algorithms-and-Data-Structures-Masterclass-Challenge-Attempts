/* Anagram Challenge

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
*/

function validAnagram(str1, str2) {
    // if the lengths aren't the same return false
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyStr1 = {}; // hold letter frequency of str1
    let frequencyStr2 = {}; // hold letter frequency of str2

    for (let letter of str1) {
        // if the letter is already a key, increment
        if (letter in frequencyStr1) {
            frequencyStr1[letter]++;
        }
        // else, initialize as 1
        else {
            frequencyStr1[letter] = 1;
        }
    }

    for (let letter of str2) {
        // if the letter is already a key, increment it
        if (letter in frequencyStr2) {
            frequencyStr2[letter]++;
        }
        // else, initialize as 1
        else {
            frequencyStr2[letter] = 1;
        }
    }

    for (let key in frequencyStr1) {
        // if there isn't the same frequency for each letter return false
        if (frequencyStr1[key] !== frequencyStr2[key]) {
            return false;
        }
    }

    return true;
}

validAnagram('', '');   // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpanama'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
validAnagram('rockets', 'restock'); // true