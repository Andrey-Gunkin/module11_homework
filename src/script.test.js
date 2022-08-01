import {
    countDown
} from "./script";

describe('function countDown, which counts down', () => {
    it('should work correctly with the number', () => {
        expect(countDown(3)).toBe('321')
    }),
    it('must display error if not a number', ()=>{
        expect (countDown('a')).toBe('Error')
    }),
    it('must display empty string if a negative number',()=>{
        expect (countDown(-1)).toBe('')
    })
})