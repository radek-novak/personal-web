#! /bin/bash

# either take message from a param or use a date
COMMIT_MSG=${1-"autocommit $(date "+%Y-%m-%d %H:%M:%S")"}

echo "Committing with message: $COMMIT_MSG"

git add .
git ci -m "$COMMIT_MSG"
git push origin master

# builds the website into public/
hugo

cd public
git add --all
git ci -m "$COMMIT_MSG"
git push origin master