import { Avatar, IconButton } from '@material-ui/core';
import { ChatOutlined, DonutLargeOutlined, MoreVertRounded, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';

function Sidebar(){
  return(
    <div className="Sidebar">
        <div className="sidebar_header">
            <Avatar />
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeOutlined />
                </IconButton>
                <IconButton>
                    <ChatOutlined />
                </IconButton>
                <IconButton>
                    <MoreVertRounded />
                </IconButton>
            </div>
        </div>
        <div className="sidebar_search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                 <input type="text" placeholder="search or start new chat" />
            </div>   
        </div>
        <div className="sidebar_chat">
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}
export default Sidebar;