package com.poker.backend.handler;

import java.io.IOException;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.ObjectMapper;
import tools.jackson.databind.node.ObjectNode;

public class GameWebSocketHandler extends TextWebSocketHandler {
    
    private ObjectMapper objectMapper = new ObjectMapper();
    
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("Client connected");
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String incomingData = message.getPayload();
        JsonNode node = objectMapper.readTree(incomingData);
        String action = node.path("action").asString();

        if ("setup test".equals(action)) {
            String response = setupTestResponse();
            sendSetupTestResponse(session, response);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("Client disconnected");
    }

    private String setupTestResponse() {
        return "Hello from backend server!";
    }

    private void sendSetupTestResponse(WebSocketSession session, String message) throws IOException {
        ObjectNode response = objectMapper.createObjectNode();
        response.put("type", "connection test");
        response.put("response", message); 

        session.sendMessage(new TextMessage(objectMapper.writeValueAsString(response)));
    }
}