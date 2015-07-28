# funsert [![Build Status](https://travis-ci.org/floatdrop/funsert.svg?branch=master)](https://travis-ci.org/floatdrop/funsert)

> Functional assert library

Early prototype.

## Install

```
$ npm install --save funsert
```


## Usage

```js
var funsert = require('funsert');

var one = funsert.equal(1);
var two = funsert.equal(2);
var assert = funsert([one, two]);

assert(1);
assert(2);
assert(3);
//=> Throws '3 is not equal 1 and 3 is not equal 2'
```


## API

This is still under heavy development. Happy to hear suggestions before `1.0.0` release!

### funsert(assertions...)

Compose assertions.

- Array will be treaten as `or`
- Arguments will be treated as `and`

### funsert.equal(object)

Asserts, that input will be equal to `object`.

Returns function with assertion.

## License

MIT © [Vsevolod Strukchinsky](http://github.com/floatdrop)
