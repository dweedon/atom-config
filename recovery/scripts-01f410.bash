#!/usr/bin/env bash

function spring_go {
    local profile="${1:-local}"

    mvn spring-boot:run -Dspring.profiles.active="$profile" -U
}

function portkill {
    local port="$1"

    lsof -i tcp:"$port" \
        | sed 's/ /,/g' \
        | sed 's/,\{1,\}/ /g' \
        | grep 'node\|java' \
        | cut -f2 -d' ' \
        | xargs -n 1 -I {} kill -9 {}
}

function farewell {
    portkill 8080
    portkill 8090
    portkill 8000
}

function screensaver {
    /System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine
}

function build_frontend {
    local cwd=$(pwd)
    
    cd "${EHI_PROJECT_DIR}"/mse-ui \
        && mvn install \
        && cd ../mse-web \
        && mvn clean install -U

    cd "$cwd"
}

function build_backend {
    local cwd=$(pwd)

    cd "${EHI_PROJECT_DIR}"/mse-api \
        && mvn clean install \
        && cd ../mse-svc \
        && mvn clean install -U

    cd "$cwd"
}

function fromto {
    local from="$1"
    local to="$2"
    local ignore="${3:-putting_some_very_precise_garbage_here_so_grep_doesnt_ignore_anything}"

    grep -nr "$from" * \
         2>&1| grep -v "$ignore" \
        | cut -f1 -d':' \
        | sort \
        | uniq  \
        | grep -v 'grep' \
        | xargs -n 1 sed -i '' -e "s/$from/$to/g"
}

function repos {
    local cwd=$(pwd)
    cd "${EHI_PROJECT_DIR}"
    for i in *; do
        if [[ -d "$i" ]]; then
            cd "$i"
            echo '--------------------------------------------------------------------------------'
            echo "$i"
            echo '--------------------------------------------------------------------------------'
            if [[ -d '.git' ]]; then
                git status
            fi
            echo
            cd ..
        fi
    done
    cd "$cwd"
}

function set_branches_frontend {
    local cwd=$(pwd)
    local branch="$1"
    for i in $(echo mse-web mse-ui); do
        cd "${EHI_PROJECT_DIR}"/"${i}" \
            && git checkout "$branch" \
            && git pull
    done
    cd "$cwd"
}

function set_branches_backend {
    local cwd=$(pwd)
    local branch="$1"
    for i in $(echo mse-api mse-svc); do
        cd "${EHI_PROJECT_DIR}"/"${i}" \
            && git checkout "$branch" \
            && git pull
    done
    cd "$cwd"
}

function start_frontend {
    local cwd=$(pwd)
    local mocked="$1"

    if [[ -n "$mocked" ]]; then
        cd "${EHI_PROJECT_DIR}"/mse-ui \
            && npm install \
            && npm run start:withMocks
    else
        cd "${EHI_PROJECT_DIR}"/mse-web \
            && spring_go
    fi

    cd "$cwd"
}

function start_backend {
    local cwd=$(pwd)

    cd "${EHI_PROJECT_DIR}"/mse-svc \
       && spring_go

    cd "$cwd"
}

function setup {
    local branch="${1:-master}"

    set_branches_frontend "$branch" \
        && set_branches_backend "$branch" \
        && build_frontend \
        && build_backend
}

function ehi {
    cd "${EHI_PROJECT_DIR}"
}

function migrate {
    local cwd=$(pwd)
    cd ${EHI_PROJECT_DIR}/mse-svc/scripts/database
    for f in *.sh; do 
      bash "$f" -H 
    done
    cd $cwd
} 

function mktest {
  local cwd=$(pwd)
  cd ${EHI_PROJECT_DIR}/mse-ui
  local testFilePath="tests/${$(fzf)/".js"/".test.js"}"
  local parentPath=$(dirname $testFilePath)
  mkdir -p $parentPath
  touch $testFilePath
  atom $testFilePath
  cd $cwd
}

function importWord {
  local cwd=$(pwd)
  local word="$1"
  local file="$2"

  cd ${EHI_PROJECT_DIR}/mse-ui
  local contents=$(importjs word $word $file | sed -n 2p | jq -r ".fileContent")
  local error=$(importjs word $word $file | sed -n 2p | jq -r ".error")
  if [error == ''] {
    
  }
  echo $contents > $file
  
  cd $cwd
}
