# funsert [![Build Status](https://travis-ci.org/floatdrop/funsert.svg?branch=master)](https://travis-ci.org/floatdrop/funsert)

> Functional assert library

## Install

```
$ npm install --save funsert
```


## Usage

```js
var is = require('funsert');

var aboveFive = is.greaterThan(5);
var belowTen = is.ok(function (x) { return x < 10; }, 'below 10');
var inBounds = is(aboveFive, belowTen);

inBounds(7);
inBounds(3);
//=> Throws '3 is not greater than 5'
```


## API

This is still under heavy development. Happy to hear suggestions before `1.0.0` release!

### funsert(assertions...)

Compose assertions with `and` operation.

### funsert.ok(check, [message])

Runs `check` function and throws Error, if it returns `false`.

### Helpers

Funsert wraps some predicate functions from [predicates](https://github.com/wookieb/predicates):

- array
- equal
- lessThan
- greaterThan
- instanceOf
- hasOwnProperty
- hasProperty
- in
- matches
- strictEqual
- endsWith
- startsWith

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
