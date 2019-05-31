---
title: Get all sourced files using GraphQL
keywords: Gatsby, GraphQL, files
menu: graphql/files
---


[A snippet](/snippets/main/graphql-all-files/ "GraphQL, all files") with GraphQL to show all sourced files.

```javascript
query AllFiles {
    allFile {
        edges {
            node {
                relativePath
                sourceInstanceName
                absolutePath
            }
        }    
    }  
}
```