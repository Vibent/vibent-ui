# vibent-ui

To work with mock calls (i.e. local only), run:

```bash
npm run start-mock
```

To update gh-pages, do:

```bash
git checkout main
git pull
git checkout gh-pages
git merge main
rm -r docs
npm run build-gh-pages
git add docs
git commit -m "Publish new version of docs"
git push
```