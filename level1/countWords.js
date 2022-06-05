/**
 * Given a string, counts the number of words inside it. Each word is separated by a single space character.
 */


function countWords(str) { // I want to feed the function a string,the function will then loop through the string(? would that be counting characters?) and count from space to space or comma to comma and report the total number of words in the string
    //maybe create an array from the loop so it can use an array index to count words
    // maybe create an array from the string using the split() method and reduce() method to count the words


    if (str.length == 0) {
        return 0;
    };
    let myArr = str.split(' '); //******* what does the trim method do?
    let wordCount = myArr.length;

    return wordCount;

}
// console.log(countWords('Hope this works'));

describe('countWords', function() {
    const assert = require("chai").assert;

    it('should work for empty strings', function() {
        assert.equal(countWords(""), 0);
    });

    it('should work for simple strings', function() {
        assert.equal(countWords("a b c"), 3);
        assert.equal(countWords("hello"), 1);
        assert.equal(countWords("hello world"), 2);
    });
});