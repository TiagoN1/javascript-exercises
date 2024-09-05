const sumAll = function (num1, num2) {
    if ((Number.isInteger(num1) && num1 > 0) && (Number.isInteger(num2) && num2 > 0)) {
        //Determine which number is higher
        let max = num1 > num2 ? num1 : num2;
        let min = num1 < num2 ? num1 : num2;
        let sum = 0;
        for (let index = min; index <= max; index++) {
            sum = sum + index

        }
        return sum
    }
    else
        return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
