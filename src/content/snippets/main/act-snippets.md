---
title: ACT - a snippet page structure and collection configuration
keywords:  ACT, snippet page
menu: act blog/snippets
---


[A snippet](/snippets/main/act-snippets/ "Snippet page structure and configuration") of a typical snippet page


```markdown
---
title:  The frontmatter field containing a snippet title
keywords: used for SEO
menu: group name/snippet name (slash separated group and snippet names)
---

Some snippet content
```
And a snippet collection configuration (shared by all snippets in the collection)

```yaml
# a sidebar menu (snippet groups)
menu:
  - text: group name 1
    icon: group icon 1
  - text: group name 2
    icon: group icon 2
```