# Working with Repositories

## `git clone`

Open the file structure for a commit

Common use: `git clone <url>` (e.g. `git clone https://github.com/zackschuster/ng-app`)

## `git checkout`

Open the file structure for a commit

Common use: `git checkout <branch>` (e.g. `git checkout master`)

- Create branches with the `-b` option/flag: `git checkout -b <name> <commit>` (e.g. `git checkout -b zackschuster ae23z2`)

## `git branch`

View, rename, copy and delete LOCAL branches

Common use: `git branch`

- View all branches with `git branch -v`
- Rename a branch with `git branch -m` (e.g. `git push -m zackschuster sackzchuster`) `{+}`
- Copy a branch with `git branch -c` (e.g. `git push -c zackschuster sackzchuster`) `{+}`
- Delete branches LOCALLY with `git branch -d <branch>` (e.g. `git push -d origin zackschuster`) `{!}`

## `git push` `{!}`

Delete a SERVER branch

Common use: `git push -d <server> <branch>` (e.g. `git push -d origin zackschuster`)

## `git rebase` `{!}`

Make one branch's history the base for another branch

Common use: `git rebase --onto <other-branch> <current-branch>^` (e.g. `git rebase --onto master develop`)

- Will put that branch out of sync with its copy on the server — you will need to `git push -f`
