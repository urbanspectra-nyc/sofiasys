git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all

git checkout master
git pull origin master
git merge salman
git push origin master