---
title: Deploy ACT to GitHub Pages
keywords:  ACT, deploy, GitHub Pages
menu: act blog/deploy github
---


[A snippet](/snippets/main/act-github/ "Deploy to GitHub Pages") with instructions how to deploy an ACT website to GitHub Pages using a [gh-pages](https://github.com/tschaub/gh-pages) package


```sh
# add a gh-pages package
npm install gh-pages --save-dev
```

For GitHub Organization or User pages (repository *username.github.io*), a simple deploy script should be added to *package.json*

```javascript
// package.json
    {
        "scripts": {
            ...
            "deploy": "gatsby build && gh-pages -d public -b master",
        }
    }
```

For repository pages (URLs of the form `https://username.github.io/reponame/`), an additional prefix should be added as well.

```javascript
// package.json
    {
        "scripts": {
            ...
            "deploy": "gatsby build --prefix-paths && gh-pages -d public -b master",
        }
    }
```

```javascript
// gatsby-config.js
module.exports = {
    pathPrefix: "/reponame",
}
```