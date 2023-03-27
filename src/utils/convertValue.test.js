import {describe, it,  expect} from 'vitest'
import convertValue from './convertValue';



describe('Tests to verify functionality of convert value', ()=>{
    it('Test that 2 divided by 2 returns 1.00', ()=>{
        expect(convertValue(2, 2)).toBe(parseFloat(1.00).toFixed(2));
    })
    it('Test that 5 divided by 2 returns 2.50', ()=>{
        expect(convertValue(5, 2)).toBe(parseFloat(2.50).toFixed(2));
    })
    it('Test that 2.5 divided by 2 returns 1.25', ()=>{
        expect(convertValue(2.5, 2)).toBe(parseFloat(1.25).toFixed(2));
    })
    it('Test that 1.25 divided by 2 returns .06', ()=>{
        expect(convertValue(1.25, 2)).toBe(parseFloat(0.63).toFixed(2));
    })
   

});