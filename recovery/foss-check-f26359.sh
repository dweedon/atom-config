# !/bin/bash -xf
 # install according to our packages.js

 # pipe all of the packages into a file with no duplicates
npm ls | sed 's/[└─┬├│ \`\|\+]//g' | sed 's/\-\-//g' | sed 's/deduped//g' | sed '/UNMETPEERDEPENDENCY/g' | sed '/^$/d' | sort -u > packages.txt

if [[ -f buildOutput.txt ]]; then rm buildOutput.txt; fi

npm login --registry https://artifactory.ehi.com/artifactory/api/npm/remote-npm-repos/

CNT=wc -l <filename>
 # iterate through the packages.txt file and try to build each
 while read p; do
     echo checking $p;
     npm install $p --registry https://artifactory.ehi.com/artifactory/api/npm/remote-npm-repos/ --dry-run --no-build --fetch-retries 0 --loglevel silly \
     2>&1 | grep "npm http fetch 404" \
     | tee -a buildOutput.txt;
 done < packages.txt

 rm -rf temp

 cat buildOutput.txt | sort -u

 if (( $(cat buildOutput.txt | wc -l) > 0 )); then
     echo "Failed to find dependences in artifactory."
     exit 1
 fi
