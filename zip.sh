echo "Creating zip files for presentation folders:"
for x in `ls`
do
if [[ -d $x && $x =~ ^[0-9]{4}[-] ]]; then
	echo "  ¬ $x"
	zip -qruD9 "$x/$x" $x -x \*.zip
fi
done
