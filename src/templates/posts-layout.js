import React from "react";
import ContentComponent from '<%= fileAbsolutePath %>';
import OneColumnLayout from 'components/page-layout';

export default function SnippetsLayout(props) {
    return <OneColumnLayout {...props}><ContentComponent {...props}/></OneColumnLayout>
}

