import {useEffect } from "react"; 

function WebSocketControl() {

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:5173/ws/game"); 

        socket.onopen = () => {
            socket.send(JSON.stringify({ action: "setup test" })); 
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === "connection test") {
                console.log("websocket successful: ", data); 
            }
        };

        // ensure page unload closes socket
        window.addEventListener("beforeunload", () => socket.close());

        return () => {
            socket.close(); 
        };
    }, []); 

    return null; 
}

export default WebSocketControl; 