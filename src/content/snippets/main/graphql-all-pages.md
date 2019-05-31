---
title: Get all site pages using GraphQL
keywords: Gatsby, GraphQL, site pages
menu: graphql/all pages
---


[A snippet](/snippets/main/graphql-all-pages/ "GraphQL, all site pages") with GraphQL to show all site pages (the path and some fields of the page context).

```javascript
query AllSitePages {
    allSitePage{
        edges {
            node {
                path
                context {
                    posts {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
}

```