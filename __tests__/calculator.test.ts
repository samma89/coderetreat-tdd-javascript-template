import { sumTwoIntegers } from "../calculator";
import {  } from "ts-jest";

describe('calculator', () => {
    describe('sumTwoIntegers(x,y)', () => {
        it('should return 40', () => {
            const value = sumTwoIntegers(15, 25);
            expect(value).toEqual(40);
        });
    });
});
