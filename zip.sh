for x in `ls`
do
if [ -d $x ]; then
	echo "Zipping ${x}/${x}..."
	zip -qruD9 "${x}/${x}" $x -x \*.zip
fi
done
