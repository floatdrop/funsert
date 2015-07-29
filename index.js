'use strict';

var is = require('predicates');

function funsert() {
	var args = Array.prototype.slice.apply(arguments);
	return function (source) {
		args.forEach(function (f) {
			f(source);
		});
	};
}

function throwify(predicate, message) {
	message = message || 'is not passing assertion';

	return function (target) {
		var assert = predicate(target);

		return function (source) {
			if (!assert(source)) {
				throw new Error(source + ' ' + message + ' ' + target);
			}
		};
	};
}

funsert.ok = function ok(assert, message) {
	message = message || 'is not passing assertion';

	return function (source) {
		if (!assert(source)) {
			throw new Error(source + ' ' + message);
		}
	};
};

funsert.array = throwify(is.array, 'is not an array');
funsert.equal = throwify(is.equal, 'is not equal');
funsert.lessThan = throwify(is.lessThan, 'is not less than');
funsert.greaterThan = throwify(is.greaterThan, 'is not greater than');
funsert.instanceOf = throwify(is.instanceOf, 'is not instance of');
funsert.hasOwnProperty = throwify(is.hasOwnProperty, 'is not have own property');
funsert.hasProperty = throwify(is.hasProperty, 'is not have own property');
funsert.in = throwify(is.in, 'is not in');
funsert.matches = throwify(is.matches, 'is not matches');
funsert.strictEqual = throwify(is.strictEqual, 'is not strict equal');
funsert.endsWith = throwify(is.endsWith, 'is not ends with');
funsert.startsWith = throwify(is.startsWith, 'is not starts with');

module.exports = funsert;
