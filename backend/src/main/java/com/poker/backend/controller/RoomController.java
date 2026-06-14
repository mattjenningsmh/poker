package com.poker.backend.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") 
public class RoomController{
    @GetMapping("/rooms")
    public List<String> getRoomList(){
        List<String> roomList = new ArrayList<>(List.of("Room 1", "Room 2", "Room 3", "Room 4"));
        return roomList; 
    }
}