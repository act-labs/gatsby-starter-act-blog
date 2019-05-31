
let config = {
  siteMetadata: {
    description: 'React, Ant Design, Gatsby, GraphQl, and other web technologies',
    project: 'ACT blog',
    author: 'Act Labs',
  }
}

const {commonPluginsConfigurations, addSubdirectories} = require("./gatsby");
addSubdirectories(config);
commonPluginsConfigurations(config);

config.plugins.push(
  {
    resolve: `gatsby-plugin-combine`,
    options: {
        template: './src/templates/posts-layout.js',
        helper: './src/helpers/posts.js',
        path: "/posts/"
    }
  },       
  {
    resolve: `gatsby-plugin-combine`,    
    options:  {
        template: './src/templates/snippets-layout.js',
        helper: './src/helpers/snippets.js',
        path: "/snippets/",
    }    
  },
  {
    resolve: `gatsby-plugin-combine`,    
    options:  {
      template: './src/templates/posts-layout.js',
      helper: './src/helpers/posts.js',
      path: "/pages/$",
      layout:{
        fullHeight: true
      },      
    }    
  },
  {
    resolve: `gatsby-plugin-combine`,    
    options:  {
      rootQuery: "allPagesYaml",
      component: './src/components/posts-page.js',
      helper: './src/helpers/all-posts.js',
      path: "/pages/posts/",
      layout:{
        fullHeight: true
      },
    }    
  }  

);

module.exports = config
