# Working with Commits

## `git log`

Look at some commits in a branch's local history

Common use: `git log -5` (or however many recent commits you want to view)

- Use `git log -p` to show changes
- Can show changes instead with `git show` `{+}`

Several options for looking at earlier commits `{+}`

- Look at commits before a specific commit: `git log <commit-ish>~n` (e.g. `git log ae23z2~5`)
- So many other tools — see [Git Basics - Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)

## `git push`

Send your commits to a server

- Overwite the server's copy of a branch with `git push -f` `{!}`
- Slightly less dangerous version of the above: `git push --force-with-lease` `{!}`

## `git fetch`

Get a list of all the changes you don't have locally from a server

Common use: `git fetch`

- Only gets changes for the current branch
- Get changes for all branches with `git fetch --all`
- See more details about what git is doing with `git fetch -v`

## `git merge`

Apply fetched commits to your local files when you DO NOT have commits to push

Common use: `git merge`

- If you do have commits to push, it creates an extra (almost useless) commit
- `git merge --ff-only` will error instead `{+}`

## `git rebase`

Apply fetched commits to your local files when you DO have commits to push

Common use: `git rebase`

- If you have changes to stash, use `git rebase --autostash`
- Can also edit commit history with `git rebase -i` (e.g. `git rebase -i HEAD~5`) `{+}`
- You probably don't want to add any other options/flags here D: `{!}`

## `git pull`

Shortcut to run `git fetch` followed my `git merge` or `git rebase`, depending on git's mood.

- I personally think this command has too many tradeoffs with only one benefit — you get to type slightly less (maybe).
