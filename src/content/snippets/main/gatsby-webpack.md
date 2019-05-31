---
title: Gatsby, customize webpack configuration
keywords: webpack, aliases, Gatsby
menu: gatsby/webpack
---


[A snippet](/snippets/main/gatsby-webpack/ "Gatsby, customize webpack configuration") with code to add webpack aliases (in gatsby-node.js)

```javascript
// a Gatsby API hook function to customize webpack configuration (here, to add aliases) in gatsby-node.js
function onCreateWebpackConfig ({actions}) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "components": path.resolve("./src/components"),
                "content": path.resolve("./src/content"),
                "pages": path.resolve("./src/pages"),
                "generated": path.resolve("./src/generated"),
                "actb": path.resolve("./"),                                        
            }
        }
    })
}
```
