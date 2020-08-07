# Attributes

## `id`
- Unique identifier for an element
- Combine with other attributes to describe the element in question:
	```html
	<form name="form1">
		<label for="input1">Input One</label>
		<input id="input1" />
	</form>
	```

	```html
	<div id="div1">Primary</div>
	<div id="div2">Text</div>
	<input id="input2" aria-labelledby="div1 div2" /> <!-- Label: "Primary Text" -->
	<div id="div3">Number</div>
	<input id="input3" type="number" aria-labelledby="div1 div3" /> <!-- Label: "Primary Number" -->
	```

## `title`
- Displays text in a tooltip on hover
	```html
	<div title="Native tooltip text"></div>
	```

## `hidden`
- Signals that an element should not be considered relevant to the document
- Won't be rendered/visible
- Won't be announced by screen-readers
	```html
	<div hidden>Nobody cares about me until I take off the attribute.</div>
	```

## `disabled`
- Signals that the input cannot be interacted with
	```html
	<form name="form1">
		<label for="input1">Input One</label>
		<input id="input1" disabled />
	</form>
	```

## `readonly`
- Signals that the input cannot be edited
	```html
	<form name="form1">
		<label for="input1">Input One</label>
		<input id="input1" readonly />
	</form>
	```

## `required`
- Signals that the input must be used
	```html
	<form name="form1">
		<label for="input1">Input One</label>
		<input id="input1" required />
	</form>
	```
	```html
	<form name="form1">
		<label for="input1">Input One</label>
		<input id="input1" required />
	</form>
	```
