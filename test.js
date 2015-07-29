'use strict';
var assert = require('assert');
var is = require('./');

describe('funsert.ok', function () {
	it('should return function', function () {
		assert.strictEqual(typeof is.ok(function () {}), 'function');
	});
});

describe('funsert.equal', function () {
	it('should return function', function () {
		assert.strictEqual(typeof is.equal(1), 'function');
	});

	it('should not throw on valid assertion', function () {
		assert.doesNotThrow(function () {
			is.equal(1)(1);
		});
	});

	it('should throw on invalid assertion', function () {
		assert.throws(function () {
			is.equal(1)(2);
		}, /2 is not equal 1/);
	});
});

describe('funsert', function () {
	var equalOne = is.equal(1);
	var equalTwo = is.equal(2);

	it('should return function', function () {
		assert.strictEqual(typeof is(equalOne, equalTwo), 'function');
	});

	it('should throw on `and` composition with valid assertion', function () {
		assert.throws(function () {
			is(equalOne, equalTwo)(1);
		}, /1 is not equal 2/);

		assert.throws(function () {
			is(equalOne, equalTwo)(2);
		}, /2 is not equal 1/);
	});

	it('should not throw on `and` composition with valid assertion', function () {
		assert.doesNotThrow(function () {
			is(equalOne, equalOne)(1);
		});
	});
});
