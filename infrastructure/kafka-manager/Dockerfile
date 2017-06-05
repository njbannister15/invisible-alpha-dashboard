FROM hseeberger/scala-sbt

MAINTAINER Nicholas Bannister  <nbannister@7mbtech.com>

ENV ZK_HOSTS=zk.development-internal.com:2181 \
    KM_VERSION=1.3.3.6


RUN    wget https://github.com/yahoo/kafka-manager/archive/${KM_VERSION}.tar.gz
RUN    tar -zxvf ${KM_VERSION}.tar.gz
RUN    cd kafka-manager-${KM_VERSION} && ./sbt clean dist
RUN    mkdir /app
RUN    unzip  -d /app ./kafka-manager-${KM_VERSION}/target/universal/kafka-manager-${KM_VERSION}.zip
RUN    cp -R /app/kafka-manager-${KM_VERSION}/* /usr/local

EXPOSE 9000
ENTRYPOINT ["kafka-manager", "-Dconfig.file=/usr/local/conf/application.conf"]

# docker build -t 7mbtech/kafka-manager .
# docker push 7mbtech/kafka-manager
# docker run -d -p 9000:9000 -e  ZK_HOSTS="zk.development-internal.com:2181" 7mbtech/kafka-manager
