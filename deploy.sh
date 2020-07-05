#abort on errors
set -e

#build
npm run build

#navigate
cd dist

git init
git add -A
git commit -m 'deploy'

#if you are deploying to https://diegoxd93.github.io/
git push -f https://github.com/DiegoXD93/gasolinera.git master:gh-pages
