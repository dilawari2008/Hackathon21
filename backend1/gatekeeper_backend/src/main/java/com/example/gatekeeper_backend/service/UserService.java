package com.example.gatekeeper_backend.service;

import java.util.List;

import com.example.gatekeeper_backend.entity.User;
import com.example.gatekeeper_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;

	public List<User> getAllVehicleno() {
		List<User> userDataList = userRepository.findAll();
		return userDataList;
	}

	  public String insertUserDto(User user){
		  userRepository.save(user);
		  return "done";
	  }

	public ResponseEntity updateUser(User user, HttpStatus ok){
		try{
			userRepository.updateStatus(user.getVehicleno(),user.getStatus());
		}
		catch (Exception e)
		{
			System.out.println("exception occured---------"+e);
		}
		return new ResponseEntity("done", HttpStatus.OK);
	}

	 
}
