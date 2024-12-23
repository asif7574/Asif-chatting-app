import React, { useState } from 'react'
import io from 'socket.io-client'
import "./Home.css"
import { Chat } from './Chat';



const socket = io.connect("asif-chatting-ofhkvzk7g-asifkhans-projects-3587f39b.vercel.app");


export const Home = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
       
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  )
}
