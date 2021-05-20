import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicNoneOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css'
import db from './firebase';
import Message from './Message';
import { useStateValue } from './StateProvider';

function Chat(){
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    const { roomid } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(()=>{
        if (roomid) {
            db.collection('rooms').doc(roomid).onSnapshot(snapShot => {
                setRoomName(snapShot.data().name)
            });
            db
                .collection('rooms')
                .doc(roomid)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapShot => {
                    setMessages(snapShot.docs.map(doc => doc.data()))
                })
        }
    }, [roomid]);

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[roomid]);

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("You typed >>>", input);
        db
            .collection('rooms')
            .doc(roomid)
            .collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

        setInput("")
    };
  return(
    <div className="Chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className="chat_body">
            {messages.map( (mess, index) => {
                console.log(mess)
                return <Message key={index} name={mess.name} dname={user.displayName} message={mess.message}/>
            })}     
        </div>
        <div className="chat_footer">
            <InsertEmoticon />
            <form>
                <input type="text" placeholder="Send a message" onChange={e => setInput(e.target.value)} value={input}/>
                <button className="send" onClick={sendMessage}>Send</button>
            </form>
            <MicNoneOutlined />
        </div>
    </div>
  )
}
export default Chat;