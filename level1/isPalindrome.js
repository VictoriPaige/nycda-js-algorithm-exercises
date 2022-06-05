/**
 * Determines whether the given string is a palindrome, i.e. if you were to reverse the order of the characters inside the string, you would get back the original string.
 */


function isPalindrome(str) {
    let string = '';
    for (let i = str.length - 1; i >= 0; i--) {

        string += str[i]

    };
    console.log(string == str ? ` ${str} is a Palindrome!` : `${str} is NOT a Palindrome!`);
    return string == str

}



console.log(isPalindrome('racecar')); // <--- works, but needs to be boolean!

describe('isPalindrome', function() {
    const assert = require("chai").assert;

    it('works for empty string', function() {
        assert.isTrue(isPalindrome(''));
    });

    it('works for single characters', function() {
        assert.isTrue(isPalindrome('x'));
        assert.isTrue(isPalindrome('c'));
    });

    it('works for double characters', function() {
        assert.isTrue(isPalindrome('xx'));
        assert.isTrue(isPalindrome('gg'));
        assert.isFalse(isPalindrome('af'));
        assert.isFalse(isPalindrome('yt'));
    });

    it('works for words', function() {
        assert.isTrue(isPalindrome('racecar'));
        assert.isFalse(isPalindrome('potato'));
    });
});