# ACT Gatsby Starter 

Visit a [blog](https://act-labs.github.io/) built based on this starter.

It is a starter to create blogs, documentation, or e-learning web sites. Users should be able easily create complex, interconnected pages, just editing [markdown](https://en.wikipedia.org/wiki/Markdown) files. For developers ACT provides some advanced, non-trivial building blocks, which could be useful when creating complex, interactive websites. It heavily uses [gatsby-plugin-combine](https://github.com/act-labs/gatsby-plugin-combine) to build complex pages combining multiple constituent parts (with their own queries and data processing functions). Blog entries are formated and presented with the help of [MDX](https://mdxjs.com/) - markdown with JSX embedded. [Ant Design](https://github.com/ant-design/ant-design/) UI components help to construct complex React components. Install, extend and contribute or [read more](https://act-labs.github.io/posts/act-intro/).

## Pages

ACT provides tools to create cross referenced entries, convenient for documentation, e-learning, and other sites describing closely related items. To accomplish this goal two main page types are provided: posts and snippets. Snippets are short write-ups (for example, short code excerpts), grouped by subjects for quick reference. They are convenient for readers, who already know the subject well enough, but wish to review/quickly look up information. Posts are fully fledged articles, often referencing/embedding relevant snippets. Using these page types, quite complex, functional websites could be created without any programming, just using text editor to interactively edit/preview markdown documents. 

To edit posts, go to *src/content/posts*. Posts are ordinary MDX files. Which means they are mostly markdown documents with embedded JSX and configuration information (JS objects) in the beginning (in the form of a [frontmatter](https://jekyllrb.com/docs/front-matter/) section). The post's frontmatter includes the following fields:
- title - a post title 
- keywords - for SEO
- order - used to sort blog posts

The list of fields and their interpretation are easy to customize extending *PageLayout* React component from the *src/components* directory. As posts are MDX documents, they may contain not only markdown, but also embedded JSX components. Using such components, for example, one can include a chart, data table, quiz popup, or just split text into separate tabs. In a similar fashion, other MDX documents, for example snippets, could be embedded as well:
```javascript
import Chart from 'content/snippets/main/chart'

some text
........

<Chart/>
```

Snippets are located in *src/content/snippets* subdirectories (each subdirectory is a snippet collection). They are ordinary MDX files. The snippet's frontmatter includes the following fields:
- title - a snippet title
- keywords - for SEO
- menu - group name/snippet name (slash separated group and snippet names)

Every snippet collection comes with a \*.yaml configuration file of the same name as a corresponding collection directory. The *menu* field is a sidebar menu definition, which is an array with the following fields:
- text - a group name
- icon - a name of an Ant Design icon

Complex singleton pages (e.g., the main webpage, posts index page, etc) are located in the *src/content/pages* directory. To edit such complex pages, modifications to React components or helper node.js modules could be required. For more documentation [see](https://act-labs.github.io/posts/act-blog/) and source code. Pure React pages or simple MDX documents could be also created in the standard Gatsby *src/pages* directory.

## Features

1. Progressively build more and more complex pages using [gatsby-plugin-combine](https://github.com/act-labs/gatsby-plugin-combine).
2. Comes with MDX - markdown files with embedded JSX.
3. Support for Ant Design UI components.
4. Common Gatsby plugins and components, including React Helmet (SEO and meta tags), code syntax highlighting, optimization of images, etc.
5. A customized webpack and babel configuration, including aliases to make JavaScript imports shorter and more stable relative to changing directory structure.


## Usage

1. Create a new Gatsby site using this starter

```sh
gatsby new my-blog-name https://github.com/act-labs/gatsby-starter-act-blog

cd my-blog-name
```

2. Install dependencies

```sh
npm install
```

3. Run a *develop* script

```sh
npm run develop
```

4. Open website, for example, posts (`http://localhost:8000/posts/`) or snippets page (`http://localhost:8000/snippets/main/intro/`). Iteratively edit pages in `src/content` subdirectories (if the page edited is open in a browser, you may see a live preview of your changes).

## Contribute

Any contributions are welcome. Just submit [pull requests](https://github.com/act-labs/gatsby-starter-act-blog/pulls) or report bugs/suggest new features as [GitHub issues](https://github.com/act-labs/gatsby-starter-act-blog/issues).