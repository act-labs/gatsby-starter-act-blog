---
title: File sourcing
keywords: file sourcing, Gatsby plugin
menu: gatsby/files sourcing
---


[A snippet](/snippets/main/gatsby-files-sourcing/ "file sourcing, Gatsby plugin") with a configuration to source files from a *path* directory.

```javascript
// file sourcing in gatsby-config.js
plugins: [
    {
        resolve: "gatsby-source-filesystem", // a filesystem plugin
        options: {
          name,
          path
        }
    },
]
```