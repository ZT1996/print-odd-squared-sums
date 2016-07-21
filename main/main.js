'use strict';

function printSquaredSums(arrays) {
    let nums = arrays.filter(array => array % 2 === 1).map(odd => odd * odd).reduce((prev,next) =>
    prev + next);

    console.log(nums);
}

module.exports = printSquaredSums;
