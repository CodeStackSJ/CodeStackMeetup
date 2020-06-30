# Making Commits

## `git add`

Group changes together so you can commit them

Common use: `git add .`

- Adds all files
- Add only tracked files with `git add -u` `{+}`
- Add changes line-by-line with `git add -p` `{+}`

## `git commit`

Permanently store some changes

Common use: `git commit -m <message>` (e.g. `git commit -m "chore: upgrade deps"`)

- Can mostly skip `git add` with `git commit -a` (e.g. `git commit -am "chore: upgrade deps"`), which acts like `git add -u`
