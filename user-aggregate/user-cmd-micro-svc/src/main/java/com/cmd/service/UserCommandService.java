package com.cmd.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.cmd.dto.RegisterUserCmdDto;
import com.cmd.event.IEventStore;
import com.invisiblealpha.common.events.UserRegisteredEventV1;

@Service
public class UserCommandService implements IUserCommandService {

    @Autowired
    private IEventStore store;

    public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

    @Override
    public void registerNewUser(RegisterUserCmdDto userDto) throws Exception {
        UserRegisteredEventV1 event = new UserRegisteredEventV1();

        event.setEntityId(UUID.randomUUID().toString());
        event.setId(UUID.randomUUID().toString());
        event.setEmail(userDto.getEmail());
        event.setFirstName(userDto.getFirstName());
        event.setLastName(userDto.getLastName());
        event.setPassword(PASSWORD_ENCODER.encode(userDto.getPassword()));

        store.save(event);
    }

}
