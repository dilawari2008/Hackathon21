package com.example.gatekeeper_backend.controller;

import java.util.List;

import com.example.gatekeeper_backend.entity.User;
import com.example.gatekeeper_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;


@RestController
public class UserController {
	
	@Autowired
	private UserService userService;

	@ModelAttribute
	public void setResponseHeader(HttpServletResponse response) {
		response.setHeader("Access-Control-Allow-Origin", "*");
	}

	@CrossOrigin
	@GetMapping(value = "/alluser")
	public List<User> getUserinfo() {
		return userService.getAllVehicleno();
	}

	@CrossOrigin
	@PutMapping(value = "/update")
	public ResponseEntity updateUser(@RequestBody User user)
	{
		return userService.updateUser(user, HttpStatus.OK);
	}


	@CrossOrigin
	@PostMapping(value = "/insert")
	  public String insertUserDto(@RequestBody User user)
	  {
		  return userService.insertUserDto(user);
	  }


}
