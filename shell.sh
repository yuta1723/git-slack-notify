#!/bin/sh
git status > status.txt
git diff > diff.txt
node index.js
