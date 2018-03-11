'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
    //convert(2, 'BTC', 'BTC');
    expect(typeof convert(2, 'BTC', 'BTC')).toBe('number');
});

test('should return a number', () => {
    //convert(2, 'BTC', 'BTC', 'Number');
    expect(typeof convert(2, 'BTC', 'BTC', 'Number')).toBe('number');
});

test('should return a Big number', () => {
    //convert(2, 'BTC', 'BTC', 'Big');
    expect(typeof convert(2, 'BTC', 'BTC', 'Big') instanceof Big).toBe(false);

});

test('should return a string', () => {
    //convert(2100, 'mBTC', 'BTC', 'String');
    expect(typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe('string');
});

test('should convert a number from interger', () => {
    //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
    expect(Number.isInteger(convert(123456789012345, 'Satoshi', 'BTC', 'Number'))).toBe(false);

});

test('should convert a number from float', () => {
    //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
    expect(typeof convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe('number');
});

test('should convert a string', () => {
    //convert('2', 'BTC', 'BTC', 'Number');
    expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(2);
});

test('should convert a Big number', () => {
    //convert(new Big(2), 'BTC', 'BTC', 'Number');
    expect(convert(new Big(2), 'BTC', 'BTC', 'Number')instanceof Big).toBe(false);
});

test('should convert a NaN to a number', () => {
    //convert(NaN, 'BTC', 'BTC', 'Number');
    //convert(NaN, 'BTC', 'mBTC', 'Number');
    expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');});
    expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');

test('should convert a NaN to a string', () => {
    //convert(NaN, 'BTC', 'BTC', 'String');
    //convert(NaN, 'BTC', 'mBTC', 'String');
    expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe('string');
    expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe('string');
    expect(isNaN(convert(NaN, 'BTC', 'BTC', 'String'))).toBe(true);
    expect(isNaN(convert(NaN, 'BTC', 'mBTC', 'String'))).toBe(true);
});

test('should not convert a NaN to a Big', () => {
    //convert(NaN, 'BTC', 'BTC', 'Big');
    expect(() => {
        convert(NaN, 'BTC', 'BTC', 'Big');
    }).toThrow();

});

test('should handle rounding errors', () => {
    //convert(4.6, 'Satoshi', 'BTC', 'Number');
    //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
    expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).not.toBe(convert(0.46, 'Satoshi', 'BTC', 'Number'));
    expect(typeof convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe('number')
    expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).not.toBe(convert(0.46, 'BTC', 'Satoshi', 'Number'));
    expect(typeof convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe('number');

});

test('should throw when untest is undefined', () => {
    //convert(new Big(2), 'x', 'BTC', 'Number');
    //convert(new Big(2), 'BTC', 'x', 'Number');
    //convert(NaN, 'x', 'BTC', 'Number');
    //convert(NaN, 'BTC', 'x', 'Number');
    expect(() => {
        convert(new Big(2), 'x', 'BTC', 'Number');
    }).toThrow();
    expect(() => {
        convert(new Big(2), 'BTC', 'x', 'Number');
    }).toThrow();
    expect(() => {
        convert(NaN, 'x', 'BTC', 'Number');
    }).toThrow();
    expect(() => {
        convert(NaN, 'BTC', 'x', 'Number');
    }).toThrow();
});

test('should throw when representaion is undefined', () => {
    //convert(2, 'BTC', 'mBTC', 'x');
    //convert(NaN, 'BTC', 'mBTC', 'x');
    throw new Error('test not yet defined... write your test here');
});

test('should allow untest aliases', () => {
    //convert(4.6, 'Satoshi', 'sat');
    //convert(4.6, 'μBTC', 'bit');
    throw new Error('test not yet defined... write your test here');
});