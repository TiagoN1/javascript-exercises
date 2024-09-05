const reverseString = function (strToReverse) {
    let b = ''
    for (let index = 0; index < strToReverse.length; index++) {
        b = b + strToReverse[strToReverse.length - index - 1]

    }
    return b
};

// Do not edit below this line
module.exports = reverseString;
