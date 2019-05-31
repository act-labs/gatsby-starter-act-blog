import React from "react";
import { MDXProvider } from '@mdx-js/tag';

import {Code, Link} from "actb";

export const components = {
    code: Code,
    a: Link
  };
  
const defaults = {components}; 

export default function MDX(props){
    const {components, children} = Object.assign({}, defaults, props);

    return (
    <MDXProvider components={components}>
        {children}
    </MDXProvider>
    )
}
