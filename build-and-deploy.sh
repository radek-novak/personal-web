#! /bin/bash

git add .
git ci -m "autocommit $(date "+%Y-%m-%d %H:%M:%S")"
git push origin master

hugo

cd public

git add --all
git ci -m "autocommit $(date "+%Y-%m-%d %H:%M:%S")"
git push origin master