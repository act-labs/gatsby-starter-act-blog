import React from 'react'

import {Mdx, Layout} from "actb";
import './layout/simple.css'

const Panel = Layout.Panel;

export default function DefaultSiteLayout({children, pageContext}){
  const context = Object.assign({frontmatter:{}}, pageContext)
  const props = Object.assign({}, {layout:context.layout}, context.frontmatter);
  return (
    <Layout {...props}>
      <Panel style={{ paddingTop: "1em"}}>
        {props.title? <h1>{props.title}</h1>:null}
        <Mdx>{children}</Mdx>
      </Panel>
    </Layout>
  )
}


