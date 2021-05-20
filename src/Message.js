import React from 'react'

function Message({name, dname, message}) {
    return (
       <div className={`chat_message ${name === dname && "chat_reciever"}`}>
                        
                <p className="chat__messageName">{name}</p>
                <p>
                    {message} 
                    {/* <span className="chat_timeStamp">
                        {message.timestamp}
                    </span> */}
                </p>
        
        </div>
    )
}

export default Message
