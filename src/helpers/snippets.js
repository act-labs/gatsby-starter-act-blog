function layoutAndMenuQuery(){
    return `
    query LayoutQuery($parent: String, $parent_re: String) {
        layout:snippetsYaml(fields:{slug:{eq: $parent}}){
            menu {
                text
                icon
            }
        }

        snippets:allMdx(
            filter:{
                fields:{slug: {regex:$parent_re}}
            },
            sort: {
                fields: [frontmatter___menu]
                order: ASC
            }            
        )
        {
            edges{          
                node {
                    frontmatter{
                        menu
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `   
}

function contentQuery(){
    return `
    query SnippetQuery($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                keywords
                menu
            }
            fields{
                slug
            }      
        }
    }
    `
}

function processMenu({layout, snippets}, {writeData}){
    const items = snippets.edges.map(({node}, order) => {
      const menu = node.frontmatter.menu || `unknown/unknown${order}`;
      const [parent, title] = menu.split("/");
      return {slug: node.fields.slug, parent, title, order};
    });  
  
    const submenu = items.reduce((menu, snippet)=>{
      (menu[snippet.parent] || (menu[snippet.parent] = [])).push(snippet);
      return menu;
    }, {});
  
    const menu = layout.menu.map((item, order)=>{
      const mi = {text: "unknown", icon: "right-circle",...item, order};
      mi.submenu = submenu[mi.text] || [];
      return mi; 
    }).filter(v=>v.submenu.length);

    const fileName = writeData("../layout.json", {menu, items}) 

    return {layout:fileName}; 
}

function processContent({mdx}){
    return {frontmatter: mdx.frontmatter}
}

function combine({layout, frontmatter}, {generatePage, createPage, options}){
    generatePage({layout});
    createPage({frontmatter, layout:options.layout});
}

module.exports = {
    entities : {
        layout:{
            scope: "parent",
            query: layoutAndMenuQuery,
            data: processMenu
        },

        content:{
            query: contentQuery,
            data: processContent
        }
    },
    combine
}