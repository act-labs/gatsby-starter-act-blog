---
title: ACT, directory structure
keywords:  ACT, directory structure
menu: act blog/structure
---


[A snippet](/snippets/main/act-structure/ "ACT, directory structure") of the ACT directory structure

```sh
ACT project 
│
└───src
│   │
│   └───components // project components 
│   │
│   └───content // resources used to construct pages
│   │   │   
│   │   └───config // common configuration files (\*.yaml, \*.json, etc)
│   │   │   
│   │   └───images // a logo and other images
│   │   │
│   │   └───pages  // unique complex pages (the main page, index of posts, etc)
│   │   │
│   │   └───posts  // blog posts (markdown files)
│   │   │
│   │   └───snippets  // snippets
│   │       │
│   │       └───main  // a <main> collection of snippets (a directory with markdown files)
│   │       │
│   │       └───main.yaml  // a configuration file (corresponding to the <main> collection)
│   │
│   └───generated // pages generated using lodash templates (gatsby-plugin-combine)
│   │
│   └───helpers // helper modules (gatsby-plugin-combine)
│   │
│   └───pages // standard Gatsby pages
│   │
│   └───templates // lodash templates (gatsby-plugin-combine)
│   
└───data // data files saved by helper modules (gatsby-plugin-combine)

```