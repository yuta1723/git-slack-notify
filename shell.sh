#!/bin/sh

env="/path/to/git-repo"
env_git="${env}/.git" 


git --work-tree=${env} --git-dir=${env_git} status -sb > status.txt
git --work-tree=${env} --git-dir=${env_git} diff > diff.txt
node index.js
