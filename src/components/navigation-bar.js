import React from "react";
import {Logo, Link} from "actb"
import { StaticQuery, graphql } from 'gatsby'

import {
  Layout, Menu
} from 'antd';
  
const {
  Header
} = Layout;


export function NavigationBar({nav}){  
    return (
      <Header className="navigation-bar">
        <Logo/>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={ nav.filter(v=>v.selected).map(v=>v.text) }
            style={{ lineHeight: '64px' }}
        >
          {
            nav.map(({slug, text}, i)=>
              <Menu.Item key={i}>
                <Link to={slug || "/"} >{text}</Link>
              </Menu.Item>
            )
          }  
        </Menu>
      </Header>
    )
} 

export default function SiteNavigationBar(props){
    if (props.nav){
        return <NavigationBar {...props}/>
    }
    return <StaticQuery
    query={graphql`
      query {
        config: configYaml(fields:{slug: {eq:"/config/main/"}}){
            nav {
                text
                slug
            }        
        }
      }
    `}
    render={({config:{nav}}) => <NavigationBar nav={nav} {...props} />}
  />
}  