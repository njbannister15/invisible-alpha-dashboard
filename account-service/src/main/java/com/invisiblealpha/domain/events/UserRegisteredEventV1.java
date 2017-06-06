package com.invisiblealpha.domain.events;

import java.time.LocalDateTime;

import com.invisiblealpha.domain.User;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public final class UserRegisteredEventV1 {
	
	private final LocalDateTime timePoint = LocalDateTime.now();
	private final User registeredUser;
	
	public UserRegisteredEventV1(User registeredUser) {
		super();
		this.registeredUser = registeredUser;
	}

	public LocalDateTime getTimePoint() {
		return LocalDateTime.of(timePoint.toLocalDate(), timePoint.toLocalTime());		
	}

	public User getRegisteredUser() {		
		return new User(registeredUser);
	}
	
	
}
