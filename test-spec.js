'use strict';
var main = require('./main/main.js');

describe("testing",() => {
    it("should print correct sums",() => {

        const arrays = [1,2,3,4,5];
        spyOn(console, 'log');

        main(arrays);

        const expectText = 35;

        expect(console.log).toHaveBeenCalledWith(expectText);
    });


});


