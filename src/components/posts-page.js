import React from 'react'

import {Layout, Link} from "actb";

import { List, Avatar } from 'antd';


const Panel = Layout.Panel;


function ItemAvatar({item}){
    const keywords = (item.frontmatter.keywords || "ACT").split(",");
    return <Avatar size="large">{ keywords[0].trim() }</Avatar>
}

export default function PostsPage({pageContext}){
  const context = Object.assign({frontmatter:{}}, pageContext)
  const props = Object.assign({}, {layout:context.layout}, context.frontmatter);
  const posts = pageContext.posts;

  return (
    <Layout {...props}>
      <Panel>
        <List
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<ItemAvatar item={item}/>}
                title={<Link to={item.slug}>{item.frontmatter.title}</Link>}
                description={ item.excerpt }
                />
            </List.Item>
            )}
        />          
      </Panel>
    </Layout>
  )
}