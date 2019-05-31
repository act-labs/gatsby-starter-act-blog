const path = require("path");


exports.addSubdirectories = function(config, dir){
    if (!dir){
        dir = path.join(process.cwd(), "/src/content");
    }
    const { lstatSync, readdirSync } = require('fs')
    const { join } = require('path')
    
    const isDirectory = source => lstatSync(source).isDirectory()
    const getDirectories = source =>
    readdirSync(source).map(name => join(source, name)).filter(isDirectory);    

    getDirectories(dir).forEach(one=> {
        addFiles(config, one)
    }) 
}

function addFiles(config, dir){
    if (!config.plugins){
        config.plugins = [];
    }

    const name = path.basename(dir);
    config.plugins.push({
        resolve: "gatsby-source-filesystem",
        options: {
          name,
          path: dir
        }
    });
}

exports.addFiles = addFiles;

const pluginsConfiguration =  [
    `gatsby-transformer-json`,     
    `gatsby-transformer-yaml`,
    'gatsby-plugin-react-helmet',    
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
        resolve: "gatsby-plugin-relative",
        options: {
            types: ["Mdx"],
            endsWith: ["Yaml", "Json"],
            trailingSlash: true            
        }
    },
    {
        resolve: `gatsby-mdx`,
        options: {
          extensions: [".mdx", ".md"]
        }
    },     
    {
        resolve: `gatsby-plugin-favicon`,
        options: {
            logo: "./src/content/images/logo.png",
    
            // WebApp Manifest Configuration
            appName: "abc-blog-starter", 
            appDescription: null, // Inferred with your package.json
            developerName: null,
            developerURL: null,
            dir: 'auto',
            lang: 'en-US',
            background: '#fff',
            theme_color: '#fff',
            display: 'standalone',
            orientation: 'any',
            start_url: '/?homescreen=1',
            version: '1.0',
    
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
          javascriptEnabled: true,
        }
    }    
];

exports.commonPluginsConfigurations = function (config){
    if (!config.plugins){
        config.plugins = []
    }

    config.plugins = config.plugins.concat(pluginsConfiguration)

    return config
}

exports.setupCompilation = function(context, options){
    const {resolve: resolve_merged, alias:alias_merged} = Object.assign({}, options);
    const alias = Object.assign(
        {
            "components": path.resolve("./src/components"),
            "content": path.resolve("./src/content"),
            "pages": path.resolve("./src/pages"),
            "generated": path.resolve("./src/generated"),
            "actb": path.resolve("./"),                                        
        },
        alias_merged
    );

    const resolve = Object.assign({
        alias      
    }, resolve_merged);

    context.onCreateWebpackConfig =  ({actions}) => {
        actions.setWebpackConfig({
            resolve           
        })
    }
}