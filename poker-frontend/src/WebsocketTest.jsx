import {useEffect } from "react"; 

function TestWebSocket() {

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:5173/ws/game"); 

        socket.onopen = () => {
            socket.send(JSON.stringify({ action: "listRooms" })); 
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "roomList") {
                console.log("Available rooms:", data.rooms); 
            }
        };

        return () => {
            socket.close(); 
        };
    }, []); 

    return null; 
}

export default TestWebSocket; 