const path = require("path")

function query(){
    return `
    query AllPosts($id: String) {
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
        pagesYaml (id: { eq: $id })
        {    
            title
            keywords                  
        }     
    }
    `
}

function data(data, {options}){
    const posts = data.allMdx.edges.map(({node:{frontmatter, excerpt, fields}})=>{
        return {
            frontmatter,
            excerpt,
            slug: path.join(options.prefix || "/", fields.slug) 
        }
    });

    const frontmatter = data.pagesYaml;

    return {posts, frontmatter};   
}

function combine(context, {createPage, options}){
    createPage(Object.assign({}, context, {layout: options.layout}));
}

module.exports = {
    entities : {
        content:{
            query,
            data
        }
    },
    combine
}