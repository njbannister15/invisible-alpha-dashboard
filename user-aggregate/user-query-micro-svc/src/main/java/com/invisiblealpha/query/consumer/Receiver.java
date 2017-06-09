package com.invisiblealpha.query.consumer;

import java.util.concurrent.CountDownLatch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;

import com.invisiblealpha.common.events.UserRegisteredEventV1;
import com.invisiblealpha.query.domain.User;
import com.invisiblealpha.query.domain.UserRepository;

public class Receiver {

    private static final Logger LOGGER = LoggerFactory.getLogger(Receiver.class);

    private CountDownLatch latch = new CountDownLatch(1);

    @Autowired
    UserRepository repo;

    public CountDownLatch getLatch() {
        return latch;
    }

    @KafkaListener(topics = "user-events-json")
    public void receive(UserRegisteredEventV1 event) {
    	
    	
        LOGGER.info(Receiver.class.getName() + " received  " + event.getName());

        User user = new User();        
        user.setFirstName(event.getFirstName());
        user.setLastName(event.getLastName());
        user.setEntityId(event.getEntityId());
        user.setPassword(event.getPassword());
        user.setEmail(event.getEmail());

        repo.save(user);
        
        latch.countDown();
    }
}