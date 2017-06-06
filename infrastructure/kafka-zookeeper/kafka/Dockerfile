FROM invisible-alpha/kafka-zookeeper

EXPOSE 9092

COPY start-kafka.sh start-kafka.sh
RUN chmod 755 start-kafka.sh

#CMD JMX_PORT=9999 /app/kafka/bin/kafka-server-start.sh  /app/kafka/config/server.properties
CMD ./start-kafka.sh

# docker build -t invisible-alpha/kafka .
