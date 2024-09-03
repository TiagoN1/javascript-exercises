const repeatString = function (str, numberOfTimes) {
    let repeateadstring = ""
    if (numberOfTimes < 0) return "ERROR";
    for (let index = 0; index < numberOfTimes; index++) {
        repeateadstring = repeateadstring + str
    }
    return repeateadstring
};

// Do not edit below this line
module.exports = repeatString;
