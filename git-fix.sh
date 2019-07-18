#!/bin/bash

fix() {
  if [[ "$1" = "" ]]; then
    echo "Usage: git fix <ticket>"
    return
  fi

  ticket="$1"

# if [[ $(git diff --stat) != '' ]]; then
#     echo "You need to commit or stash this stuff"
#     git status -s
#     return
#   fi

  echo "Tagging this commit with build_$ticket"
  git tag build_$ticket




  # env="local"
  # if [[ "${2}" = "local" || "${2}" = "uat" ]]; then
  #   env=$2
  # fi
  # for container in $(docker ps --format {{.Names}}); do
  #   name="${env}_$1_1"
  #   if [[ $container = $name ]]; then
  #     docker logs $name -f
  #     return
  #   fi
  # done

  # echo "No running container named ${env}_$1_1"
  # echo "Running containers include:"
  # docker ps --format {{.Names}}
}
