package com.cmd.service;

import com.cmd.dto.RegisterUserCmdDto;

/**
 * User command Service
 * 
 * @author Nicholas Bannister
 * @since 1.0.0
 */
public interface IUserCommandService {

    public void registerNewUser(RegisterUserCmdDto userDto) throws Exception;

    /**
     * Development Learning Notes: The Application Service Layer in Domain
     * Driven Design represents the tasks the system can perform. It does not
     * just copy data to domain objects and save them
     */
}
