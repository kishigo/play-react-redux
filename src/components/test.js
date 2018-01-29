/**
 * Created by Kelvin Ishigo on 1/28/18.
 *
 * Copyright (c) 2018 Kelvin Ishigo
 * Licensed under the MIT License. See LICENSE file in the project root for full license information.
 */
// This is the spread operator, "..."
let x = {"a":3};
// clone x, x and y are two separate identical objects
let y = {...x};
console.log(x, y);
// output is:
// { a: 3 } { a: 3 }
// clone x and add a new field(s)
let xx = {...x, "x":4};
console.log(xx);
// output is:
// { a: 3, x: 4 }
let yy = {...xx, "z":"foo"};
console.log(xx, yy)
// output is:
// { a: 3, x: 4 } { a: 3, x: 4, z: 'foo' }
let zz = {...yy, a:5};
console.log(zz);

const Foo = {
	x: () => {
		console.log('in x');
	}
};

Foo.x();


class Bar {
	constructor() {

	}
	busy() {
		console.log('busy');
	}
}

let bar = new Bar();
bar.busy();