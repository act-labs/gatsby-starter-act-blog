import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import markdown from 'react-syntax-highlighter/dist/esm/languages/hljs/markdown';
import yaml from 'react-syntax-highlighter/dist/esm/languages/hljs/yaml';

import { github as style } from 'react-syntax-highlighter/dist/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('sh', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('yaml', yaml);

export {SyntaxHighlighter};

export default function Code(props) {
    let lang = 'bash'
    if (props.className){
      const name = props.className.split("-");
      if (name.length > 1){
        lang = name[1]
      }
    }
  
    return <SyntaxHighlighter language={lang} style={style}>{props.children}</SyntaxHighlighter>
}