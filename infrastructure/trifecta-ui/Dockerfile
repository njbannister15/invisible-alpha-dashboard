FROM hseeberger/scala-sbt

MAINTAINER Nicholas Bannister  <nbannister@7mbtech.com>

RUN    wget https://github.com/ldaniels528/trifecta/releases/download/v0.22.0rc8-0.10.1.0/trifecta-ui-0.22.0rc8b-0.10.1.0.zip
RUN    unzip trifecta-ui-0.22.0rc8b-0.10.1.0.zip
RUN    cp -R  trifecta-ui-0.22.0rc8b-0.10.1.0/* /usr/local
RUN    mkdir .trifecta

RUN    touch .trifecta/config.properties
COPY   run.sh .
RUN    chmod 775 run.sh

EXPOSE 9000
CMD ./run.sh

# docker build -t 7mbtech/trifecta-ui .
# docker push 7mbtech/trifecta-ui
# docker run -d -p 9001:9000 -e ZK_HOSTS=zk.development-internal.com 7mbtech/trifecta-ui

