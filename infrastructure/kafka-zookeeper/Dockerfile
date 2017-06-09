FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get install -y default-jre
RUN apt-get update -y
RUN apt-get install unzip -y
RUN apt-get install libwww-perl libdatetime-perl python python-daemon python-setuptools -y
RUN apt-get install -y wget
RUN mkdir -p /app/kafka
RUN wget http://www-eu.apache.org/dist/kafka/0.10.2.0/kafka_2.12-0.10.2.0.tgz  -P /app
RUN tar -zxvf /app/kafka_2.12-0.10.2.0.tgz  -C /app/kafka --strip-components 1
RUN sed -i.bak 's/broker.id=0/#broker.id=-1/g' /app/kafka/config/server.properties
RUN sed -i.bak 's/zookeeper.connect=localhost:2181/zookeeper.connect=zookeeper:2181/g' /app/kafka/config/server.properties
RUN sed -i.bak 's/log.retention.hours=168/log.retention.hours=-1/g' /app/kafka/config/server.properties
RUN printf 'min.insync.replicas=2\n' >> /app/kafka/config/server.properties
RUN printf 'delete.topic.enable=true\n' >> /app/kafka/config/server.properties
RUN printf 'initLimit=5\n' >> /app/kafka/config/zookeeper.properties
RUN printf 'syncLimit=2\n' >> /app/kafka/config/zookeeper.properties
RUN printf 'zookeeper.session.timeout.ms=120000\n' >> /app/kafka/config/server.properties
RUN sed -i 's/KAFKA_JMX_OPTS=\"-D/KAFKA_JMX_OPTS=\"-Djava.rmi.server.hostname=127.0.0.1 -Djava.net.preferIPv4Stack=true -D/g' /app/kafka/bin/kafka-run-class.sh


KAFKA_JMX_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.authenticate=false  -Dcom.sun.management.jmxremote.ssl=false "



ENV KAFKA_HOME /app/kafka

# docker build -t invisible-alpha/kafka-zookeeper .