---
title: Import MDX from other file
keywords: MDX, React, import
menu: mdx/import
---


[A snippet](/snippets/main/mdx-import/ "Import MDX from other files") demonstrating how to import markdown in other MDX or JS files. In MDX, import statements must be inserted in the beginning, right after the frontmatter

```javascript
import Chart from 'content/snippets/main/chart'

........

<Chart/>
```