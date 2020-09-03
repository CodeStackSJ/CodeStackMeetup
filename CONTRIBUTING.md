## Commit format
Please have all commit prefix with the meetup id in brackets followed by folder before comment.

Format: `[{Id}] {Folder}: {Description}`

example: `[0002] init: added starter code base`

## Zip archives
When you add a folder, a GitHub action will run the `zip.sh` script to archive the folder's contents, storing them in that folder as a zip file. It will not update any zip file already stored in the repository. If you change the contents of a folder, you are responsible for updating that folder's zip file.

If you use `zip.sh` to update the zip, bear in mind that it can often recreate zip files in git unnecessarily. You do not need to commit all the files that `zip.sh` creates — only the zip corresponding to a folder you personally changed.
