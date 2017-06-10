package com.invisiblealpha.query.consumer;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import com.invisiblealpha.common.events.UserRegisteredEventV1;


@Configuration
@EnableKafka
public class ReceiverConfig {

    // @Value("${kafka.bootstrap-servers}")
    private String bootstrapServers = "localhost:29160,localhost:29161,localhost:29162";
    
    private static final String GROUP_ID = "1";

    @Bean
    public Map<String, Object> consumerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, GROUP_ID);
        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        props.put(ConsumerConfig.GROUP_ID_CONFIG, "json");

        return props;
    }

    @Bean
    public ConsumerFactory<String, UserRegisteredEventV1> consumerFactory() {    	
    	DefaultKafkaConsumerFactory<String, UserRegisteredEventV1> factory = new DefaultKafkaConsumerFactory<String, UserRegisteredEventV1>(consumerConfigs());
    	factory.setValueDeserializer(new JsonDeserializer<>(UserRegisteredEventV1.class));
    	factory.setKeyDeserializer(new StringDeserializer());    	
    	
        return factory;
    }

    @Bean
    public ConcurrentKafkaListenerContainerFactory<String, UserRegisteredEventV1> kafkaListenerContainerFactory() {
        ConcurrentKafkaListenerContainerFactory<String, UserRegisteredEventV1> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        factory.setConcurrency(3);
        factory.getContainerProperties().setPollTimeout(3000);

        return factory;
    }

    @Bean
    public Receiver receiver() {
        return new Receiver();
    }
}