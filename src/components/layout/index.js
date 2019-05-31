import React from "react"

import {Seo, Footer, NavigationBar} from "actb";

import {
    Layout
  } from 'antd';
  
import "./layout.less"

const {
  Content, Sider
} = Layout;


export function Panel({style, children}){
    return (
        <Content style={Object.assign({ padding: '5px 24px' }, style)}>
            {children}                     
        </Content>
    )
}

export function SideMenuPanel({children, menu}){
    return (
      <Layout style={{ padding: '1em 0', background: '#fff', minHeight: 1000 }}>
        <Sider width={200}>
          {menu}
        </Sider>
        <Panel>{children}</Panel>
      </Layout>
    );
  }

export default function PageLayout({children, title, description, keywords, style, layout}){
  const {footer, fullHeight} = Object.assign({}, defaultLayoutOptions, layout)
  const layoutStyle = Object.assign({}, fullHeight?{height:"100%"}:null, style)
  return (
    <Layout className="main-page-layout" style={layoutStyle}>
      <Seo title={title} keywords={keywords} description={description} />
      <NavigationBar/>
        {children}
      {footer? <Footer/>:null}
    </Layout>
  );  
}

const defaultLayoutOptions = {
  footer: true
}

PageLayout.Panel = Panel;
PageLayout.SideMenuPanel = SideMenuPanel; 
