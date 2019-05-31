---
title: Get main configuration file using GraphQL
keywords: Gatsby, GraphQL, configuration file, YAML
menu: graphql/config
---


[A snippet](/snippets/main/graphql-main-config/ "GraphQL, main configuration") with GraphQL to request the main configuration file (*src/content/config/main.yaml*).

```javascript
query MainConfiguration {
    allConfigYaml (
        filter:{
            fields:{slug: {eq:"/config/main/"}}
        }
    )
    {
        edges {
            node {
                fields{
                    slug
                }

                nav{
                    text
                    slug
                }
            }
        }
    }
}

```