'use strict';
var assert = require('assert');
var funsert = require('./');

describe('funsert.equal', function () {
	it('should return function', function () {
		assert.strictEqual(typeof funsert.equal(1), 'function');
	});

	it('should not throw on valid assertion', function () {
		assert.doesNotThrow(function () {
			funsert.equal(1)(1);
		});
	});

	it('should throw on invalid assertion', function () {
		assert.throws(function () {
			funsert.equal(1)(2);
		}, '2 is not equal 1');
	});
});

describe('funsert', function () {
	var f1 = funsert.equal(1);
	var f2 = funsert.equal(2);

	it('should return function', function () {
		assert.strictEqual(typeof funsert(f1, f2), 'function');
		assert.strictEqual(typeof funsert([f1, f2]), 'function');
	});

	it('should not throw on `or` composition with valid assertion', function () {
		assert.doesNotThrow(function () {
			funsert([f1, f2])(1);
			funsert([f1, f2])(2);
		});
	});

	it('should throw on `or` composition with invalid assertion', function () {
		assert.throws(function () {
			funsert([f1, f2])(3);
		}, '3 is not equal 1 and 3 is not equal 2');
	});

	it('should throw on `and` composition with valid assertion', function () {
		assert.throws(function () {
			funsert(f1, f2)(1);
		}, /1 is not equal 2/);

		assert.throws(function () {
			funsert(f1, f2)(2);
		}, /2 is not equal 1/);
	});

	it('should not throw on `and` composition with valid assertion', function () {
		assert.doesNotThrow(function () {
			funsert(f1, f1)(1);
		});
	});
});
