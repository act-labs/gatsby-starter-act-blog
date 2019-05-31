---
title: Custom Babel configuration, short import syntax
keywords: import, Babel, project components, Ant Design
menu: gatsby/.babelrc
---


[A snippet](/snippets/main/gatsby-babel/ "custom Babel configuration") with a custom Babel configuration. An *import* plugin is used for both Ant Design and project components

```javascript
// a custom Babel configuration file (.babelrc)
{
    "presets": [
        [ //first specify a gatsby preset
            "babel-preset-gatsby",
            {
                "targets": { // old browsers support
                    "browsers": [">0.25%", "not dead"],
                },
            },
        ],
    ],
    "plugins":[ // short import syntax for Ant Design and project components
        ["import", { "libraryName": "antd", "libraryDirectory": "lib", "style": true}, "ant"],
        ["import", { "libraryName": "actb", "libraryDirectory": "src/components"}, "actb"],
    ]
}
```

Similar configuration options were used to support the same import style for both Ant Design and the project itself. Thanks to this, an import of the form `import {Logo} from "actb"` under the hood is transformed to `import Logo from "actb/src/components/logo"`, and shorter imports become possible:
```javascript
// succinct import for antd components
import {Button, Icon} from "antd";
// and for project components (assuming an "actb" alias is defined)
import {Mdx, Logo} from "actb";
```

