import io from 'socket.io-client'
import { useEffect, useState } from 'react';
const socket = io.connect("http://localhost:5000");

export const Home = () => {
    const [message, setMessage] = useState("");
    const [messageReceived, setMessageReceived] = useState("");

    const messages = [];
    const sendMessage = () => {
        socket.emit('chat message', {message});
    }

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageReceived(data.message)
            messages.push(data.message);
        })
    }, [socket]);

  return (
    <div className="w-screen h-screen">
        <div>
            <input type="text" placeholder="chat" className="border-2 border-black" onChange={(e) => {
                setMessage(e.target.value)
            }} />
            <button className="border-2 border-black px-2" onClick={sendMessage}>Invia</button>
        </div>


        <div>
            <h2>Messages</h2>
            
            {messageReceived}
        </div>
    </div>
  )
}

export default Home
