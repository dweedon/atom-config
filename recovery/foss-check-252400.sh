# !/bin/bash -xf
 # install according to our packages.js

 # pipe all of the packages into a file with no duplicates
npm ls | sed 's/[└─┬├│ \`\|\+]//g' | sed 's/\-\-//g' | sed 's/deduped//g' | sed '/UNMETPEERDEPENDENCY/g' | sed '/^$/d' | sort -u > ./internals/foss-checker/packages.txt

 # go into the build pts folder where an existing dummy json file exists
 cd ./internals/foss-checker

 # copy the packages.txt file created earlier to the local path
 cp ../../package.json .

 if [[ -f ./buildOutput.txt ]]; then rm ./buildOutput.txt; fi

 if [[ ! -d ./temp ]]; then mkdir ./temp; fi

 # iterate through the packages.txt file and try to build each
 while read p; do
     npm install styled-components@3.2.1  --registry https://artifactory.ehi.com/artifactory/api/npm/remote-npm-repos/ --loglevel silly --dry-run --no-build --fetch-retries 0 \
     2>&1 | grep "error"
 done < packages.txt

 rm -rf temp

 cat buildOutput.txt | sort -u

 if (( $(cat buildOutput.txt | wc -l) > 0 )); then
     echo "Failed to find dependences in artifactory."
     exit 1
 fi
