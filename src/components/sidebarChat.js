import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../styles/sidebarChat.css'


function SidebarChat({addNewChat}) {
  const [seed, setSeed] = useState('');
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
      // do some clever database stuff
    }
  };
    
  return !addNewChat ?(
    <div className='SidebarChat'>
      <Avatar src = { `https://api.dicebear.com/5.x/avataaars/svg?seed=${seed}`} />
      <div className="sidebarChat_info">
        <h2>Messi</h2>
        <p>UCL gonna come to Camp Nou</p>
      </div>
    </div>
  ): (
    <div onClick= {createChat} className='SidebarChat'>
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat