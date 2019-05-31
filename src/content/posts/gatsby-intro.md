---
title: Gatsby as a convenient integration layer 
keywords: Gatsby, node.js, React, static site generator, ACT Blog
order: 0
---
import FilesSourcingSnippet from 'content/snippets/main/gatsby-files-sourcing';
import GraphQLAllPostsSnippet from 'content/snippets/main/graphql-mdx-posts';

Gatsby comes with detailed [documentation](https://www.gatsbyjs.org/docs/ "Gatsby, extensive online documentation") and large and constantly growing plugin system. For new users, the amount of information could be overwhelming. In order to help to navigate through large Gatsby ecosystem, this post gives very high level overview of main Gatsby concepts and ideas. 

## Core: GraphQL, Webpack, and programmatic page generation.

Growing in popularity, static site generators produce highly optimized content with small response time and better perceived performance. One of the most popular static site generators, Gatsby is implemented on top of node.js and React, which helps it to tap directly into modern web development stack and makes it attractive for React developers. The page generation process in Gatsby mainly revolves around in-memory nodes, representing resources necessary for page construction. In Gatsby, this graph (often referred as *GraphQL*) serves as a convenient integration layer, allowing declarative access to various resources. In other words, essentially, Gatsby provides in-memory database layer, backed by GraphQL declarative query syntax.

<GraphQLAllPostsSnippet/>

Thanks to GraphQL expressive power, very complex websites could be created literally without any programming. Nonetheless, Gatsby is actually a comprehensive API: developers may hook into the build process and easily extend the system importing (*sourcing* in the Gatsby lingo) and transforming various resources. Unlike many popular website builders, Gatsby doesn't provide any proprietary content management tools, instead it concentrates on tools to build powerful integration/processing pipelines. Owing to plugins, Gatsby is able to source all common file types, information from popular databases, and even content from other CMS systems.

Typically, HTML pages are constructed from various files: CSS, Javascript/Typescript/React, HTML, JSON, markdown etc. To process files of various types, Gatsby relies on standard, production ready tools: Babel and Webpack. Babel comes with a comprehensive API and a set of plugins to transform various files to standard cross-browser Javascript. Webpack splits multiple Javascript files into optimal chunks to optimize the load time of successive page requests. React server side rendering is used to generate HTML, but original Javascript is served to clients as well and is bound (hydrated) to HTML in a browser, helping to provide a rich interactive user experience.

To create a page programmatically, the *createPage* action can be invoked inside a *createPages* callback defined in gatsby-node.js. When creating pages, a React component are provided, as well as a page context - a JSON object used directly or as a parameter for page GraphQL query. Generated JS files and page data are saved in the topmost *public* project directory. All the required data and javascript chunks (created by webpack) are listed in a data.json file, used in a browser to intelligently load pages. For example, if pages have the same component but different page data, only the absent data is requested for the second and later page requests. In Gatsby v2 there is no concept of the shared layout, but shared layouts could be trivially implemented using the Gatsby browser API (could be useful for complex page transition effects). The same applies to other shared code (context providers, a redux store, APIs, etc).

## Gatsby plugins.

Thanks to an open architecture, a lot of Gatsby functionality comes in the form of plugins. Plugins are invoked in *gatsby-config.js* and thus configure/build a website pipeline. Many of them are casually borrowed from one project to another, and could be seen practically in all Gatsby starters (projects, helping to jump start Gatsby development). For example, consider plugins listed in [an ACT starter](https://github.com/act-labs/gatsby-starter-act-blog) (to reduce clutter, common plugins were moved to separate node.js module in *gatsby* directory).

There are a few distinct plugin types in Gatsby. First of all, there are sourcing plugins, which import external data and create corresponding nodes in GraphQL. There are many plugins sourcing all types of data (databases, CMS, etc), but the most commonly used sourcing plugin is *gatsby-source-filesystem*, which reads all the files from specified directories. 

<FilesSourcingSnippet/>

The second type of plugins transforms existing nodes, often creating children. One of the commonly used transformation plugins is *gatsby-plugin-sharp* (with accompanying *gatsby-transformer-sharp*), which generates optimized images, so that for every screen resolution the image of the best quality/size could be loaded. A Gatsby *Image* component also supports placeholders, helping to achieve blazing fast initial image loading. Other often used transformation plugins are *gatsby-transformer-yaml* to parse \*.yaml files, and *gatsby-mdx* to parse MDX. In project Javascript files, various resources could be imported as usually. Under the hood, Gatsby uses webpack to support file import. Many file types, e.g., JSON and CSS, are supported by Gatsby out of the box, others, like LESS, require minor modifications to a webpack configuration, which could be accomplished using the Gatsby API or installing a proper plugin.











