package com.invisiblealpha.domain.events.impl;

import java.time.LocalDateTime;

import com.invisiblealpha.domain.User;
import com.invisiblealpha.domain.events.IBaseEvent;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public final class UserRegisteredEventV1 implements IBaseEvent {
	
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
