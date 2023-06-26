import { add, subtract, sum, multiply, power, factorial } from './calculator.js';

describe('add', () => {
	test('adds 0 and 0', () => {
		expect(add(0,0)).toBe(0);
	});

	test('adds 2 and 2', () => {
		expect(add(2,2)).toBe(4);
	});

	test('adds positive numbers', () => {
		expect(add(2,6)).toBe(8);
	});
});

describe('subtract', () => {
	test('subtracts numbers', () => {
		expect(subtract(10,4)).toBe(6);
	});
});

describe('sum', () => {
	test.skip('computes the sum of an empty array', () => {
		expect(sum([])).toBe(0);
	});

	test.skip('computes the sum of an array of one number', () => {
		expect(sum([7])).toBe(7);
	});

	test.skip('computes the sum of an array of two numbers', () => {
		expect(sum([7,11])).toBe(18);
	});

	test.skip('computes the sum of an array of many numbers', () => {
		expect(sum([1,3,5,7,9])).toBe(25);
	});
});

describe('multiply', () => {
	test.skip('multiplies two numbers', () => {
		expect(multiply(2,4)).toBe(8);
	});

	test.skip('multiplies several numbers', () => {
		expect(multiply(2,4,6,8,10,12,14)).toBe(645120);
	});
});

describe('power', () => {
	test.skip('raises one number to the power of another number', () => {
		expect(power(4,3)).toBe(64); // 4 to third power is 64
	});
});

describe('factorial', () => {
	test.skip('computes the factorial of 0', () => {
		expect(factorial(0)).toBe(1); // 0! = 1
	});

	test.skip('computes the factorial of 1', () => {
		expect(factorial(1)).toBe(1);
	});

	test.skip('computes the factorial of 2', () => {
		expect(factorial(2)).toBe(2);
	});

	test.skip('computes the factorial of 5', () => {
		expect(factorial(5)).toBe(120);
	});

	test.skip('computes the factorial of 10', () => {
		expect(factorial(10)).toBe(3628800);
	});
});