# !/bin/bash -xf


 # install according to our packages.js

 # pipe all of the packages into a file with no duplicates
npm ls | sed 's/[└─┬├│ \`\|\+]//g' | sed 's/\-\-//g' | sed 's/deduped//g' | sed '/UNMETPEERDEPENDENCY/g' | sort -u > packages.txt

 # go into the build pts folder where an existing dummy json file exists
 cd ./test

 npm set registry https://artifactory.ehi.com/artifactory/api/npm/remote-npm-repos/

 # copy the packages.txt file created earlier to the local path
 cp ../packages.txt .

 rm ./buildOutput.txt

 # iterate through the packages.txt file and try to build each
 while read p; do
     echo p
     npm install $p --loglevel silly --dry-run --no-build 2>&1 | grep "error for" | tee -a buildOutput.txt > /dev/null 2>&1
 done < packages.txt

 cat buildOutput.txt | sort -u

 if (( $(cat buildOutput.txt | wc -l) > 0 )); then
     echo "Failed to find dependences in artifactory."
     exit 1
 fi
