package com.invisiblealpha.cmd.events;

import java.util.HashMap;
import java.util.Map;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.SendResult;
import org.springframework.kafka.support.serializer.JsonSerializer;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;

@Repository
@Transactional
public class KafkaEventStore implements IEventStore {

    private String bootstrapServers = "localhost:29160,localhost:29161,localhost:29162";

    @Bean
    public ProducerFactory<Integer, IEvent> producerFactory() {
        return new DefaultKafkaProducerFactory<>(producerConfigs());
    }

    @Bean
    public Map<String, Object> producerConfigs() {
        Map<String, Object> props = new HashMap<>();
        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        props.put(ProducerConfig.ACKS_CONFIG, "all");
        props.put(ProducerConfig.RETRIES_CONFIG, 0);
        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 16384);
        props.put(ProducerConfig.LINGER_MS_CONFIG, 1);
        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);
        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return props;
    }

    @Bean
    public KafkaTemplate<Integer, IEvent> kafkaTemplate() {
        return new KafkaTemplate<Integer, IEvent>(producerFactory());
    }

    @Override
    public void save(IEvent event) {
        KafkaTemplate<Integer, IEvent> producer = kafkaTemplate();
        ListenableFuture<SendResult<Integer, IEvent>> future = producer.send("user-events-json", event);

        future.addCallback(new ListenableFutureCallback<SendResult<Integer, IEvent>>() {
            @Override
            public void onFailure(Throwable ex) {
                // TODO Auto-generated method stub
            }

            @Override
            public void onSuccess(SendResult<Integer, IEvent> result) {
                // TODO Auto-generated method stub
            }
        });
    }
}
