import React, { useState } from 'react';


import {Link} from "actb";
import {
    Menu, Icon,
  } from 'antd';
  
const { SubMenu } = Menu;

function Submenu({item:{title, order}, items, openKeys}){
  const slug = items[parseInt(order)].slug
  return <Menu.Item key={order}><Link to={slug} state={ {openKeys} }>{title}</Link></Menu.Item>
}

function openedKeys({menu, location, path}){
  if (location.state && location.state.openKeys){
    const openKeys = menu.filter(it=>it.submenu.some(v=>v.slug===path)).map(v=>String(v.order));
    return [...location.state.openKeys, ...openKeys.filter(v => -1 === location.state.openKeys.indexOf(v))];
  }
  return menu.map(v=>String(v.order))
}



export default function GatsbySideMenu({menu, items, location}){
    const path = location.pathname;
    items.forEach(item=>{
      item.current = item.slug === path;
    });       

    const [openKeys, setOpenKeys ] = useState(()=> openedKeys({menu, location, path}))
  
    function onOpenChange(keys){
      setOpenKeys(keys);
    } 
  
    const selectedKeys = items.filter(v=>v.current).map(v=>String(v.order));

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={ selectedKeys }
        defaultOpenKeys={ openKeys }
        style={{ height: '100%' }}
        onOpenChange={onOpenChange}
      >{
        menu.map(item=>(
          <SubMenu key={item.order} title={<span><Icon type={item.icon} />{item.text}</span>}>
            { item.submenu.map(item => Submenu({item, items, openKeys})  ) }
          </SubMenu>)
        )          
      }</Menu>
    )
  }