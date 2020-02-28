# Convert Vanilla-ToDo From Scripts To Modules

## index.html should only include *ONE* JavaScript file

### Syntax Example

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
	</head>
	<body>
		<script type="module" src="module.js"></script>
	</body>
</html>
```

```js
// module.js
import { x } from 'named.js';
import x as y from 'default.js';
import * as z from 'namespace.js';

x();
console.log(y);
console.log(z.a, z.b, z.c);

// named.js
export function x() {
	// code
}

// default.js
export default const val = 23;

// namespace.js
const a = 1;
const b = 2;
const c = 3;
export { a, b, c }
```

### Further Reading

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
