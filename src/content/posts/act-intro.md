---
title:  Crafting posts, snippets and complex page navigation
keywords: ACT, Gatsby, React, MDX, JSX, Ant Design
order: 10
---
import ActInstallSnippet from 'content/snippets/main/act-install';
import ImportSnippet from 'content/snippets/main/mdx-import';
import ActPostsSnippet from 'content/snippets/main/act-posts';
import ActSnippetsSnippet from 'content/snippets/main/act-snippets';
import GatsbyUsageSnippet from 'content/snippets/main/gatsby-usage';
import ActGithubSnippet from 'content/snippets/main/act-github';

[ACT](https://github.com/act-labs/gatsby-starter-act-blog "Gatsby starter to create documentation") is a starter to create blogs, documentation, or e-learning websites. Just edit markdown files, or use [MDX](https://mdxjs.com/ "markdown with embedded React components") to quickly create formated, user interactive pages without any programming skills, or complex visual designers. As ACT is a Gatsby starter, all the power of Gatsby plugin system is at your disposal (optimized images, SEO, etc), as well as Ant Design, webpack, Babel, etc. These interesting and important topics are left for other blog posts though (see, for example, more [in depth article](/posts/act-blog/) about complex page development). Here we concentrate on installation/usage, general project structure and main ACT page types.

## Installation

ACT is a [Gatsby](https://www.gatsbyjs.org/) starter, which means [node.js](https://nodejs.org/) must be already present.

<ActInstallSnippet/>

## Pages

ACT provides tools to create cross referenced entries, convenient for documentation, e-learning, and other websites describing closely related items. To accomplish this, two main page types are provided: posts and snippets. Snippets are short write-ups (for example, short code excerpts), grouped by subjects for quick reference. They are for readers, who already know the subject well enough, but wish to review/quickly look up information. Posts are fully fledged articles, often referencing/embedding relevant snippets. Just  interactively edit/preview markdown documents using your favorite text editor. 

To edit posts, go to *src/content/posts*. Posts are ordinary MDX files. Which means they are basically markdown documents with embedded JSX and configuration information (a JS object) in the beginning (in the form of a [frontmatter](https://jekyllrb.com/docs/front-matter/) section).

<ActPostsSnippet/>

As posts are MDX documents, they may contain not only markdown, but also embedded JSX components. Using such components, for example, one can embed a chart, data table, quiz popup, or just split text into separate tabs. MDX documents themselves are React components, and hence, for example, snippets could be embedded in posts (or other snippets as well):

<ImportSnippet/>

Snippets are located in *src/content/snippets* subdirectories (each subdirectory is a snippet collection). They are ordinary MDX files. Snippets are organized into collections. Every snippet collection comes with a \*.yaml configuration file of the same name as the corresponding collection directory. Within collections, snippets are also divided into groups. Snippet pages have a two level sidebar menu (group/name) for quick navigation.

<ActSnippetsSnippet/>


Complex singleton pages (e.g., the main site page, posts index, etc.) are located in the *src/content/pages* directory. Files from this directory correspond to root pages (*pages/page.md* maps to the */page/* URL, *pages/index.md* maps to */*, etc.). To edit these pages, modifications to React components or helper node.js modules could be required. For more information about helper modules see [gatsby-plugin-combine](https://github.com/act-labs/gatsby-plugin-combine/) and source code.

Ordinary Gatsby pages (for example, pure React components or simple MDX documents) could be created in the standard Gatsby *src/pages* directory. See a [Hello Antd](/examples/hello-antd/) page in the *src/pages/examples/* directory. For more information see [ACT directory tree structure](/snippets/main/act-structure/).

## Usage

To start ACT development, Gatsby development server must be started in the ACT project home directory. After which posts and snippets could be edited/added. Modifications could be previewed live in a browser. After site updates are done and tested, static pages could be built and examined/served (tested) from the *public* directory.

<GatsbyUsageSnippet/>

## Deployment

After the build, a *public* directory containing all static resources could be deployed to any web hosting. The Gatsby website contains detailed instructions how to deploy builds to the most popular hosting providers. As they are quite similar and simple. For example, lets consider GitHub Pages, which is a free static website hosting from a leading version control service based on Git. The simplest way to deploy to GitHub Pages is to use a [gh-pages](https://github.com/tschaub/gh-pages) package.

<ActGithubSnippet/>