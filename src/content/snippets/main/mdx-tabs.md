---
title: Format markdown using Tabs component
keywords: MDX, markdown, Tabs, Ant Design
menu: mdx/tabs
---
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

[A snippet](/snippets/main/mdx-tabs/) of markdown to put selected chunks of text to separate tabs
````javascript
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;

........

<Tabs defaultActiveKey="1">
<TabPane tab="Tab 1" key="1">

The *first* line.

The second line.
</TabPane>
<TabPane tab="Tab 2" disabled key="2">
Disabled tab.
</TabPane>
<TabPane tab="Tab 3" key="3">

Another line.

```
cd my-project
```

</TabPane>
</Tabs>
````

Which will produce:

<Tabs defaultActiveKey="1">
<TabPane tab="Tab 1" key="1">

The *first* line.

The second line.
</TabPane>
<TabPane tab="Tab 2" disabled key="2">
Disabled tab.
</TabPane>
<TabPane tab="Tab 3" key="3">

Another line.

```
cd my-project
```
</TabPane>
</Tabs>