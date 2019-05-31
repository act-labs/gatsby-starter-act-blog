---
title: GraphQL select all posts
keywords: Gatsby, GraphQL, all posts, MDX
menu: graphql/all posts
---


[A snippet](/snippets/main/graphql-mdx-posts/ "MDX, GraphQL, all posts") with GraphQL to select all posts, ordered by the *order* field of the frontmatter.

```javascript
query AllPosts {
  allMdx (
      filter:{
          fields:{slug: {regex: "/^/posts//" } }
      },
      sort: {
          fields: [frontmatter___order]
          order: ASC
      }          
  ){
    edges {
      node {
        frontmatter{
            title
            keywords
        }
        fields {
            slug
        }
        excerpt
      }
    }
  }
}
```