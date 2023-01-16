# vibent-ui

[Live demo](https://vibent.github.io/vibent-ui)

To work with mock calls (i.e. local only), run:

```bash
npm run start-mock
```

To update gh-pages, do:

```bash
git checkout main
git pull
git branch -f gh-pages
git checkout gh-pages
npm run build-gh-pages
git add docs
git commit -m "Publish new version of docs"
git push -f
```
