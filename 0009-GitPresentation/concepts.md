# Important Concepts

## Commit

- A container for one or more changes
- Tells you who & when — not always what if the message is bad
- Can look up the exact changes by using the associated hash

## Hash

- Exactly the same as a password hash
- Represents the entire file structure at the time of commit
- Specific algorithm used is SHA1; soon to be SHA256 `{+}`

## Branch

- A name for a set of commits (default is `master`)
- Just a text file in `.git/refs/heads/`
- Deleting them is weird — see `git checkout`/`git branch`

## Index

- The `.git` folder
- Where git keeps track of commits
- Literally every piece of data your repository has ever had gets stored in `.git/objects/`
- It's like an inner filesystem that you can't touch unless you pray to the terminal

## Staging Area

- Where you group changes together to eventually become commits (see `git add` in [`commands.md`](../commands/README.md))

## Working Tree

- The files you're currently editing
- Usually based on the file structure at the time of a given commit
