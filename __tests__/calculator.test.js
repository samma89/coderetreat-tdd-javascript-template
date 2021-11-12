const calculator = require('../calculator');

describe('calculator', () => {
    describe('sumTwoIntegers(x,y)', () => {
        it('should return 40', () => {
            const value = calculator.sumTwoIntegers(15, 25);
            expect(value).toEqual(40);
        });
    });
});
