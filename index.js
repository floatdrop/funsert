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
	message = message || 'passing assertion';

	return function (target) {
		var assert = predicate(target);

		return function (source) {
			if (!assert(source)) {
				throw new Error(source + ' is not ' + message + ' ' + target);
			}
		};
	};
}

funsert.ok = function ok(assert, message) {
	message = message || 'passing assertion';

	return function (source) {
		if (!assert(source)) {
			throw new Error(source + ' is not ' + message);
		}
	};
};

funsert.array = throwify(is.array, 'an array');
funsert.equal = throwify(is.equal, 'equal');
funsert.lessThan = throwify(is.lessThan, 'less than');
funsert.greaterThan = throwify(is.greaterThan, 'greater than');
funsert.instanceOf = throwify(is.instanceOf, 'instance of');
funsert.hasOwnProperty = throwify(is.hasOwnProperty, 'have own property');
funsert.hasProperty = throwify(is.hasProperty, 'have own property');
funsert.in = throwify(is.in, 'in');
funsert.matches = throwify(is.matches, 'matches');
funsert.strictEqual = throwify(is.strictEqual, 'strict equal');
funsert.endsWith = throwify(is.endsWith, 'ends with');
funsert.startsWith = throwify(is.startsWith, 'starts with');

module.exports = funsert;
