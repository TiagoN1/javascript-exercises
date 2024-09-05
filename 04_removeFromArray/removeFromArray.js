const removeFromArray = function (array, ...otherArgs) {
    for (let index = 0; index < otherArgs.length; index++) {

        for (let i = 0; i < array.length; i++) {
            let index2 = array.indexOf(otherArgs[index]);
            if (index2 > -1) { // only splice array when item is found
                array.splice(index2, 1); // 2nd parameter means remove one item only
            }
        }

    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
