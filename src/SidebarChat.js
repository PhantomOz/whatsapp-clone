import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './Sidebarchat.css'

function SidebarChat({ addNewChat, name, id }) {
    const [seed, setSeed] = useState("");
    const [lchat, setLchat] = useState([])
    

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
        const unsubsribe = db
            .collection('rooms')
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapShot => 
                setLchat(snapShot.docs.map(doc => (doc.data())))
            );
        return unsubsribe;
    }, [id]);

    console.log(lchat)
    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName) {
            // do some clever stuff
            db.collection("rooms").add({
                name: roomName,
            });
        }
    };
    return !addNewChat ? (
      <Link to={`/room/${id}`}>
        <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
          <div className="sidebarChat__info">
            <h2>{name.name}</h2>
            <p>
              {lchat[0]?.name}: {lchat[0]?.message}
            </p>
          </div>
        </div>
      </Link>
    ) : (
      <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
      </div>
    );
}

export default SidebarChat
