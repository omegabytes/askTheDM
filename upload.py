 #!/usr/bin/env python2.7

import os
import zipfile

def remove(file):
    if os.path.isfile(file):
        print "Archive.zip exists, deleting"
        os.remove(file)
    else:
        print "Archive.zip does not exist, continuing"

def zip(src):
    zf = zipfile.ZipFile("Archive.zip", "w", zipfile.ZIP_DEFLATED)
    abs_src = os.path.abspath(src)

    for dirname, subdirs, files in os.walk(src):
        for filename in files:
            absname = os.path.abspath(os.path.join(dirname,filename))
            arcname = absname[len(abs_src) + 1:]
            zf.write(absname, arcname)
    zf.close()

remove("Archive.zip")
zip("src")
os.system("aws s3 cp Archive.zip s3://askthedm/Archive.zip")
print "https://s3.amazonaws.com/askthedm/Archive.zip"
