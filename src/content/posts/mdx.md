---
title: "MDX - better control over generated HTML, embedded JSX, compound documents" 
keywords: React, MDX, JSX, Ant Design
order: 30
---
import TabsSnippet from 'content/snippets/main/mdx-tabs';
import RedefineSnippet from 'content/snippets/main/mdx-redefine';
import ImportSnippet from 'content/snippets/main/mdx-import';
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

[MDX](https://mdxjs.com/ "MDX - markdown on steroids") is a natural markdown extension: works seamlessly with React, arbitrary React components could be easily embedded, complex document composition becomes possible.

## Redefine standard elements

Normally, markdown is compiled to HTML. Appearance of HTML tags could be customized through Javascript and CSS, with usual drawbacks inherent to pure, non-componentized Javascript. In the React world, transformation to React components is a natural step forward. Tags in MDX could be easily redefined, and thus very complex, dynamic behavior could be easily achieved. For example, any text/code editor or even complex online IDE component could be used to render markdown code blocks. As another example, a custom link component, smartly prefetching site pages, could be used instead of ordinary hyperlinks.

<RedefineSnippet/>

## Embedded components

Thanks to MDX, arbitrary JSX components could be easily embedded in markdown. Which could be used, for example, to illustrate an article with charts or to split and format text. Consider how little markup is needed to organize any text into separate tabs:

<TabsSnippet/>


## Import and embed one MDX document into another

MDX documents compile to React components, which could be imported and reused in other JS files using standard import syntax. Or, in a similar fashion, they could be embedded in other MDX documents. Quite convenient, when some chunks of text could be useful in multiple places. For example, code snippets from an API reference could be reused to illustrate blog posts.

<ImportSnippet/>


