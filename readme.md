# funsert [![Build Status](https://travis-ci.org/floatdrop/funsert.svg?branch=master)](https://travis-ci.org/floatdrop/funsert)

> Functional assert library

Early prototype.

## Install

```
$ npm install --save funsert
```


## Usage

```js
var is = require('funsert');

var aboveFive = is.greaterThan(5);
var belowTen = is.ok(x => x < 10, 'is not below 10');
var inBoundary = is(aboveFive, belowTen);

inBoundary(7);
inBoundary(3);
//=> Throws '3 is not greater than 5'
```


## API

This is still under heavy development. Happy to hear suggestions before `1.0.0` release!

### funsert(assertions...)

Compose assertions.

- Array will be treaten as `or`
- Arguments will be treated as `and`

### funsert.ok(check, message)

Runs `check` function and throws Error, if it returns false value.

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
