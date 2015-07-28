'use strict';

function funsert() {
	var args = Array.prototype.slice.apply(arguments);
	return function (source) {
		if (Array.isArray(args[0])) {
			var ors = args[0];
			var exception = [];

			for (var i = 0; i < ors.length; i++) {
				try {
					ors[i](source);
					break;
				} catch (e) {
					exception.push(e.message);
				}
			}

			if (i === ors.length) {
				throw new Error(exception.join(' and '));
			}
			return;
		}

		args.forEach(function (f) {
			f(source);
		});
	};
}

funsert.equal = function equal(target) {
	return function (source) {
		if (target !== source) {
			throw new Error(source + ' is not equal ' + target);
		}

		return true;
	};
};

module.exports = funsert;
