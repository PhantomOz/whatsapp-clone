import { Avatar, IconButton } from '@material-ui/core';
import { ChatOutlined, DonutLargeOutlined, MoreVertRounded, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import { useStateValue } from './StateProvider';

function Sidebar(){
    const [rooms, setRooms] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    })
  return(
    <div className="Sidebar">
        <div className="sidebar_header">
            <Avatar src={user?.photoURL}/>
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
            {rooms.map(room => (
                <SidebarChat 
                key={room.id}
                id={room.id}
                name={room.data.name}
                />
            ))}
        </div>
    </div>
  )
}
export default Sidebar;