# Workflows

## Some Perspective
- Based around shipping a product
- Ask yourself:
	- What is this project for?
	- How many people work on the project?
	- How often are changes made?

## One, Two or Many Branches
- One branch
	- Least complexity/overhead
	- More people means more conflicts
	- "Best effort `main`"
- Two branches
	- Typically `main` & `develop`
	- Allows for a clean distinction between development and production code
- Many branches
	- Doesn't require a central repository
	- Can work with a `main` & `develop`-type workflow
	- Generally requires some level of trusted code review for shipping
