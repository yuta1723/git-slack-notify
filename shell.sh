#!/bin/sh
git status -sb > status.txt
git diff > diff.txt
node index.js
