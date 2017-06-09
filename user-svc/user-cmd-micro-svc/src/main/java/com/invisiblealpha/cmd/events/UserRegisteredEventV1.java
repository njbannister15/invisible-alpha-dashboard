package com.invisiblealpha.cmd.events;

import lombok.Data;

@Data
public final class UserRegisteredEventV1 implements IEvent {

    private String id;
    private String name = UserRegisteredEventV1.class.getSimpleName();
    private String entityId;
    private String firstName;
    private String lastName;
    private String password;
    private String email;

}
