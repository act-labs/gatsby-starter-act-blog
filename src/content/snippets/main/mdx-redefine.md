---
title: Redefine common markdown tags
keywords: MDX, React, redefine
menu: mdx/tags
---


[A snippet](/snippets/main/mdx-redefine/ "MDX, redefine markdown tags") to redefine common markdown tags
```javascript
// an Mdx component redefining common tags
export const components = {
    code: Code,
    a: Link
  };

export default function MDX(props){
    const {children} = props;

    return (
    <MDXProvider components={components}>
        {children}
    </MDXProvider>
    )
}
```