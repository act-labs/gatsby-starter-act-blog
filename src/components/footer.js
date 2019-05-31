import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import {Link} from "actb";
import {
    Layout, Icon
  } from 'antd';
  
  const {
    Footer
  } = Layout;


export function ActFooter({social, copyright}){
    const icons = social.map(({link, icon})=><Link key={icon} to={link}><Icon type={icon}  style={{ fontSize: '24px', marginLeft:10, color: 'rgba(0, 0, 0, 0.65)'}} /></Link>)
    return (
        <Footer style={{ textAlign: 'center' }}>
            <div>{copyright}<div style={{float:"right"}}>{icons}</div></div>
        </Footer>
    )
}

export default function SiteFooter(props){
  if (props.social){
      return <ActFooter {...props}/>
  }
  return <StaticQuery
  query={graphql`
    query {
      config: configYaml(fields:{slug: {eq:"/config/main/"}}){
          copyright
          social {
              icon
              link
          }        
      }
    }
  `}
  render={({config:{social, copyright}}) => <ActFooter social={social} copyright={copyright} {...props} />}
/>
}  