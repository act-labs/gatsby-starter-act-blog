import React from "react";
import ContentComponent from '<%= fileAbsolutePath %>';
import layout from '<%= layout %>';
import SideLayout from 'components/snippets-page-layout';

export default function SnippetsLayout(props) {
    const combined = Object.assign({}, props, {pageContext:Object.assign({}, props.pageContext, layout)});
    return <SideLayout {...combined}><ContentComponent {...combined}/></SideLayout>
}

