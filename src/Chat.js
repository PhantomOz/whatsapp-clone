import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicNoneOutlined, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Chat.css'

function Chat(){
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("You typed >>>", input);

        setInput("")
    };
  return(
    <div className="Chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>Room name</h3>
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
            <div className={`chat_message ${true && "chat_reciever"}`}>
                <p className="chat__messageName"> Aniogor Favour</p>
                <p>
                    Hey guys <span className="chat_timeStamp">3:47pm</span>
                </p>
            </div>          
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