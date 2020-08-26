for x in `ls`
do
if [ -d $x ]; then
	zip -ruD9 "${x}/${x}" $x -x \*.zip
fi
done
