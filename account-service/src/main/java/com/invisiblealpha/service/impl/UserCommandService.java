package com.invisiblealpha.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invisiblealpha.domain.User;
import com.invisiblealpha.domain.events.impl.MessageDispatcher;
import com.invisiblealpha.domain.events.impl.UserRegisteredEventV1;
import com.invisiblealpha.repositories.UserRepository;
import com.invisiblealpha.service.IUserCommandService;

@Service
public class UserCommandService implements IUserCommandService {

	@Autowired
	private UserRepository repository;

	@Override
	public User registerNewUser(String firstName, String lastName, String email, String password) throws Exception {
		System.out.println(firstName);
		if (emailExist(email)) {
			throw new Exception("There is an account with the email address: " + email);
		}

		// Persist the entity
		User newUser = repository.save( new User(firstName, lastName, email, password)) ;

		if(newUser != null){			
			MessageDispatcher.dispatch(new UserRegisteredEventV1(newUser));
			return newUser;			
		}else{
			return null;
		}
	}

	private boolean emailExist(String email) {
		User user = repository.findByEmail(email);
		if (user != null) {
			return true;
		}
		return false;
	}

	/*
	 * Development Learning Notes: you should not publish events until your
	 * transaction is commmited, an event represent something that has happened,
	 * and hence the reason why they are all named in past tense
	 */

}
