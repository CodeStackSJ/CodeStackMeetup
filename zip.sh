for x in `ls`
do
if [ -d $x ]; then
	zip -r -9 "${x}/${x}" $x
fi
done
