package com.invisiblealpha.domain.events;

import java.util.Properties;

import java.util.UUID;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class MessageDispatcher {
	private static Producer<String, String> producer;
	
	static {
		Properties props = new Properties();
		props.put("bootstrap.servers", "localhost:29160,localhost:29161,localhost:29162,");
		props.put("acks", "all");
		props.put("retries", 0);
		props.put("batch.size", 16384);
		props.put("linger.ms", 1);
		props.put("buffer.memory", 33554432);
		props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
		props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

		producer = new KafkaProducer<>(props);
	}

	public static void dispatch(UserRegisteredEventV1 event) {
		
		String uuid =  UUID.randomUUID().toString();
		ObjectMapper mapper = new ObjectMapper();
		try {
			String jsonInString = mapper.writeValueAsString(event);
			producer.send(
					new ProducerRecord<String, String>("user-events", uuid, jsonInString));
			producer.flush();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			//producer.close();	
		}

		
	}
}
