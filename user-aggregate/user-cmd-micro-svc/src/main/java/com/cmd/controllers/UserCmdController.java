package com.cmd.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cmd.dto.RegisterUserCmdDto;
import com.cmd.service.IUserCommandService;

@RestController
public class UserCmdController {

	@Autowired
	private IUserCommandService commandService;

	@RequestMapping(
			value = "/user/registration", 
			produces = { "application/json" }, 
			method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Object> registerUserAccount(@RequestBody RegisterUserCmdDto userDto) throws Exception {
		commandService.registerNewUser(userDto);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
