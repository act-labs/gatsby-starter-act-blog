import React from "react";

import {Mdx, Layout, SideMenu} from "actb";
const {SideMenuPanel} = Layout;

export default function SideLayout({pageContext, children, location}) {
  const context = Object.assign({frontmatter:{}}, pageContext)
  const {menu, items} = context;
  const props = Object.assign({}, {layout:context.layout}, context.frontmatter);  
  return (
      <Layout {...props}>
        <SideMenuPanel menu={<SideMenu menu={menu} items={items} location={location}/>}>
          <Mdx>{children}</Mdx>
        </SideMenuPanel>
      </Layout>
  );
}



