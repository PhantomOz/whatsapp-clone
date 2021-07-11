import React from 'react'

function Message({name, dname, message, time}) {                                                                                                                                                                                                                          
    return (
       <div className={`chat_message ${name === dname && "chat_reciever"}`}>
                        
                <p className="chat__messageName">{name}</p>
                <p>
                    {message} 
                    {/* <span className="chat_timeStamp">
                        {}
                    </span> */}
                </p>
        
        </div>
    )
}

export default Message
