package com.invisiblealpha.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.invisiblealpha.domain.User;
import com.invisiblealpha.domain.UserRegisterCommandDto;
import com.invisiblealpha.repositories.UserRepository;
import com.invisiblealpha.service.IUserCommandService;

@RestController
public class UserCommandController {

	@Autowired
	private IUserCommandService commandService;

	@RequestMapping(value = "/user/registration", produces = { "application/json" }, method = RequestMethod.POST)
	public User registerUserAccount(@RequestBody UserRegisterCommandDto userDto) {

		try {
			commandService.registerNewUser(userDto.getFirstName(), userDto.getLastName(), userDto.getEmail(),
					userDto.getPassword());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return null;

	}

}
