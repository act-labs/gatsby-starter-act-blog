---
title: ACT, sample gatsby-plugin-combine helper
keywords:  ACT, helper, gatsby-plugin-combine
menu: act blog/helper
---


[A snippet](/snippets/main/act-helper/ "sample gatsby-plugin-combine helper") with a sample *gatsby-plugin-combine* helper to construct snippet pages consisting of a short text and sidebar menu 


```javascript
// a helper module for snippet pages

// a function to query a layout configuration and all snippets
function layoutAndMenuQuery(){
    return `
    query LayoutQuery($parent: String, $parent_re: String) {
        layout:snippetsYaml(fields:{slug:{eq: $parent}}){
            menu {
                text
                icon
            }
        }

        snippets:allMdx(filter:{
            fields:{slug: {regex:$parent_re}}
        })
        {
            edges{          
                node {
                    frontmatter{
                        menu
                    }
                }
            }
        }
    }
    `   
}

// a function to query content frontmatter
function contentQuery(){
    return `
    query SnippetQuery($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                keywords
                menu
            }    
        }
    }
    `
}

// preprocess menu data (this function is executed once per snippet collection)
function processMenu({layout, snippets}, {writeData}){
    ......
    const fileName = writeData("../layout.json", {menu, items}) // save layout data

    return {layout:fileName};
}

// preprocess data for content
function processContent({mdx}){
    return {frontmatter: mdx.frontmatter}
}

// finish page creation
function combine({layout, frontmatter}, {generatePage, createPage}){
    generatePage({layout}); // generate a page using a selected lodash template
    createPage({frontmatter}); // add a new page
}

module.exports = {
    entities : { // queries/data processing for distinct page elements
        layout:{
            scope: "parent", // process data only once for all snippets in a collection
            query: layoutAndMenuQuery,
            data: processMenu
        },

        content:{
            query: contentQuery,
            data: processContent
        }
    },
    combine // finish page creation
}
```