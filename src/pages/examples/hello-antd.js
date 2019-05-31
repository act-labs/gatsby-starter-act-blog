import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

import {PageLayout as Layout, Seo} from "actb"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hello Antd</h1>
    <p>This is a pure JSX page with a SEO component, navigation bar and Ant Design buttons/links to simple example pages.</p>

    <div className="buttons">
      <Button>
        <Link to="/examples/simple/">Simple</Link>
      </Button>    
      <Button>
        <Link to="/examples/mdx-page-1/">MDX 1</Link>
      </Button>
      <Button>
        <Link to="/examples/mdx-page-2/">MDX 2</Link>
      </Button>
      <Button type="primary">
        <Link to="/examples/navigation-sidebar/">Sidebar</Link>
      </Button>
    </div>
    <style>{`
    .buttons .ant-btn {
      margin-right: 8px;
      margin-bottom: 12px;
    }      
    `}</style>         
  </Layout>
)

export default IndexPage