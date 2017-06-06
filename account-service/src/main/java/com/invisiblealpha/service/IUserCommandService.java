package com.invisiblealpha.service;

import org.springframework.stereotype.Service;

import com.invisiblealpha.domain.User;

/**
 * User command Service
 * @author Nicholas Bannister
 * @since 1.0.0
 */
public interface IUserCommandService {
	
	User registerNewUser(String username, String email, String password, String appUrl) throws Exception;
	
	/* Development Learning Notes:
	 * The Application Service Layer in Domain Driven Design represents the tasks the system 
	 * can perform. It does not just copy data to domain objects and save them
	 */
}
