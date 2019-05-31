function query(){
    return `
    query PageLayoutQuery($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title,
                keywords,
                menu
            }    
        }  
    }
    `
}

function data({mdx}){
    const frontmatter = mdx.frontmatter;

    return {frontmatter};   
}

function combine(context, {generatePage, createPage, options}){
    generatePage();
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