const findThirdMax = function (array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            if (count === 3) {
                return array[i];
            }
        }
    }
};
console.log(findThirdMax([1, 2, 2, 3,3,4,5,6,6,6]));