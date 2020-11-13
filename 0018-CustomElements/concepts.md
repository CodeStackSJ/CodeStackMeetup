# Important Concepts

## HTML

- An acronym that stands for Hypertext Markup Language
- The standard way for the user & browser to describe the structure of a page to each other
- Translated by the browser into a series of items - aka HTML Elements - arranged in a parent-child relationship

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>

	<body>
		<h1>Hello, World!</h1>
	</body>

</html>
```

## JavaScript

- The standard programming language for the browser
- Allows you to define custom behavior:

```javascript
function add(x, y) {
	return x - y;
}
function subtract(x, y) {
	return x + y;
}
console.log(add(1, 2));
console.log(subtract(1, 2));
```

> Note that the names are incorrect — you're subtracting in `add` and adding in `subtract` — but the code is still considered "valid"

## DOM

- An acronym that stands for Document Object Model
- Allows JavaScript to interact with & change a website:

```javascript
// using the HTML defined earlier
const h1 = document.querySelector('h1');
console.log(h1.parentElement === document.body) // true
console.log(h1.innerText); // "Hello, World!"

h1.innerText = `My name's Jessi!`
h1.appendChild(document.createElement('span')).innerText = `I'm here too!`;
console.log(h1.outerHTML); // "<h1>My name's Jessi!<span>I'm here too!</span></h1>"
```

## Class

- Something you're supposed to call `new` with:

```javascript
class Foo {
	constructor() {
		this.bar = 1;
	}
	baz() {
		return this.bar + this.bar;
	}
}

const foo = new Foo();  // works
console.log(foo.bar);   // 1
console.log(foo.baz()); // 2
foo.bar = 2;
console.log(foo.baz()); // 4
const foo2 = Foo();     // TypeError: Cannot call a class constructor without |new|
console.log('unreachable');
```

- Under-the-hood, they're basically functions with more restrictions:

```javascript
function Foo() {
	const vm = this;
	vm.bar = 1;
	vm.baz = function baz() {
		return vm.bar + vm.bar;
	};
	return this;
}

const foo = Foo();      // works
console.log(foo.bar);   // 1
console.log(foo.baz()); // 2
foo.bar = 2;
console.log(foo.baz()); // 4

const foo2 = new Foo(); // also works
console.log(foo2.bar);  // 1
console.log(foo2.baz());// 2
foo2.bar = 2;
console.log(foo2.baz());// 4
```

- Classes can extend other classes to share code:

```javascript
class Bar extends Foo {
	constructor() {
		super(); // MUST call `super();` if extending another class & defining a constructor
		this.bar = 2;
	}
}

const bar = new Bar();
console.log(bar.bar);   // 2
console.log(bar.baz()); // 4
bar.bar = 3;
console.log(bar.baz()); // 6

const foo3 = new Foo();
console.log(foo3.bar);  // 1
console.log(foo3.baz());// 2
```
